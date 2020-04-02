import PropTypes from 'prop-types';
import React from 'react';

import Scatterplot from './scatterplot-container';
import Select from './select';

import './comparison.css';

const Comparison = ({
  conditions,
  preys,
  selectCondition,
  selectedConditions,
}) => (
  <details className="comparison">
    <summary>Compare conditions</summary>
    <div className="comparison__inner">
      <div className="comparison__select-menus">
        <Select
          conditions={conditions}
          selectCondition={selectCondition}
          value={selectedConditions.x}
          vertex="x"
        />
        <Select
          conditions={conditions}
          selectCondition={selectCondition}
          value={selectedConditions.y}
          vertex="y"
        />
      </div>
      <Scatterplot
        preys={preys}
        x={selectedConditions.x}
        y={selectedConditions.x}
      />
    </div>
  </details>
);

Comparison.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  preys: PropTypes.shape({}).isRequired,
  selectCondition: PropTypes.func.isRequired,
  selectedConditions: PropTypes.shape({
    x: PropTypes.string,
    y: PropTypes.string,
  }).isRequired,
};

export default Comparison;
