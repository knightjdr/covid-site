import PropTypes from 'prop-types';
import React from 'react';

import './switch.css';

const Switch = ({
  id,
  label,
  ...props
}) => (
  <label
    className="switch"
    htmlFor={id}
  >
    <span>{label}</span>
    <input
      id={id}
      type="checkbox"
      {...props}
    />
    <span className="switch__slider">
      <span className="switch__slider-button" />
    </span>
  </label>
);

Switch.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Switch;
