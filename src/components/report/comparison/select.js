import PropTypes from 'prop-types';
import React from 'react';

const Select = ({
  conditions,
  selectCondition,
  value,
  vertex,
}) => (
  <select
    data-vertex={vertex}
    onChange={selectCondition}
    value={value}
  >
    <option
      disabled
      value=""
    >
      {`Select ${vertex}...`}
    </option>
    {
      conditions.map((condition) => (
        <option
          key={condition}
          value={condition}
        >
          {condition}
        </option>
      ))
    }
  </select>
);

Select.defaultProps = {
  value: '',
};

Select.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectCondition: PropTypes.func.isRequired,
  value: PropTypes.string,
  vertex: PropTypes.string.isRequired,
};

export default Select;
