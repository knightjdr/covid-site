import PropTypes from 'prop-types';
import React from 'react';

const TableBody = ({
  conditions,
  rows,
}) => (
  <tbody>
    {
      rows.map((row) => (
        <tr key={row.id}>
          <td>{row.prey}</td>
          {
            conditions.map((condition) => (
              <td key={`${row.prey}-${condition}`}>
                {
                  row.conditions[condition]
                    ? (
                      `${row.conditions[condition].count} (${row.conditions[condition].fdr})`
                    )
                    : '-'
                }
              </td>
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
    }),
  })).isRequired,
};

export default TableBody;
