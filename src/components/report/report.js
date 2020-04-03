import PropTypes from 'prop-types';
import React from 'react';
import { faCopy } from '@fortawesome/pro-solid-svg-icons';

import Comparison from './comparison/comparison-container';
import Details from '../details/details';
import IconButton from '../buttons/icon/button';
import Link from '../link/link';
import Table from './table/table-container';

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
      <h1>
        <div className="report__header-title">Gene</div>
        <div>{gene}</div>
      </h1>
      <div className="report__header-field">ORF</div>
      <div>{orfName}</div>
      <div className="report__header-field">Uniprot</div>
      <div>
        <Link
          nav
          to={`https://www.uniprot.org/uniprot/${uniprot}`}
        >
          {uniprot}
        </Link>
      </div>
      <div className="report__header-field">Description</div>
      <div>{description}</div>
    </header>
    <Details>
      <summary>Protein sequence</summary>
      <div className="report__protein-sequence">
        <code>
          <div>{proteinSequence}</div>
        </code>
        <div className="report__protein-copy">
          <span>Copy</span>
          <IconButton
            icon={faCopy}
            kind="primary"
            onClick={copyProteinToClipboard}
            size="xs"
            type="button"
          />
        </div>
      </div>
    </Details>
    <Comparison
      conditions={conditions}
      preys={preys}
    />
    <Table
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
