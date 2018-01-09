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
        <a
          className="link-button board-list-page__new-board-link"
          onClick={this.props.showNewBoardModal}
        >New board
        </a>
        <BoardList>
          {boards.map(board => (
            <BoardEntry
              className="board-list-page__board"
              key={board.id}
              showDeleteModal={this.props.showDeleteBoardModal}
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
  showNewBoardModal: PropTypes.func.isRequired,
  showDeleteBoardModal: PropTypes.func.isRequired
};

BoardListPage.defaultProps = {
  boards: []
};

export default BoardListPage;
