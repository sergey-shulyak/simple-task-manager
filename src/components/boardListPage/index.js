import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import BoardList from './boardList';
import BoardEntry from './boardList/boardEntry';
import { homeUrl } from '../../utils/urlCreators';

import './boardListPage.scss';

class BoardListPage extends Component {
  componentWillMount() {
    this.props.fetchBoards();
  }

  render() {
    const { boards } = this.props;

    return (
      <div className="board-list-page">
        <Link to={homeUrl()} className="link-button board-list-page__back-link">Go back</Link>
        <BoardList>
          {boards.map(board => (
            <BoardEntry
              className="board-list-page__board"
              key={board.id}
              {...board}
            />))}
        </BoardList>
      </div>
    );
  }
}

BoardListPage.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.object),
  fetchBoards: PropTypes.func.isRequired
};

BoardListPage.defaultProps = {
  boards: []
};

export default BoardListPage;
