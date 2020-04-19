import React from 'react';

import Link from '../link/link';
import Virus from '../assets/virus';

const Icon = () => (
  <Link
    className="nav__icon"
    nav
    to="/"
  >
    <Virus />
    <span>Home</span>
  </Link>
);

export default Icon;
