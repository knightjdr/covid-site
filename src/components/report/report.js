import PropTypes from 'prop-types';
import React from 'react';

import Comparison from './comparison/comparison-container';

import IF from './if/if';
import Preys from './preys/preys-container';
import Sequence from './sequence/sequence-container';

import './report.css';
import Header from './header/header';

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
    <Header
      description={description}
      gene={gene}
      id={id}
      name={name}
      uniprot={uniprot}
    />
    <div className="report__options">
      <IF images={images} />
      <Sequence sequence={sequence} />
      {
        conditions.length > 1
          && (
            <Comparison
              conditions={conditions}
              preys={preys}
            />
          )
      }
    </div>
    <Preys
      conditions={conditions}
      id={id}
      preys={preys}
    />
  </div>
);

Report.defaultProps = {
  description: '',
  images: null,
  name: '',
  uniprot: '',
};

Report.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string,
  gene: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({})),
  name: PropTypes.string,
  preys: PropTypes.shape({}).isRequired,
  sequence: PropTypes.string.isRequired,
  uniprot: PropTypes.string,
};

export default Report;
