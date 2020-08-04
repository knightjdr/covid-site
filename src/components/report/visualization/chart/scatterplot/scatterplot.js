import PropTypes from 'prop-types';
import React from 'react';

import Plot from './plot';
import Xaxis from './x-axis';
import Yaxis from './y-axis';

import './scatterplot.css';

const ScatterPlot = ({
  axisLength,
  handleClickLabel,
  handleMouseDownX,
  handleMouseDownXY,
  handleMouseDownY,
  handleWheelX,
  handleWheelXY,
  handleWheelY,
  id,
  labels,
  log,
  midline,
  plotDimension,
  points,
  transform,
  x,
  y,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id={id}
    className="scatterplot"
    height={plotDimension}
    width={plotDimension}
  >
    <Plot
      axisLength={axisLength}
      handleClickLabel={handleClickLabel}
      handleMouseDown={handleMouseDownXY}
      handleWheel={handleWheelXY}
      id={id}
      labels={labels}
      midline={midline}
      points={points}
      transform={transform}
    />
    <Yaxis
      axisLength={axisLength}
      handleMouseDownY={handleMouseDownY}
      handleWheelY={handleWheelY}
      id={id}
      log={log}
      transform={transform}
      y={y}
    />
    <Xaxis
      axisLength={axisLength}
      handleMouseDownX={handleMouseDownX}
      handleWheel={handleWheelX}
      id={id}
      log={log}
      transform={transform}
      x={x}
    />
  </svg>
);

ScatterPlot.defaultProps = {
  midline: null,
};

ScatterPlot.propTypes = {
  axisLength: PropTypes.number.isRequired,
  handleClickLabel: PropTypes.func.isRequired,
  handleMouseDownX: PropTypes.func.isRequired,
  handleMouseDownXY: PropTypes.func.isRequired,
  handleMouseDownY: PropTypes.func.isRequired,
  handleWheelX: PropTypes.func.isRequired,
  handleWheelXY: PropTypes.func.isRequired,
  handleWheelY: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  labels: PropTypes.shape({}).isRequired,
  log: PropTypes.bool.isRequired,
  midline: PropTypes.shape({
    x1: PropTypes.number,
    x2: PropTypes.number,
    y1: PropTypes.number,
    y2: PropTypes.number,
  }),
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
        key: PropTypes.string,
        label: PropTypes.number,
        x: PropTypes.number,
      }),
    ),
  }).isRequired,
  y: PropTypes.shape({
    label: PropTypes.string,
    ticks: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        label: PropTypes.number,
        x: PropTypes.number,
      }),
    ),
  }).isRequired,
};

export default ScatterPlot;
