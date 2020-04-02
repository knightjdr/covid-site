import React from 'react';
import PropTypes from 'prop-types';
import { Location } from '@reach/router';

import Navbar from './navbar/navbar';

import './layout.css';

const Layout = ({
  children,
}) => (
  <Location>
    {
      ({ location }) => (
        <div className="layout">
          <Navbar pathName={location.pathname} />
          <main>{children}</main>
          <footer>
            ©
            <a href="https://gingraslab.lunenfeld.ca">Gingras lab</a>
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
};

export default Layout;
