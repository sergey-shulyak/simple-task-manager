import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './board.scss';

const Board = ({ title, description, url }) => (
  <div className="board">
    <Link to={url} className="title">{title}</Link>
    <p className="description">{description}</p>
  </div>
);

Board.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired
};

Board.defaultProps = {
  description: ''
};

export default Board;
