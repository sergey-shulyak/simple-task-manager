import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './ticket.scss';

const BoardTicket = ({
  title,
  description,
  priority,
  type,
  url,
  className
}) => (
  <div className={`ticket ${className}`}>
    <Link to={url} className="ticket__title">{title}</Link>
    <p className="ticket__description">{description}</p>
    <p>
      <span className="ticket__field">Type: </span>
      <span className={`ticket__type ticket__type_${type}`}>{type}</span>
    </p>
    <p>
      <span className="ticket__field">Priority: </span>
      <span className={`ticket__priority ticket__priority_${priority}`}>{priority}</span>
    </p>
  </div>
);

BoardTicket.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  priority: PropTypes.oneOf(['high', 'medium', 'low']),
  type: PropTypes.oneOf(['feature', 'task', 'bug']),
  url: PropTypes.string.isRequired,
  className: PropTypes.string
};

BoardTicket.defaultProps = {
  title: '',
  description: '',
  priority: 'medium',
  type: '',
  className: ''
};

export default BoardTicket;
