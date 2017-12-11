import React from 'react';
import PropTypes from 'prop-types';

import BoardTicket from './boardTicket';

import './column.scss';

const BoardColumn = ({ title, tickets, className, match }) => (
  <div className={`column ${className}`}>
    <h2 className="column__title">{title}</h2>
    {tickets.map(ticket => (
      <BoardTicket
        key={ticket.id}
        className="column__ticket"
        url={`${match.url}/tickets/${ticket.id}`}
        {...ticket}
      />))}
  </div>
);

BoardColumn.propTypes = {
  title: PropTypes.string.isRequired,
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
  match: PropTypes.shape({ url: PropTypes.string }).isRequired
};

BoardColumn.defaultProps = {
  className: ''
};

export default BoardColumn;
