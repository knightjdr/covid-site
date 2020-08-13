import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import Autocomplete from './autocomplete';
import useClickOutside from '../hooks/click-outside/use-click-outside';

const AutocompleteContainer = ({
  direction,
  id,
  label,
  onChange,
  onSelect,
  options,
  value,
  ...props
}) => {
  const [focused, setFocused] = useState(-1);
  const [margin, setMargin] = useState(0);
  const [suggestions, setSuggestions] = useState([]);
  const ref = useRef();

  const clearSuggestions = () => {
    setFocused(-1);
    setSuggestions([]);
  };

  useClickOutside(ref, clearSuggestions);

  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }

    const { value: query } = e.target;
    if (query) {
      const re = new RegExp(query);
      setSuggestions(options.filter((option) => re.test(option)));
    } else {
      setSuggestions([]);
    }
  };

  const selectSuggestion = (e, query) => {
    const syntheticEvent = {
      ...e,
      target: {
        ...e.target,
        value: query,
      },
    };
    clearSuggestions();
    onChange(syntheticEvent, query);
    onSelect(syntheticEvent, query);
  };

  const handleSelect = (e) => {
    if (
      value
      && (
        e.currentTarget.tagName === 'BUTTON'
        || (
          e.which === 13 || e.keyCode === 13
        )
      )
    ) {
      const query = e.target.innerText || value;
      selectSuggestion(e, query);
    }
  };

  const handleKeyDown = (e) => {
    if (suggestions.length > 0) {
      const { keyCode } = e;
      if (keyCode === 38) {
        const newFocus = focused - 1 >= 0 ? focused - 1 : suggestions.length - 1;
        setFocused(newFocus);
      }
      if (keyCode === 40) {
        const newFocus = focused + 1 < suggestions.length ? focused + 1 : 0;
        setFocused(newFocus);
      }
      if (keyCode === 13 && focused) {
        selectSuggestion(e, suggestions[focused]);
      }
    }
  };

  useEffect(() => {
    const left = ref.current.querySelector(`#${id}`).offsetLeft;
    setMargin(left);
  }, []);

  useEffect(() => {
    ref.current.addEventListener('keydown', handleKeyDown);
    return () => {
      ref.current.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <Autocomplete
      {...props}
      direction={direction}
      focused={focused}
      handleChange={handleChange}
      handleSelect={handleSelect}
      id={id}
      label={label}
      margin={margin}
      ref={ref}
      suggestions={suggestions}
      value={value}
    />
  );
};

AutocompleteContainer.defaultProps = {
  direction: 'vertical',
  options: [],
};

AutocompleteContainer.propTypes = {
  direction: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

export default AutocompleteContainer;
