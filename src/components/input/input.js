import PropTypes from 'prop-types';
import React from 'react';

import './input.css';

const Input = ({
  direction,
  id,
  label,
  ...props
}) => (
  <label
    className={`input input_${direction}`}
    htmlFor={id}
  >
    <span className="input__label">{label}</span>
    <input
      id={id}
      {...props}
    />
  </label>
);

Input.defaultProps = {
  direction: 'vertical',
};

Input.propTypes = {
  direction: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
