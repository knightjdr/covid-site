import React from 'react';
import PropTypes from 'prop-types';
import { Location } from '@reach/router';

import Link from '../link/link';
import Navbar from '../navbar/navbar';

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
};

export default Layout;
