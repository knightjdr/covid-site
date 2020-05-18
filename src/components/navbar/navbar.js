import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { faBars } from '@fortawesome/pro-solid-svg-icons';

import Icon from './icon';
import ButtonIcon from '../buttons/icon/button';
import Link from '../link/link';
import Theme from './theme-container';

import './navbar.css';

const SharedLinks = () => (
  <>
    <Link to="/search">Search</Link>
    <Link to="/downloads">Downloads</Link>
    <Link to="/resources">Resources</Link>
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
    <Icon pathName={pathName} />
    <div className={`nav__menu ${isMenuOpen ? 'nav__menu_open' : 'nav__menu_closed'}`}>
      <ButtonIcon
        ariaLabel="navigation menu"
        icon={faBars}
        kind="primary"
        onClick={handleClick}
        type="button"
      />
      <div
        className="nav__menu-links"
        ref={ref}
      >
        <Link to="/">Home</Link>
        <SharedLinks />
        <Theme />
      </div>
    </div>
    <div className="nav__right">
      <SharedLinks />
      <Theme />
    </div>
  </div>
));


Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  pathName: PropTypes.string.isRequired,
};

export default Navbar;
