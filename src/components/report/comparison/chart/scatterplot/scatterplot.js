import PropTypes from 'prop-types';
import React from 'react';

import Plot from './plot';
import Xaxis from './x-axis';
import Yaxis from './y-axis';

import './scatterplot.css';

const ScatterPlot = ({
  axisLength,
  handleMouseDownX,
  handleMouseDownXY,
  handleMouseDownY,
  handleWheelX,
  handleWheelXY,
  handleWheelY,
  midline,
  plotDimension,
  points,
  transform,
  x,
  y,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="scatterplot"
    className="scatterplot"
    height={plotDimension}
    width={plotDimension}
  >
    <Plot
      axisLength={axisLength}
      handleMouseDown={handleMouseDownXY}
      handleWheel={handleWheelXY}
      midline={midline}
      points={points}
      transform={transform}
    />
    <Yaxis
      axisLength={axisLength}
      handleMouseDownY={handleMouseDownY}
      handleWheelY={handleWheelY}
      transform={transform}
      y={y}
    />
    <Xaxis
      axisLength={axisLength}
      handleMouseDownX={handleMouseDownX}
      handleWheel={handleWheelX}
      transform={transform}
      x={x}
    />
  </svg>
);

ScatterPlot.propTypes = {
  axisLength: PropTypes.number.isRequired,
  handleMouseDownX: PropTypes.func.isRequired,
  handleMouseDownXY: PropTypes.func.isRequired,
  handleMouseDownY: PropTypes.func.isRequired,
  handleWheelX: PropTypes.func.isRequired,
  handleWheelXY: PropTypes.func.isRequired,
  handleWheelY: PropTypes.func.isRequired,
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
    scale: PropTypes.number,
    matrix: PropTypes.shape({
      plot: PropTypes.string,
    }),
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
