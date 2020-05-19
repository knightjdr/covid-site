import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import SortButton from './sort-button';

import './thead.css';

const TableHead = ({
  conditions,
  handleSortByColumn,
  sortOptions,
}) => (
  <thead className="report__thead">
    <tr>
      <th className="report__thead-prey" rowSpan={3}>
        <div className="report__th-inner">
          <span>Prey</span>
          <SortButton
            condition="prey"
            handleSortByColumn={handleSortByColumn}
            metric="prey"
            sortOptions={sortOptions}
          />
        </div>
      </th>
      <th className="report__thead-prey" rowSpan={3}>UniProt</th>
      <th colSpan={conditions.length * 3}>
        Conditions
      </th>
    </tr>
    <tr>
      {
        conditions.map((condition) => (
          <th
            colSpan={3}
            key={`column-${condition}`}
          >
            {condition}
          </th>
        ))
      }
    </tr>
    <tr>
      {
        conditions.map((condition) => (
          <Fragment key={`column-${condition}`}>
            <th>
              <div className="report__th-inner">
                <span>S.C.</span>
                <SortButton
                  condition={condition}
                  handleSortByColumn={handleSortByColumn}
                  metric="count"
                  sortOptions={sortOptions}
                />
              </div>
            </th>
            <th>
              <div className="report__th-inner">
                <span>Spec.</span>
                <SortButton
                  condition={condition}
                  handleSortByColumn={handleSortByColumn}
                  metric="specificity"
                  sortOptions={sortOptions}
                />
              </div>
            </th>
            <th>
              <div className="report__th-inner">
                <span>FDR</span>
                <SortButton
                  condition={condition}
                  handleSortByColumn={handleSortByColumn}
                  metric="fdr"
                  sortOptions={sortOptions}
                />
              </div>
            </th>
          </Fragment>
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
