import React from 'react';
import PropTypes from 'prop-types';

import Column from './column';

import './board.scss';

const Board = ({ id, title, columns, tickets, showModal }) => (
  <div className="board">
    <h1 className="board__title">{title}</h1>
    <div className="board__columns">
      {columns.map(column => (
        <Column
          key={column.id}
          className="board__column"
          boardId={id}
          tickets={tickets.filter(ticket => ticket.columnId === column.id)}
          showModal={showModal}
          {...column}
        />))}
    </div>
  </div>
);

Board.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object),
  tickets: PropTypes.arrayOf(PropTypes.object),
  showModal: PropTypes.func.isRequired
};

Board.defaultProps = {
  id: '',
  title: '',
  columns: [],
  tickets: []
};

export default Board;
