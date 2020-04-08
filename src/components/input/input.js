import PropTypes from 'prop-types';
import React from 'react';

import './input.css';

const Input = ({
  id,
  label,
  ...props
}) => (
  <label htmlFor={id}>
    <span>{label}</span>
    <input
      className="input"
      id={id}
      {...props}
    />
  </label>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
