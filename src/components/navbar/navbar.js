import PropTypes from 'prop-types';
import React from 'react';

import Icon from './icon';
import Link from '../link/link';
import Nav from './navbar-style';

const Navbar = ({
  pathName,
}) => (
  <Nav>
    { pathName !== '/' && <Icon /> }
    <div className="nav__right">
      <Link to="/downloads">Downloads</Link>
      <Link to="/about">About</Link>
    </div>
  </Nav>
);

Navbar.defaultProps = {
  pathName: '/',
};

Navbar.propTypes = {
  pathName: PropTypes.string,
};

export default Navbar;
