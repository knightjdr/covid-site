import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';

import Table from './table';
import filterPreys from './filter-preys';
import sortPreys from './sort-preys';

const getDirection = (condition, previousOptions) => {
  const swapDirection = (direction) => (direction === 'asc' ? 'des' : 'asc');
  return condition === previousOptions.condition ? swapDirection(previousOptions.direction) : 'des';
};

const TableContainer = ({
  conditions,
  fdr,
  preys,
  spectralCount,
}) => {
  const [sortOptions, setSortOptions] = useState({ condition: conditions[0], direction: 'des', type: 'numeric' });

  const filteredPreys = useMemo(
    () => filterPreys(preys, fdr, spectralCount),
    [fdr, preys, spectralCount],
  );

  const rows = useMemo(
    () => sortPreys(
      filteredPreys,
      {
        condition: sortOptions.condition,
        direction: sortOptions.direction,
        sortType: sortOptions.type,
      },
    ),
    [conditions, filteredPreys, sortOptions],
  );

  const handleSortByColumn = (e) => {
    const { condition } = e.currentTarget.dataset;
    setSortOptions({
      condition,
      direction: getDirection(condition, sortOptions),
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
  preys: PropTypes.shape({}).isRequired,
  spectralCount: PropTypes.number.isRequired,
};

export default TableContainer;
