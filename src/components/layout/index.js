import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div id="layout">
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
