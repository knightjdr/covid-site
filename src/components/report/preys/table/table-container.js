import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';

import Table from './table';
import filterPreys from './filter-preys';
import sortPreys from './sort-preys';

const getDirection = (condition, metric, previousOptions) => {
  const swapDirection = (direction) => (direction === 'asc' ? 'des' : 'asc');
  return condition === previousOptions.condition
    && metric === previousOptions.metric
    ? swapDirection(previousOptions.direction)
    : 'des';
};

const TableContainer = ({
  conditions,
  fdr,
  highlightedPrey,
  preys,
  specificity,
  spectralCount,
}) => {
  const [sortOptions, setSortOptions] = useState({
    condition: conditions[0],
    direction: 'des',
    highlightedPrey,
    metric: 'count',
    type: 'numeric',
  });

  const filteredPreys = useMemo(
    () => filterPreys(preys, fdr, specificity, spectralCount),
    [fdr, preys, specificity, spectralCount],
  );

  const rows = useMemo(
    () => sortPreys(
      filteredPreys,
      sortOptions,
    ),
    [filteredPreys, sortOptions],
  );

  const handleSortByColumn = (e) => {
    const { condition, metric } = e.currentTarget.dataset;
    setSortOptions({
      condition,
      direction: getDirection(condition, metric, sortOptions),
      highlightedPrey: '',
      metric,
      type: condition === 'prey' ? 'string' : 'numeric',
    });
  };

  return (
    <Table
      conditions={conditions}
      handleSortByColumn={handleSortByColumn}
      rows={rows}
      sortOptions={sortOptions}
    />
  );
};

TableContainer.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  fdr: PropTypes.number.isRequired,
  highlightedPrey: PropTypes.string.isRequired,
  preys: PropTypes.shape({}).isRequired,
  specificity: PropTypes.number.isRequired,
  spectralCount: PropTypes.number.isRequired,
};

export default TableContainer;
