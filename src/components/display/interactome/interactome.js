import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAbacus } from '@fortawesome/pro-duotone-svg-icons';

import InteractomeGrid from './interactome-grid';
import Link from '../../link/link';

import './interactome.css';

const Interactome = () => (
  <section className="display">
    <div className="display__inner">
      <h2
        className="display__title"
        id="interactome"
      >
        <FontAwesomeIcon icon={faAbacus} />
        Interactome
      </h2>
      <p className="display__legend">
        We detected 7 810 total proximity interactions between exogenous viral baits and
        native human preys. These interactions are amongst 2 242 unique human proteins.
        {' '}
        <Link
          nav
          to="/NSP12"
        >
          NSP12
        </Link>
        {' '}
        had the fewest number of interactions (6) and
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
      <InteractomeGrid />
    </div>
  </section>
);

export default Interactome;
