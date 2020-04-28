import PropTypes from 'prop-types';
import React from 'react';

import Details from '../../details/details';
import Options from './options-container';
import Chart from './chart/chart-container';
import Vertices from './vertices';

import './comparison.css';

const Comparison = ({
  changeOption,
  conditions,
  options,
  preys,
  selectCondition,
  selectedConditions,
  transform,
}) => (
  <Details
    className="comparison"
    listStyleType="dot"
    summary="Compare conditions"
  >
    <div className="comparison__inner">
      <Vertices
        conditions={conditions}
        selectCondition={selectCondition}
        selectedConditions={selectedConditions}
      />
      <Chart
        options={options}
        preys={preys}
        transform={transform}
        x={selectedConditions.x}
        y={selectedConditions.y}
      />
      <Options
        changeOption={changeOption}
        options={options}
        transform={transform}
      />
    </div>
  </Details>
);

Comparison.propTypes = {
  changeOption: PropTypes.func.isRequired,
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  options: PropTypes.shape({}).isRequired,
  preys: PropTypes.shape({}).isRequired,
  selectCondition: PropTypes.func.isRequired,
  selectedConditions: PropTypes.shape({
    x: PropTypes.string,
    y: PropTypes.string,
  }).isRequired,
  transform: PropTypes.shape({}).isRequired,
};

export default Comparison;
