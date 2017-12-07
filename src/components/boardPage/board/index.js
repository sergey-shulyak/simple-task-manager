import React from 'react';
import PropTypes from 'prop-types';

import BoardColumn from './';

const Board = ({ title, columns, tickets }) => (
  <div className="board">
    <h2 className="board__title">{title}</h2>
    {columns.map(column => (
      <BoardColumn
        className="board-column__ticket"
        tickets={tickets.filter(ticket => ticket.status === column.title)}
        {...column}
      />))}
  </div>
);

Board.propTypes = {
  title: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Board;
