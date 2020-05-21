import PropTypes from 'prop-types';
import React from 'react';

import Select from '../../../../select/select';

import './conditions.css';

const Conditions = ({
  conditions,
  selectCondition,
  selectedConditions,
}) => (
  <div className="bb__conditions">
    <Select
      data-vertex="x"
      id="vertex_x"
      onChange={selectCondition}
      options={conditions}
      placeholder="Select x..."
      value={selectedConditions.x}
    />
    <Select
      data-vertex="y"
      id="vertex_y"
      onChange={selectCondition}
      options={conditions}
      placeholder="Select y..."
      value={selectedConditions.y}
    />
  </div>
);

Conditions.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectCondition: PropTypes.func.isRequired,
  selectedConditions: PropTypes.shape({
    x: PropTypes.string,
    y: PropTypes.string,
  }).isRequired,
};

export default Conditions;
