import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BoardList from './boardList';
import Board from './boardList/board';

const mapBoardsToListElement = boards =>
  boards.map(board => <Board key={board.id} {...board} />);

class BoardListPage extends Component {
  componentDidMount() {
    this.props.fetchBoards();
  }

  render() {
    const { boards } = this.props;
    return (
      <div className="board-list-page">
        <BoardList>
          {mapBoardsToListElement(boards)}
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
