import React from 'react';
import PropTypes from 'prop-types';

import BoardList from './boardList';
import Board from './boardList/board';

const mapBoardToListElement = boardList => boardList.map(board => <Board {...board} />);

const BoardListPage = ({ boardList }) => (
  <div className="board-list-page">
    <BoardList>
      {mapBoardToListElement(boardList)}
    </BoardList>
  </div>
);

BoardListPage.propTypes = {
  boardList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default BoardListPage;
