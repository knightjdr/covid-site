import PropTypes from 'prop-types';
import React from 'react';

import Icon from './icon';
import Nav from './navbar-style';

const Navbar = ({
  pathName,
}) => (
  <Nav>
    { pathName !== '/' && <Icon /> }
  </Nav>
);

Navbar.defaultProps = {
  pathName: '/',
};

Navbar.propTypes = {
  pathName: PropTypes.string,
};

export default Navbar;
