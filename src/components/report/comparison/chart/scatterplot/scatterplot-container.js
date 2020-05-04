import PropTypes from 'prop-types';
import React from 'react';

import Scatterplot from './scatterplot';

import { handlers } from './transforms/transforms';

const ScatterplotContainer = ({
  axisLength,
  log,
  midline,
  plotDimension,
  points,
  transform,
  x,
  y,
}) => {
  const handleMouseDownX = (e) => {
    const options = {
      transform,
      vertex: 'x',
    };
    handlers.pan(e, options);
  };

  const handleMouseDownXY = (e) => {
    handlers.pan(e, { transform });
  };

  const handleMouseDownY = (e) => {
    const options = {
      transform,
      vertex: 'y',
    };
    handlers.pan(e, options);
  };

  const handleWheelX = (e) => {
    const options = {
      id: '#scatterplot__xaxis-wheel',
      transform,
      vertex: 'x',
    };
    handlers.zoom(e, options);
  };

  const handleWheelXY = (e) => {
    const options = {
      id: '#scatterplot__points-wheel',
      transform,
    };
    handlers.zoom(e, options);
  };

  const handleWheelY = (e) => {
    const options = {
      id: '#scatterplot__yaxis-wheel',
      transform,
      vertex: 'y',
    };
    handlers.zoom(e, options);
  };

  return (
    <Scatterplot
      axisLength={axisLength}
      handleMouseDownX={handleMouseDownX}
      handleMouseDownXY={handleMouseDownXY}
      handleMouseDownY={handleMouseDownY}
      handleWheelX={handleWheelX}
      handleWheelXY={handleWheelXY}
      handleWheelY={handleWheelY}
      log={log}
      midline={midline}
      plotDimension={plotDimension}
      points={points}
      transform={transform}
      x={x}
      y={y}
    />
  );
};

ScatterplotContainer.propTypes = {
  axisLength: PropTypes.number.isRequired,
  log: PropTypes.bool.isRequired,
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
    origin: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
    matrix: PropTypes.shape({
      plot: PropTypes.string,
      xAxis: PropTypes.string,
      yAxis: PropTypes.string,
    }),
    scale: PropTypes.number,
    setTransform: PropTypes.func.isRequired,
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

export default ScatterplotContainer;
