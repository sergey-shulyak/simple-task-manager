import React from 'react';
import PropTypes from 'prop-types';

import Column from './column';

import './board.scss';

const Board = ({ title, columns, tickets }) => (
  <div className="board">
    <h1 className="board__title">{title}</h1>
    <div className="board__columns">
      {columns.map(column => (
        <Column
          key={column.id}
          className="board__column"
          tickets={tickets.filter(ticket => ticket.status === column.title)}
          {...column}
        />))}
    </div>
  </div>
);

Board.propTypes = {
  title: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object),
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired
};

Board.defaultProps = {
  columns: []
};

export default Board;