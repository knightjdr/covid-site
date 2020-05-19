import PropTypes from 'prop-types';
import React from 'react';

import Caret from './assets/caret';

const getCaretStyle = (caretDirection, condition, metric, sortOptions) => (
  condition !== sortOptions.condition
  || metric !== sortOptions.metric
  || caretDirection === sortOptions.direction
    ? { visibility: 'visible' }
    : { visibility: 'hidden' }
);

const SortButton = ({
  condition,
  handleSortByColumn,
  metric,
  sortOptions,
}) => (
  <button
    data-condition={condition}
    data-metric={metric}
    onClick={handleSortByColumn}
    type="button"
  >
    <Caret
      style={getCaretStyle('asc', condition, metric, sortOptions)}
    />
    <Caret
      style={{
        ...getCaretStyle('des', condition, metric, sortOptions),
        transform: 'rotate(180deg)',
      }}
    />
  </button>
);

SortButton.propTypes = {
  condition: PropTypes.string.isRequired,
  handleSortByColumn: PropTypes.func.isRequired,
  metric: PropTypes.string.isRequired,
  sortOptions: PropTypes.shape({
    condition: PropTypes.string,
    direction: PropTypes.string,
  }).isRequired,
};

export default SortButton;
