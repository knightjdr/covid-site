import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import Input from './input';

import './autocomplete.css';

const Autocomplete = forwardRef((
  {
    focused,
    handleChange,
    handleSelect,
    margin,
    suggestions,
    ...props
  },
  ref,
) => (
  <div
    className="autocomplete"
    ref={ref}
  >
    <Input
      {...props}
      onChange={handleChange}
      onKeyPress={handleSelect}
    />
    {
      suggestions.length > 0
      && (
        <ul
          className="autocomplete__items"
          style={{
            marginLeft: margin,
            width: `calc(100% - ${margin}px)`,
          }}
        >
          {
            suggestions.map((suggestion, index) => (
              <li
                className={focused === index ? 'autocomplete__item_focused' : 'autocomplete__item_not-focused'}
                key={suggestion}
              >
                <button
                  onClick={handleSelect}
                  type="button"
                >
                  {suggestion}
                </button>
              </li>
            ))
          }
        </ul>
      )
    }
  </div>
));

Autocomplete.propTypes = {
  focused: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  margin: PropTypes.number.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Autocomplete;
