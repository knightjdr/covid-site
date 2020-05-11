import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/pro-duotone-svg-icons';

import RNA from './rna/rna';

import './sequence.css';

const Sequence = ({}) => (
  <section className="display">
    <div className="display__inner">
      <h2 className="display__title">
        <FontAwesomeIcon icon={faCircleNotch} />
        RNA sequence
      </h2>
      <p className="display__legend">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p className="display__instructions">
        View details about each ORF by hovering over it.
      </p>
      <RNA />
    </div>
  </section>
);

Sequence.propTypes = {};

export default Sequence;