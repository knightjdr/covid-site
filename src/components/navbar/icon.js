import React from 'react';
import { Link } from 'gatsby';

import Virus from './assets/virus';

const Icon = () => (
  <Link
    className="nav__icon"
    to="/"
  >
    <Virus />
    <span>Home</span>
  </Link>
);

export default Icon;
