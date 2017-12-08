import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import BoardList from './boardList';
import Board from './boardList/board';

import './boardListPage.scss';

class BoardListPage extends Component {
  componentWillMount() {
    this.props.fetchBoards();
  }

  render() {
    const { boards, match } = this.props;

    // console.dir(boards);

    return (
      <div className="board-list-page">
        <Link to="/" className="link-button board-list-page__back-link">Go back</Link>
        <BoardList>
          {boards.map(board => (
            <Board
              className="board-list-page__board"
              key={board.id}
              url={`${match.url}/${board.id}`}
              {...board}
            />))}
        </BoardList>
      </div>
    );
  }
}

BoardListPage.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.object),
  fetchBoards: PropTypes.func.isRequired,
  match: PropTypes.shape({ url: PropTypes.string }).isRequired
};

BoardListPage.defaultProps = {
  boards: []
};

export default BoardListPage;
