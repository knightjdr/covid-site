import PropTypes from 'prop-types';
import React from 'react';

import './scatterplot.css';

const ScatterPlot = ({
  points,
  x,
  y,
}) => (
  points.length > 0
    ? <div className="scatterplot" />
    : (
      <div className="scatterplot scatterplot__placeholder">
        <span>
          Select a pair of conditions
        </span>
      </div>
    )
);

ScatterPlot.propTypes = {
  points: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  ).isRequired,
  x: PropTypes.string.isRequired,
  y: PropTypes.string.isRequired,
};

export default ScatterPlot;
