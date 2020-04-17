import PropTypes from 'prop-types';
import React from 'react';

import Details from '../../details/details';
import Options from './options-container';
import Scatterplot from './scatterplot-container';
import Vertices from './vertices';

import './comparison.css';

const Comparison = ({
  changeOption,
  conditions,
  options,
  preys,
  selectCondition,
  selectedConditions,
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
      <Scatterplot
        preys={preys}
        x={selectedConditions.x}
        y={selectedConditions.x}
      />
      <Options
        changeOption={changeOption}
        options={options}
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
};

export default Comparison;
