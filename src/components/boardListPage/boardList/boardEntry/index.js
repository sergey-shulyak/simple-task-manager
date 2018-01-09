import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { boardUrl } from '../../../../utils/urlCreators';

import './board.scss';

const handleClick = (event, props) => {
  event.preventDefault();

  props.showDeleteModal({ id: props.id, title: props.title });
};

const BoardEntry = props => (
  <Link to={boardUrl(props.id)} className="board-entry">
    <div className={`board-entry__content ${props.className}`}>
      <h2 className="board-entry__title">{props.title}</h2>
      <p className="board-entry__description">{props.description}</p>
      <button name="deleteBoard" onClick={event => handleClick(event, props)}>
        <i className="fa fa-trash" aria-hidden="true" />
      </button>
    </div>
  </Link>
);

BoardEntry.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  className: PropTypes.string,
  showDeleteModal: PropTypes.func.isRequired
};

BoardEntry.defaultProps = {
  description: '',
  className: ''
};

export default BoardEntry;
