import PropTypes from 'prop-types';
import React from 'react';

import CustomTable from '../../../table/table';
import TBody from './tbody/tbody';
import THead from './thead/thead';

const Table = ({
  conditions,
  handleSortByColumn,
  rows,
  sortOptions,
}) => (
  <CustomTable minWidth={600}>
    <THead
      conditions={conditions}
      handleSortByColumn={handleSortByColumn}
      sortOptions={sortOptions}
    />
    <TBody
      conditions={conditions}
      rows={rows}
    />
  </CustomTable>
);

Table.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSortByColumn: PropTypes.func.isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    prey: PropTypes.string,
    conditions: PropTypes.shape({
      count: PropTypes.number,
      fdr: PropTypes.number,
    }),
  })).isRequired,
  sortOptions: PropTypes.shape({
    condition: PropTypes.string,
    direction: PropTypes.string,
  }).isRequired,
};

export default Table;
