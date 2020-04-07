import PropTypes from 'prop-types';
import React from 'react';

import Caret from './assets/caret';

const getCaretStyle = (caretDirection, condition, sortOptions) => (
  condition !== sortOptions.condition || caretDirection === sortOptions.direction
    ? { visibility: 'visible' }
    : { visibility: 'hidden' }
);

const SortButton = ({
  condition,
  handleSortByColumn,
  sortOptions,
}) => (
  <button
    data-condition={condition}
    onClick={handleSortByColumn}
    type="button"
  >
    <Caret
      style={getCaretStyle('asc', condition, sortOptions)}
    />
    <Caret
      style={{
        ...getCaretStyle('des', condition, sortOptions),
        transform: 'rotate(180deg)',
      }}
    />
  </button>
);

SortButton.propTypes = {
  condition: PropTypes.string.isRequired,
  handleSortByColumn: PropTypes.func.isRequired,
  sortOptions: PropTypes.shape({
    condition: PropTypes.string,
    direction: PropTypes.string,
  }).isRequired,
};

export default SortButton;
