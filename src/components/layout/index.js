import React from 'react';
import PropTypes from 'prop-types';

import './layout.scss';

const Layout = ({ children }) => (
  <div className="layout">
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
