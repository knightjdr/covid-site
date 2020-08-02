import PropTypes from 'prop-types';
import React from 'react';

import CustomTable from '../../../table/table';
import TBody from './tbody/tbody';
import THead from './thead/thead';

import './table.css';

const Table = ({
  bait,
  conditions,
  handleSortByColumn,
  rows,
  sortOptions,
}) => (
  <CustomTable minWidth={700}>
    <THead
      conditions={conditions}
      handleSortByColumn={handleSortByColumn}
      sortOptions={sortOptions}
    />
    <TBody
      bait={bait}
      conditions={conditions}
      rows={rows}
    />
  </CustomTable>
);

Table.propTypes = {
  bait: PropTypes.string.isRequired,
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSortByColumn: PropTypes.func.isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.shape({
      entrez: PropTypes.string,
      uniprot: PropTypes.string,
    }),
    prey: PropTypes.string,
    conditions: PropTypes.shape({
      count: PropTypes.number,
      fdr: PropTypes.number,
      specificity: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
    }),
  })).isRequired,
  sortOptions: PropTypes.shape({
    condition: PropTypes.string,
    direction: PropTypes.string,
  }).isRequired,
};

export default Table;
