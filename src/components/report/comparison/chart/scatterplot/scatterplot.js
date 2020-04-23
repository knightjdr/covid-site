import PropTypes from 'prop-types';
import React from 'react';

import Plot from './plot';
import Xaxis from './x-axis';
import Yaxis from './y-axis';

import './scatterplot.css';

const ScatterPlot = ({
  axisLength,
  handleWheelXY,
  midline,
  plotDimension,
  points,
  transform,
  x,
  y,
}) => (
  <svg
    className="scatterplot"
    xmlns="http://www.w3.org/2000/svg"
    height={plotDimension}
    width={plotDimension}
  >
    <Plot
      axisLength={axisLength}
      handleWheelXY={handleWheelXY}
      midline={midline}
      points={points}
      transform={transform.transformPlot}
    />
    <Yaxis
      axisLength={axisLength}
      y={y}
    />
    <Xaxis
      axisLength={axisLength}
      x={x}
    />
  </svg>
);

ScatterPlot.propTypes = {
  axisLength: PropTypes.number.isRequired,
  handleWheelXY: PropTypes.func.isRequired,
  midline: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  plotDimension: PropTypes.number.isRequired,
  points: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  ).isRequired,
  transform: PropTypes.shape({
    transformPlot: PropTypes.string,
    scale: PropTypes.number,
  }).isRequired,
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
