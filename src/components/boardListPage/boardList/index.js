import React from 'react';
import PropTypes from 'prop-types';

import './boardList.scss';

const BoardList = ({ className, children }) => (
  <div className={`board-list ${className}`}>
    {children}
  </div>
);

BoardList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

BoardList.defaultProps = {
  className: ''
};

export default BoardList;
