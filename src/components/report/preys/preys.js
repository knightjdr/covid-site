import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/pro-solid-svg-icons';

import Legend from '../legend';
import Link from '../../link/link';
import Table from './table/table-container';

import './preys.css';
import Filters from './filters';

const Preys = ({
  conditions,
  fdr,
  handleCountChange,
  handleFDRChange,
  handleSpecificityChange,
  highlightedPrey,
  id,
  preys,
  specificity,
  spectralCount,
}) => (
  <div className="report__preys">
    <h2 className="report__prey-header">Preys</h2>
    <Legend conditions={conditions} />
    <div className="report__prey-options">
      <Filters
        fdr={fdr}
        handleCountChange={handleCountChange}
        handleFDRChange={handleFDRChange}
        handleSpecificityChange={handleSpecificityChange}
        specificity={specificity}
        spectralCount={spectralCount}
      />
      <Link
        download
        nav
        to={`/downloads/saint/${id}-saint.txt`}
      >
        <FontAwesomeIcon icon={faDownload} size="1x" />
        <span>SAINT</span>
      </Link>
    </div>
    <Table
      bait={id}
      conditions={conditions}
      fdr={fdr}
      highlightedPrey={highlightedPrey}
      preys={preys}
      specificity={specificity}
      spectralCount={spectralCount}
    />
  </div>
);

Preys.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  fdr: PropTypes.number.isRequired,
  handleCountChange: PropTypes.func.isRequired,
  handleFDRChange: PropTypes.func.isRequired,
  handleSpecificityChange: PropTypes.func.isRequired,
  highlightedPrey: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  preys: PropTypes.shape({}).isRequired,
  specificity: PropTypes.number.isRequired,
  spectralCount: PropTypes.number.isRequired,
};

export default Preys;
