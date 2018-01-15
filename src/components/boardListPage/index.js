import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import BoardList from './boardList';
import BoardEntry from './boardList/boardEntry';
import { HOME_URL } from '../../utils/urlCreators';

import modalNames from '../modals/modalNames';

import './boardListPage.scss';

class BoardListPage extends Component {
  componentWillMount() {
    this.props.fetchBoards();
  }

  handleNewBoardButtonClick = (event, props) => props.showModal(modalNames.EDIT_BOARD);

  render() {
    const { boards } = this.props;

    return (
      <div className="board-list-page">
        <Link to={HOME_URL} className="board-list-page__back-link">Go back</Link>
        <a
          className="board-list-page__new-board-link"
          onClick={e => this.handleNewBoardButtonClick(e, this.props)}
        >New board
        </a>
        <BoardList className="board-list-page__board-list">
          {boards.map(board => (
            <BoardEntry
              className="board-list__board"
              key={board.id}
              showModal={this.props.showModal}
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
  showModal: PropTypes.func.isRequired
};

BoardListPage.defaultProps = {
  boards: []
};

export default BoardListPage;
