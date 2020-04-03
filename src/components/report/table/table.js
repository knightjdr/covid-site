import PropTypes from 'prop-types';
import React from 'react';

import './table.css';

const Table = ({}) => (
  <table className="report__table">
    <thead>
      <tr>
        <th>column1</th>
        <th>column2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>a</td>
        <td>b</td>
      </tr>
      <tr>
        <td>c</td>
        <td>d</td>
      </tr>
      <tr>
        <td>e</td>
        <td>f</td>
      </tr>
      <tr>
        <td>g</td>
        <td>h</td>
      </tr>
    </tbody>
  </table>
);

Table.propTypes = {};

export default Table;
