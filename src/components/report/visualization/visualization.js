import PropTypes from 'prop-types';
import React from 'react';

import Details from '../../details/details';
import Specificity from './specificity/specificity-container';

import './visualization.css';

const Visualization = ({
  conditions,
  preys,
}) => (
  <Details
    className="visualization"
    listStyleType="chart"
    summary="Visualization"
  >
    <div className="visualization__inner">
      <Specificity
        conditions={conditions}
        preys={preys}
      />
    </div>
  </Details>
);

Visualization.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  preys: PropTypes.shape({}).isRequired,
};

export default Visualization;
