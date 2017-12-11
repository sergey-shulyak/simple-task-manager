import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './board.scss';

const Board = ({ title, description, url, className }) => (
  <div className={`board-entry ${className}`}>
    <Link to={url} className="board-entry__title">{title}</Link>
    <p className="board-entry__description">{description}</p>
  </div>
);

Board.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired,
  className: PropTypes.string
};

Board.defaultProps = {
  description: '',
  className: ''
};

export default Board;
