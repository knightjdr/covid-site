import PropTypes from 'prop-types';
import React from 'react';

import './table.css';

const Table = ({
  children,
  minWidth,
}) => (
  <div className="table__container">
    <table
      className="table"
      style={{ minWidth }}
    >
      {children}
    </table>
  </div>
);

Table.defaultProps = {
  minWidth: 'auto',
};

Table.propTypes = {
  children: PropTypes.node.isRequired,
  minWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default Table;
