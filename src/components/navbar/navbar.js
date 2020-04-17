import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { faBars } from '@fortawesome/pro-solid-svg-icons';

import Icon from './icon';
import ButtonIcon from '../buttons/icon/button';
import Link from '../link/link';

import './navbar.css';

const SharedLinks = () => (
  <>
    <Link to="/search">Search</Link>
    <Link to="/downloads">Downloads</Link>
    <Link to="/about">About</Link>
  </>
);

const Navbar = forwardRef((
  {
    handleClick,
    isMenuOpen,
    pathName,
  },
  ref,
) => (
  <div className="nav">
    { pathName !== '/' && <Icon /> }
    <div className={`nav__menu ${isMenuOpen ? 'nav__menu_open' : 'nav__menu_closed'}`}>
      <ButtonIcon
        icon={faBars}
        kind="primary"
        onClick={handleClick}
        size="xs"
        type="button"
      />
      <div
        className="nav__menu-links"
        ref={ref}
      >
        <Link to="/">Home</Link>
        <SharedLinks />
      </div>
    </div>
    <div className="nav__right">
      <SharedLinks />
    </div>
  </div>
));


Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  pathName: PropTypes.string.isRequired,
};

export default Navbar;
