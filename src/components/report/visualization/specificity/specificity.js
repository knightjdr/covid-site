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
    <div className="specificity__inner">
      <Condition
        conditions={conditions}
        selectCondition={selectCondition}
        selectedCondition={selectedCondition}
      />
      <Chart
        data={data}
        id="specificity_plot"
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
