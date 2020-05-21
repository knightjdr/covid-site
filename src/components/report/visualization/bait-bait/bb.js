import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import Chart from '../chart/chart';
import Conditions from './conditions/conditions';
import Options from '../options/options-container';

import './bb.css';

const BaitBait = forwardRef((
  {
    changeOption,
    conditions,
    data,
    options,
    selectCondition,
    selectedConditions,
    transform,
  },
  ref,
) => (
  <div className="bb">
    <h3>Compare conditions</h3>
    <div className="bb__inner">
      <Conditions
        conditions={conditions}
        selectCondition={selectCondition}
        selectedConditions={selectedConditions}
      />
      <Chart
        data={data}
        id="bb_plot"
        midline={false}
        placeholderText="Select a pair of conditions"
        ref={ref}
        transform={transform}
      />
      <Options
        changeOption={changeOption}
        id="bb_plot"
        options={options}
        transform={transform}
      />
    </div>
  </div>
));

BaitBait.propTypes = {
  changeOption: PropTypes.func.isRequired,
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.shape({}).isRequired,
  options: PropTypes.shape({}).isRequired,
  selectCondition: PropTypes.func.isRequired,
  selectedConditions: PropTypes.shape({
    x: PropTypes.string,
    y: PropTypes.string,
  }).isRequired,
  transform: PropTypes.shape({}).isRequired,
};

export default BaitBait;
