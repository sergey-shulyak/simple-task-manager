import React from 'react';
import PropTypes from 'prop-types';

import Ticket from './ticket';

import modalNames from '../../../modals/modalNames';

import './column.scss';

const handleEditButtonClick = (event, props) =>
  props.showModal(modalNames.EDIT_COLUMN, {
    id: props.id,
    boardId: props.boardId,
    title: props.title,
    columns: props.columns
  });

const handleDeleteButtonClick = (event, props) =>
  props.showModal(modalNames.DELETE_COLUMN, {
    id: props.id,
    boardId: props.boardId,
    title: props.title,
    columns: props.columns
  });

const Column = props => (
  <div className={`column ${props.className}`}>
    <div className="column__controls">
      <h2 className="column__title">{props.title}</h2>
      <button
        className="column__button-rename"
        onClick={event => handleEditButtonClick(event, props)}>
        <i className="fas fa-edit" aria-hidden="true" />
      </button>
      <button
        className="column__button-delete"
        onClick={event => handleDeleteButtonClick(event, props)}>
        <i className="fas fa-trash" aria-hidden="true" />
      </button>
    </div>
    {props.tickets.map(ticket => (
      <Ticket
        key={ticket.id}
        className="column__ticket"
        boardId={props.boardId}
        showModal={props.showModal}
        {...ticket}
      />))}
  </div>
);

Column.propTypes = {
  boardId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
  showModal: PropTypes.func.isRequired
};

Column.defaultProps = {
  className: ''
};

export default Column;
