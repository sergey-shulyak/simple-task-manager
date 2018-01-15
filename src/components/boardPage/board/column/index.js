import React from 'react';
import PropTypes from 'prop-types';

import Ticket from './ticket';

import './column.scss';

const Column = ({ title, tickets, className, boardId, showModal }) => (
  <div className={`column ${className}`}>
    <h2 className="column__title">{title}</h2>
    {tickets.map(ticket => (
      <Ticket
        key={ticket.id}
        className="column__ticket"
        boardId={boardId}
        showModal={showModal}
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
