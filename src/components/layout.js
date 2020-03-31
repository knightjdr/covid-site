import React from 'react';
import PropTypes from 'prop-types';

import './layout.css';

const Layout = ({ children }) => (
  <>
    <div className="layout">
      <main>{children}</main>
      <footer>
        ©
        {' '}
        {new Date().getFullYear()}
        ,
        {' '}
        <a href="https://gingraslab.lunenfeld.ca">Gingras lab</a>
        .
      </footer>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
