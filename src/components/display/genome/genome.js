import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/pro-duotone-svg-icons';

import Link from '../../link/link';
import RNA from './rna/rna';
import description from './description/description';

import './genome.css';

const Genome = ({
  handleClick,
  orf,
}) => (
  <section className="display">
    <div className="display__inner">
      <h2
        className="display__title"
        id="genome"
      >
        <FontAwesomeIcon icon={faCircleNotch} />
        Genome
      </h2>
      <p className="display__legend">
        The viral genome is a single-stranded RNA approximately twenty-nine kilobases in size.
        In has fifteen known open-reading frames that encode twenty-nine proteins.
        The reference sequence for the features below is
        {' '}
        <Link to="https://www.ncbi.nlm.nih.gov/nuccore/MN908947.3">MN908947.3</Link>
        .
      </p>
      <p className="display__instructions">
        <span className="display__instructions-desktop">
          Click an ORF to view details about it.
        </span>
        <span className="display__instructions-touch">
          Tap an ORF to view details about it.
        </span>
      </p>
      <div className="display__genome">
        <RNA handleClick={handleClick} />
        { orf && description[orf] }
      </div>
    </div>
  </section>
);

Genome.propTypes = {
  handleClick: PropTypes.func.isRequired,
  orf: PropTypes.string.isRequired,
};

export default Genome;
