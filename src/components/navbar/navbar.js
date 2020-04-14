import PropTypes from 'prop-types';
import React from 'react';

import Icon from './icon';
import Link from '../link/link';

import './navbar.css';

const Navbar = ({
  pathName,
}) => (
  <div className="nav">
    { pathName !== '/' && <Icon /> }
    <div className="nav__right">
      <Link to="/search">Search</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/about">About</Link>
    </div>
  </div>
);

Navbar.defaultProps = {
  pathName: '/',
};

Navbar.propTypes = {
  pathName: PropTypes.string,
};

export default Navbar;
