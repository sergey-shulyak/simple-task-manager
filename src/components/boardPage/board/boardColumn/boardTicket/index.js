import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BoardTicket = ({ title, description, priority, type, url }) => (
  <div className="board-ticket">
    <Link to={url} className="board-ticket__title">
      <span className="board-ticket__type">{type}</span> {title}
    </Link>

    <p className="board-ticket__description">{description}</p>
    <p className="board-ticket__priority">
      Priority:
      <span className={`board-ticket__priority board-ticket__priority_${priority}`}>
        {priority}
      </span>
    </p>
  </div>
);

BoardTicket.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  priority: PropTypes.oneOf(['high', 'medium', 'low']),
  type: PropTypes.oneOf(['feature', 'task', 'bug']).isRequired,
  url: PropTypes.string.isRequired
};

BoardTicket.defaultProps = {
  description: '',
  priority: 'medium'
};

export default BoardTicket;
