import PropTypes from 'prop-types';
import React from 'react';

import './report.css';

const Report = ({
  copyProteinToClipboard,
  gene,
  orfName,
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
        <a href={`https://www.uniprot.org/uniprot/${uniprot}`}>
          {uniprot}
        </a>
      </span>
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
  </div>
);

Report.propTypes = {
  copyProteinToClipboard: PropTypes.func.isRequired,
  gene: PropTypes.string.isRequired,
  orfName: PropTypes.string.isRequired,
  proteinSequence: PropTypes.string.isRequired,
  uniprot: PropTypes.string.isRequired,
};

export default Report;
