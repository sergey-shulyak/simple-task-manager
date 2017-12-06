import React from 'react';
import PropTypes from 'prop-types';

const Board = ({ title, description }) => (
  <div className="board">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

Board.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Board;
