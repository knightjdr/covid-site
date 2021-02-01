import React from 'react';
import PropTypes from 'prop-types';
import { Location } from '@reach/router';

import Link from '../link/link';
import Navbar from '../navbar/navbar-container';

import './layout.css';

const Layout = ({
  children,
  footer,
  margin,
}) => (
  <Location>
    {
      ({ location }) => (
        <div
          id="layout"
          className={margin ? 'layout layout_margin' : 'layout'}
        >
          <Navbar pathName={location.pathname} />
          <noscript className="noscript-warning">
            This site relies on JavaScript which is currently disabled in your browser.
            Some functionality will be missing as a result.
          </noscript>
          <main>{children}</main>
          {
            footer
            && (
              <footer>
                ©
                {' '}
                <Link to="https://gingraslab.lunenfeld.ca">Gingras lab</Link>
                ,
                {' '}
                {new Date().getFullYear()}
                .
              </footer>
            )
          }
        </div>
      )
    }
  </Location>
);

Layout.defaultProps = {
  footer: true,
  margin: true,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.bool,
  margin: PropTypes.bool,
};

export default Layout;
