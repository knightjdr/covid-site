import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Link from '../../../../link/link';

const createSearchTerm = (prey) => `^${prey}$`;

const TableBody = ({
  conditions,
  rows,
}) => (
  <tbody>
    {
      rows.map((row) => (
        <tr
          className={row.highlight ? 'repory__prey-table_highlight' : null}
          key={row.id}
        >
          <td>
            {' '}
            <Link
              nav
              to={`/search?term=${encodeURIComponent(createSearchTerm(row.prey))}`}
            >
              {row.prey}
            </Link>
          </td>
          <td>
            {row.id}
          </td>
          {
            conditions.map((condition) => (
              <Fragment key={`${row.prey}-${condition}`}>
                {
                  row.conditions[condition]
                    ? (
                      <>
                        <td>
                          {row.conditions[condition].count}
                        </td>
                        <td>
                          {row.conditions[condition].specificity}
                        </td>
                        <td>
                          {row.conditions[condition].fdr}
                        </td>
                      </>
                    )
                    : (
                      <>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                      </>
                    )
                }
              </Fragment>
            ))
          }
        </tr>
      ))
    }
  </tbody>
);

TableBody.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
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
};

export default TableBody;
