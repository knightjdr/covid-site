import PropTypes from 'prop-types';
import React from 'react';

import './select.css';

const Select = ({
  onChange,
  options,
  placeholder,
  value,
  ...props
}) => (
  <select
    className="select"
    onChange={onChange}
    value={value}
    {...props}
  >
    {
      placeholder
      && (
        <option disabled value="">
          {placeholder}
        </option>
      )
    }
    {
      options.map((condition) => (
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
  placeholder: '',
  value: '',
};

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default Select;
