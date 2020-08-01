import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAbacus } from '@fortawesome/pro-duotone-svg-icons';

import Link from '../../link/link';

const Interactome = () => (
  <section className="display">
    <div className="display__inner">
      <h2
        className="display__title"
        id="heatmap"
      >
        <FontAwesomeIcon icon={faAbacus} />
        Interactome
      </h2>
      <p className="display__legend">
        We detected 11 200 total proximity interactions between exogenous viral baits and
        native human preys. These interactions are amongst 2 242 unique human proteins.
        {' '}
        <Link
          nav
          to="/NSP12"
        >
          NSP12
        </Link>
        {' '}
        had the fewest (6) and
        {' '}
        <Link
          nav
          to="/M"
        >
          M
        </Link>
        {' '}
        had the greatest (938). You can view all interactions on our
        {' '}
        <Link nav to="/heatmap">heat map</Link>
        .
      </p>
    </div>
  </section>
);

export default Interactome;
