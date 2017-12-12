import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ticketUrl } from '../../../../../utils/urlCreators';
import { priorityIcons, typeIcons } from '../../../../misc/fontAwesomeIcons';

import './ticket.scss';

const Ticket = ({
  id,
  title,
  description,
  priority,
  type,
  boardId,
  className
}) => (
  <div className={`ticket ${className}`}>
    <Link to={ticketUrl(boardId, id)} className="ticket__title">{title}</Link>
    <p className="ticket__description">{description}</p>
    <p>
      <span className="ticket__field">Type: </span>
      <span className="ticket__icon">{typeIcons[type]} </span>
      <span className={`ticket__type ticket__type_${type}`}>{type}</span>
    </p>
    <p>
      <span className="ticket__field">Priority: </span>
      <span className="ticket__icon">{priorityIcons[priority]} </span>
      <span className={`ticket__priority ticket__priority_${priority}`}>{priority}</span>
    </p>
  </div>
);

Ticket.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  priority: PropTypes.oneOf(['high', 'medium', 'low']),
  type: PropTypes.oneOf(['feature', 'task', 'bug']).isRequired,
  boardId: PropTypes.number.isRequired,
  className: PropTypes.string
};

Ticket.defaultProps = {
  description: '',
  priority: 'medium',
  className: ''
};

export default Ticket;
