import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Scatterplot from './scatterplot';

import handlers from './handlers/mouse-handlers';

const ScatterplotContainer = ({
  axisLength,
  midline,
  plotDimension,
  points,
  x,
  y,
}) => {
  const [transform, setTransform] = useState({
    origin: {
      x: 0,
      y: 0,
    },
    scale: 1,
    matrix: {
      plot: '',
      xAxis: '',
    },
  });

  const handleMouseDownX = (e) => {
    const options = {
      axisLength,
      transform,
      setTransform,
      vertex: 'x',
    };
    handlers.pan(e, options);
  };

  const handleMouseDownXY = (e) => {
    handlers.pan(e, { transform, setTransform });
  };

  const handleMouseDownY = (e) => {
    const options = {
      axisLength,
      transform,
      setTransform,
      vertex: 'y',
    };
    handlers.pan(e, options);
  };

  const handleWheelX = (e) => {
    const options = {
      axisLength,
      id: '#scatterplot__xaxis-wheel',
      transform,
      setTransform,
      vertex: 'x',
    };
    handlers.zoom(e, options);
  };

  const handleWheelXY = (e) => {
    const options = {
      id: '#scatterplot__points-wheel',
      transform,
      setTransform,
    };
    handlers.zoom(e, options);
  };

  const handleWheelY = (e) => {
    const options = {
      axisLength,
      id: '#scatterplot__yaxis-wheel',
      transform,
      setTransform,
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

export default ScatterplotContainer;
