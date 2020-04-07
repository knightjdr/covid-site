import PropTypes from 'prop-types';
import React from 'react';

import SortButton from './sort-button';

import './thead.css';

const TableHead = ({
  conditions,
  handleSortByColumn,
  sortOptions,
}) => (
  <thead className="report__thead">
    <tr>
      <th className="report__thead-prey" rowSpan={2}>
        <div className="report__th-inner">
          <span>Prey</span>
          <SortButton
            condition="prey"
            handleSortByColumn={handleSortByColumn}
            sortOptions={sortOptions}
          />
        </div>
      </th>
      <th colSpan={conditions.length}>
        Conditions
      </th>
    </tr>
    <tr>
      {
        conditions.map((condition) => (
          <th key={`column-${condition}`}>
            <div className="report__th-inner">
              <span>{condition}</span>
              <SortButton
                condition={condition}
                handleSortByColumn={handleSortByColumn}
                sortOptions={sortOptions}
              />
            </div>
          </th>
        ))
      }
    </tr>
  </thead>
);

TableHead.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSortByColumn: PropTypes.func.isRequired,
  sortOptions: PropTypes.shape({
    condition: PropTypes.string,
    direction: PropTypes.string,
  }).isRequired,
};

export default TableHead;
