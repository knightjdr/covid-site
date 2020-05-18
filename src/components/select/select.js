import PropTypes from 'prop-types';
import React from 'react';

import './select.css';

const Select = ({
  className,
  id,
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
        && <label className="select__label" htmlFor={id}>{label}</label>
      }
      <select
        id={id}
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
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default Select;
