import React from 'react';
import PropTypes from 'prop-types';

import Column from './column';

import modalNames from '../../modals/modalNames';

import './board.scss';

const handleNewTicketButtonClick = (event, props) =>
  props.showModal(modalNames.EDIT_TICKET);

const handleNewColumnButtonClick = (event, props) =>
  props.showModal(modalNames.EDIT_COLUMN, {
    boardId: props.id,
    columns: props.columns,
    isNew: true
  });

const Board = props => (
  <div className="board">
    <h1 className="board__title">{props.title}</h1>
    <div className="board__controls">
      <button
        className="board__new-column-button"
        onClick={e => handleNewColumnButtonClick(e, props)}>
        <i className="fas fa-columns" /> Add column
      </button>
      <button
        className="board__new-ticket-button"
        onClick={e => handleNewTicketButtonClick(e, props)}>
        <i className="fas fa-ticket-alt" /> Create ticket
      </button>
    </div>
    <div className="board__columns">
      {props.columns.map(column => (
        <Column
          key={column.id}
          className="board__column"
          boardId={props.id}
          tickets={props.tickets.filter(ticket => ticket.columnId === column.id)}
          showModal={props.showModal}
          columns={props.columns}
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
