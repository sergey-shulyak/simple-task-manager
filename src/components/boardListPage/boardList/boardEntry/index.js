import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { boardUrl } from '../../../../utils/urlCreators';

import modalNames from '../../../modals/modalNames';

import './board.scss';

const handleDeleteButtonClick = (event, props) => {
  event.preventDefault();

  props.showModal(modalNames.DELETE_BOARD, { id: props.id, title: props.title });
};

const handleEditButtonClick = (event, props) => {
  event.preventDefault();

  props.showModal(modalNames.EDIT_BOARD, {
    id: props.id,
    title: props.title,
    description: props.description,
    columns: props.columns.map(column => column.title).join(', ')
  });
};

const BoardEntry = props => (
  <Link to={boardUrl(props.id)} className="board-entry__wrapper">
    <div className={`board-entry ${props.className}`}>
      <div className="board-entry__info">
        <h2 className="board-entry__title">{props.title}</h2>
        <p className="board-entry__description">{props.description}</p>
      </div>
      <div className="board-entry__controls">
        <button
          className="board-entry__edit"
          onClick={event => handleEditButtonClick(event, props)}>
          <i className="fas fa-edit" aria-hidden="true" /> Edit
        </button>
        <button
          className="board-entry__delete"
          onClick={event => handleDeleteButtonClick(event, props)}>
          <i className="fas fa-trash" aria-hidden="true" /> Remove
        </button>
      </div>
    </div>
  </Link>
);

BoardEntry.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  className: PropTypes.string,
  showModal: PropTypes.func.isRequired
};

BoardEntry.defaultProps = {
  description: '',
  className: ''
};

export default BoardEntry;
