import PropTypes from 'prop-types';
import React from 'react';

import Link from '../link/link';
import Virus from '../assets/virus';

const Icon = ({ pathName }) => (
  <Link
    className="nav__icon"
    nav
    to="/"
  >
    <Virus />
    { pathName !== '/' && <span>Home</span>}
  </Link>
);

Icon.propTypes = {
  pathName: PropTypes.string.isRequired,
};

export default Icon;
