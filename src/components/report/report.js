import PropTypes from 'prop-types';
import React from 'react';

import IF from './if/if';
import Info from './info/info-container';
import Preys from './preys/preys-container';
import Visualization from './visualization/visualization';

import './report.css';
import Header from './header/header';

const Report = ({
  conditions,
  description,
  gene,
  id,
  images,
  localization,
  name,
  preys,
  sequence,
  uniprot,
}) => (
  <div className="report">
    <Header
      description={description}
      gene={gene}
      id={id}
      localization={localization}
      name={name}
      uniprot={uniprot}
    />
    <div className="report__options">
      <Info
        id={id}
        sequence={sequence}
      />
      <IF images={images} />
      <Visualization
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

Report.defaultProps = {
  images: null,
  name: '',
  uniprot: '',
};

Report.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.shape({
    custom: PropTypes.string,
    uniprot: PropTypes.string,
  }).isRequired,
  gene: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({})),
  localization: PropTypes.shape({
    cell: PropTypes.arrayOf(PropTypes.string),
    cellSpecific: PropTypes.arrayOf(PropTypes.string),
    virus: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  name: PropTypes.string,
  preys: PropTypes.shape({}).isRequired,
  sequence: PropTypes.string.isRequired,
  uniprot: PropTypes.string,
};

export default Report;
