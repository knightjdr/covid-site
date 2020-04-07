import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/pro-solid-svg-icons';

import Link from '../../link/link';
import Table from './table/table-container';

import './preys.css';

const Preys = ({
  conditions,
  id,
  preys,
}) => (
  <div>
    <h2 className="report__prey-header">Preys</h2>
    <div className="report__prey-options">
      <Link
        download
        nav
        to={`/downloads/${id}-saint.txt`}
      >
        <FontAwesomeIcon icon={faDownload} />
        <span>SAINT</span>
      </Link>
    </div>
    <Table
      conditions={conditions}
      fdr={0.01}
      preys={preys}
    />
  </div>
);

Preys.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  preys: PropTypes.shape({}).isRequired,
};

export default Preys;
