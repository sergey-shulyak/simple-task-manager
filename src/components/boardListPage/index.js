import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import BoardList from './boardList';
import Board from './boardList/board';

class BoardListPage extends Component {
  componentWillMount() {
    this.props.fetchBoards();
  }

  render() {
    const { boards } = this.props;
    return (
      <div className="board-list-page">
        <Link to="/">Go back</Link>
        <BoardList>
          {boards.map(board => <Board key={board.id} {...board} />)}
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
