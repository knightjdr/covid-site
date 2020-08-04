import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import './table.css';

const Table = forwardRef((
  {
    children,
    classOnOverflow,
    minWidth,
    tableOverflows,
  },
  ref,
) => (
  <div
    className={classOnOverflow && tableOverflows ? `table__container ${classOnOverflow}` : 'table__container'}
    ref={ref}
  >
    <table
      className="table"
      style={{ minWidth }}
    >
      {children}
    </table>
  </div>
));

Table.defaultProps = {
  minWidth: 'auto',
};

Table.propTypes = {
  children: PropTypes.node.isRequired,
  classOnOverflow: PropTypes.string.isRequired,
  minWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  tableOverflows: PropTypes.bool.isRequired,
};

export default Table;
