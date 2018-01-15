import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ticketUrl } from '../../../../../utils/urlCreators';
import { priorityIcons, typeIcons } from '../../../../misc/fontAwesomeIcons';

import modalNames from '../../../../modals/modalNames';

import './ticket.scss';

const handleDeleteButtonClick = (event, props) => {
  event.preventDefault();

  props.showModal(
    modalNames.DELETE_TICKET,
    { boardId: props.boardId, id: props.id, title: props.title }
  );
};

const handleEditButtonClick = (event, props) => {
  event.preventDefault();

  props.showModal(modalNames.EDIT_TICKET, { ...props });
};

const Ticket = props => (
  <Link to={ticketUrl(props.boardId, props.id)} className="ticket__wrapper">
    <div className={`ticket ${props.className}`}>
      <div className="ticket__info">
        <h3 className="ticket__title">{props.title}</h3>
        <p className="ticket__description">{props.description}</p>
        <p>
          <span className="ticket__field">Type: </span>
          <span className="ticket__icon">{typeIcons[props.type]} </span>
          <span className={`ticket__type ticket__type_${props.type}`}>
            {props.type}
          </span>
        </p>
        <p>
          <span className="ticket__field">Priority: </span>
          <span className="ticket__icon">{priorityIcons[props.priority]} </span>
          <span className={`ticket__priority ticket__priority_${props.priority}`}>
            {props.priority}
          </span>
        </p>
      </div>
      <div className="ticket__controls">
        <button
          className="ticket__edit"
          onClick={event => handleEditButtonClick(event, props)} >
          <i className="fa fa-pencil" aria-hidden="true" />
        </button>
        <button
          className="ticket__delete"
          onClick={event => handleDeleteButtonClick(event, props)} >
          <i className="fa fa-trash" aria-hidden="true" />
        </button>
      </div>
    </div>
  </Link>
);

Ticket.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  priority: PropTypes.oneOf(['high', 'medium', 'low']),
  type: PropTypes.oneOf(['feature', 'task', 'bug']).isRequired,
  boardId: PropTypes.string.isRequired,
  className: PropTypes.string
};

Ticket.defaultProps = {
  description: '',
  priority: '',
  className: ''
};

export default Ticket;
