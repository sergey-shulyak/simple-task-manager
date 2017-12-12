import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { boardUrl } from '../../../../utils/urlCreators';

import './board.scss';

const Board = ({ id, title, description, className }) => (
  <Link to={boardUrl(id)} className="board-entry">
    <div className={`board-entry__content ${className}`}>
      <h2 className="board-entry__title">{title}</h2>
      <p className="board-entry__description">{description}</p>
    </div>
  </Link>
);

Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  className: PropTypes.string
};

Board.defaultProps = {
  description: '',
  className: ''
};

export default Board;
