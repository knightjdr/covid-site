import PropTypes from 'prop-types';
import React from 'react';
import { faCopy } from '@fortawesome/pro-solid-svg-icons';

import Comparison from './comparison/comparison-container';
import Details from '../details/details';
import IconButton from '../buttons/icon/button';
import Link from '../link/link';
import Preys from './preys/preys-container';

import './report.css';

const Report = ({
  conditions,
  copyProteinToClipboard,
  description,
  gene,
  id,
  name,
  preys,
  sequence,
  uniprot,
}) => (
  <div className="report">
    <header>
      <h1>
        <div className="report__header-title">Identifier</div>
        <div>{id}</div>
      </h1>
      <div className="report__header-field">Gene</div>
      <div>{gene}</div>
      <div className="report__header-field">Protein name</div>
      <div>{name}</div>
      <div className="report__header-field">Uniprot</div>
      <div className="report__header-uniprot">
        <span>COVID-19:</span>
        {' '}
        <Link
          nav
          to={`https://covid-19.uniprot.org/uniprotkb/${uniprot.covid}`}
        >
          {uniprot.covid}
        </Link>
        <span>SARS:</span>
        {' '}
        <Link
          nav
          to={`https://covid-19.uniprot.org/uniprotkb/${uniprot.sars}`}
        >
          {uniprot.sars}
        </Link>
      </div>
      <div className="report__header-field">Description</div>
      <div>{description}</div>
    </header>
    <Details>
      <summary>Protein sequence</summary>
      <div className="report__protein-sequence">
        <code>
          <div>{sequence}</div>
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
    <Preys
      conditions={conditions}
      id={id}
      preys={preys}
    />
  </div>
);

Report.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  copyProteinToClipboard: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  gene: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  preys: PropTypes.shape({}).isRequired,
  sequence: PropTypes.string.isRequired,
  uniprot: PropTypes.shape({
    covid: PropTypes.string,
    sars: PropTypes.string,
  }).isRequired,
};

export default Report;
