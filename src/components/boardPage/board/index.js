import React from 'react';
import PropTypes from 'prop-types';

import BoardColumn from './boardColumn';

const Board = ({ title, columns, tickets, match }) => (
  <div className="board">
    <h2 className="board__title">{title}</h2>
    {columns.map(column => (
      <BoardColumn
        key={column.id}
        className="board-column__ticket"
        tickets={tickets.filter(ticket => ticket.status === column.title)}
        match={match}
        {...column}
      />))}
  </div>
);

Board.propTypes = {
  title: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object),
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape({ url: PropTypes.string }).isRequired
};

Board.defaultProps = {
  columns: []
};

export default Board;
