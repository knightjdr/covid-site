import PropTypes from 'prop-types';
import React from 'react';

import Comparison from './comparison/comparison-container';
import Hero from '../layout/background/hero';
import IF from './if/if';
import Link from '../link/link';
import Preys from './preys/preys-container';
import Sequence from './sequence/sequence-container';

import './report.css';

const Report = ({
  conditions,
  description,
  gene,
  id,
  images,
  name,
  preys,
  sequence,
  uniprot,
}) => (
  <div className="report">
    <Hero
      className="report__header"
      Tag="header"
    >
      <div className="report__header-inner">
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
          <Link to={`https://covid-19.uniprot.org/uniprotkb/${uniprot.covid}`}>
            {uniprot.covid}
          </Link>
        </div>
        <div className="report__header-field">Description</div>
        <div>{description}</div>
      </div>
    </Hero>
    <div className="report__options">
      <IF images={images} />
      <Sequence sequence={sequence} />
      <Comparison
        conditions={conditions}
        preys={preys}
      />
    </div>
    <Preys
      conditions={conditions}
      id={id}
      preys={preys}
    />
  </div>
);

Report.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  gene: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  images: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
  preys: PropTypes.shape({}).isRequired,
  sequence: PropTypes.string.isRequired,
  uniprot: PropTypes.shape({
    covid: PropTypes.string,
    sars: PropTypes.string,
  }).isRequired,
};

export default Report;
