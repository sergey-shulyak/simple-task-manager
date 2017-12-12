import React from 'react';
import PropTypes from 'prop-types';

import Ticket from './ticket';

const Column = ({ title, tickets, className }) => (
  <div className={`column ${className}`}>
    <h2 className="column__title">{title}</h2>
    {tickets.map(ticket => (
      <Ticket
        key={ticket.id}
        className="column__ticket"
        {...ticket}
      />))}
  </div>
);

Column.propTypes = {
  title: PropTypes.string.isRequired,
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string
};

Column.defaultProps = {
  className: ''
};

export default Column;
