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
  handleFDRChange,
  handleSpecChange,
  id,
  preys,
  spectralCount,
}) => (
  <div>
    <h2 className="report__prey-header">Preys</h2>
    <Legend conditions={conditions} />
    <div className="report__prey-options">
      <Filters
        fdr={fdr}
        handleFDRChange={handleFDRChange}
        handleSpecChange={handleSpecChange}
        spectralCount={spectralCount}
      />
      <Link
        download
        nav
        to={`/downloads/${id}-saint.txt`}
      >
        <FontAwesomeIcon icon={faDownload} size="1x" />
        <span>SAINT</span>
      </Link>
    </div>
    <Table
      conditions={conditions}
      fdr={fdr}
      preys={preys}
      spectralCount={spectralCount}
    />
  </div>
);

Preys.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  fdr: PropTypes.number.isRequired,
  handleFDRChange: PropTypes.func.isRequired,
  handleSpecChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  preys: PropTypes.shape({}).isRequired,
  spectralCount: PropTypes.number.isRequired,
};

export default Preys;
