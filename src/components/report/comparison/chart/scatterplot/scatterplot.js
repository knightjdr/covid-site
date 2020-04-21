import PropTypes from 'prop-types';
import React from 'react';

import Midline from './midline';
import Points from './points';
import Xaxis from './x-axis';
import Yaxis from './y-axis';

import './scatterplot.css';

const ScatterPlot = ({
  axisLength,
  plotDimension,
  points,
  x,
  y,
}) => (
  <svg
    className="scatterplot"
    xmlns="http://www.w3.org/2000/svg"
    height={plotDimension}
    width={plotDimension}
  >
    <Midline
      axisLength={axisLength}
      plotDimension={plotDimension}
    />
    <Yaxis
      axisLength={axisLength}
      y={y}
    />
    <Xaxis
      axisLength={axisLength}
      x={x}
    />
    <Points
      axisLength={axisLength}
      points={points}
    />
  </svg>
);

ScatterPlot.propTypes = {
  axisLength: PropTypes.number.isRequired,
  plotDimension: PropTypes.number.isRequired,
  points: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  ).isRequired,
  x: PropTypes.shape({
    label: PropTypes.string,
    ticks: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.number,
        x: PropTypes.number,
      }),
    ),
  }).isRequired,
  y: PropTypes.shape({
    label: PropTypes.string,
    ticks: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.number,
        x: PropTypes.number,
      }),
    ),
  }).isRequired,
};

export default ScatterPlot;
