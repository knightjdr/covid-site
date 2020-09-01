import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import Chart from '../chart/chart';
import Condition from './condition/condition';
import Options from '../options/options-container';

import './specificity.css';

const Specificity = forwardRef((
  {
    changeOption,
    conditions,
    data,
    options,
    selectCondition,
    selectedCondition,
    transform,
  },
  ref,
) => (
  <div className="specificity">
    <h3>Specificity</h3>
    <p className="specificity__definition">
      Plot the specificity of a prey versus its spectral count. The specificty of a prey is calculated as
      the fold change in the spectral count relative to the average across all other baits. Any other
      conditions/treatments for the query bait are ignored when calculating the average.
      Every other bait can contribute a single value when calculting the average, and this value is
      the maximum spectral count across any conditions present for that bait.
    </p>
    <p>
      Orange points
      {' '}
      <span className="specificity__highlight" />
      {' '}
      have infinite specificty. Hover over a point to see its label or click on a point to add a label
      to the plot.
    </p>
    <div className="specificity__inner">
      <Condition
        conditions={conditions}
        selectCondition={selectCondition}
        selectedCondition={selectedCondition}
      />
      <Chart
        data={data}
        id="specificity_plot"
        midline={false}
        placeholderText="Select a condition"
        ref={ref}
        transform={transform}
      />
      <Options
        changeOption={changeOption}
        id="specificity_plot"
        options={options}
        transform={transform}
      />
    </div>
  </div>
));

Specificity.propTypes = {
  changeOption: PropTypes.func.isRequired,
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.shape({}).isRequired,
  options: PropTypes.shape({}).isRequired,
  selectCondition: PropTypes.func.isRequired,
  selectedCondition: PropTypes.string.isRequired,
  transform: PropTypes.shape({}).isRequired,
};

export default Specificity;
