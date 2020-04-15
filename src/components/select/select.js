import PropTypes from 'prop-types';
import React from 'react';

import './select.css';

const Select = ({
  className,
  label,
  onChange,
  options,
  placeholder,
  value,
  ...props
}) => {
  const classes = ['select'];
  if (className) {
    classes.push(className);
  }

  return (
    <div className={classes.join(' ')}>
      {
        label
        && <span className="select__label">{label}</span>
      }
      <select
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
    </div>
  );
};

Select.defaultProps = {
  className: '',
  label: '',
  placeholder: '',
  value: '',
};

Select.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default Select;
