import PropTypes from 'prop-types';
import React from 'react';

import './table.css';

const Table = ({
  children,
}) => (
  <table className="table">
    {children}
  </table>
);

Table.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Table;
