import PropTypes from 'prop-types';
import React from 'react';

import Comparison from './comparison/comparison-container';
import Link from '../link/link';

import './report.css';

const Report = ({
  conditions,
  copyProteinToClipboard,
  description,
  gene,
  orfName,
  preys,
  proteinSequence,
  uniprot,
}) => (
  <div className="report">
    <header>
      <span>Gene</span>
      <span>{gene}</span>
      <span>ORF</span>
      <span>{orfName}</span>
      <span>Uniprot</span>
      <span>
        <Link
          nav
          to={`https://www.uniprot.org/uniprot/${uniprot}`}
        >
          {uniprot}
        </Link>
      </span>
      <span>Description</span>
      <span>{description}</span>
    </header>
    <details className="report__protein-sequence">
      <summary>Protein sequence</summary>
      <code>
        {proteinSequence}
      </code>
      <button
        onClick={copyProteinToClipboard}
        type="button"
      >
        copy
      </button>
    </details>
    <Comparison
      conditions={conditions}
      preys={preys}
    />
  </div>
);

Report.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  copyProteinToClipboard: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  gene: PropTypes.string.isRequired,
  orfName: PropTypes.string.isRequired,
  preys: PropTypes.shape({}).isRequired,
  proteinSequence: PropTypes.string.isRequired,
  uniprot: PropTypes.string.isRequired,
};

export default Report;
