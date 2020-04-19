import React from 'react';
import PropTypes from 'prop-types';
import { Location } from '@reach/router';

import Link from '../link/link';
import Navbar from '../navbar/navbar-container';

import './layout.css';

const Layout = ({
  children,
  theme,
  toggleTheme,
}) => (
  <Location>
    {
      ({ location }) => (
        <div
          id="layout"
          className="layout"
          data-theme={theme}
        >
          <Navbar
            pathName={location.pathname}
            theme={theme}
            toggleTheme={toggleTheme}
          />
          <noscript className="noscript-warning">
            This site relies on JavaScript which is currently disabled in your browser.
            Some functionality will be missing as a result.
          </noscript>
          <main>{children}</main>
          <footer>
            ©
            {' '}
            <Link to="https://gingraslab.lunenfeld.ca">Gingras lab</Link>
            ,
            {' '}
            {new Date().getFullYear()}
            .
          </footer>
        </div>
      )
    }
  </Location>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Layout;
