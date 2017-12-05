import React from 'react';
import PropTypes from 'prop-types';

const BoardList = ({ children }) => (
  <div className="board-list">
    {children}
  </div>
);

BoardList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default BoardList;
