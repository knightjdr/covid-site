import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Scatterplot from './scatterplot';

import { handlers } from '../../transforms/transforms';

const ScatterplotContainer = ({
  axisLength,
  id,
  log,
  midline,
  plotDimension,
  points,
  transform,
  x,
  y,
}) => {
  const [labels, setLabels] = useState({});
  const [scrollLock, setScrollLock] = useState(false);

  const handleClickLabel = (e) => {
    const { label } = e.target.dataset;
    setLabels({
      ...labels,
      [label]: !labels[label],
    });
  };

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

  const handleMouseEnter = () => {
    setScrollLock(true);
  };

  const handleMouseLeave = () => {
    setScrollLock(false);
  };

  const handleWheelX = (e) => {
    const options = {
      id: `#${id}_xaxis_wheel`,
      transform,
      vertex: 'x',
    };
    handlers.zoom(e, options);
  };

  const handleWheelXY = (e) => {
    const options = {
      id: `#${id}_points_wheel`,
      transform,
    };
    handlers.zoom(e, options);
  };

  const handleWheelY = (e) => {
    const options = {
      id: `#${id}_yaxis_wheel`,
      transform,
      vertex: 'y',
    };
    handlers.zoom(e, options);
  };

  return (
    <Scatterplot
      axisLength={axisLength}
      handleClickLabel={handleClickLabel}
      handleMouseDownX={handleMouseDownX}
      handleMouseDownXY={handleMouseDownXY}
      handleMouseDownY={handleMouseDownY}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
      handleWheelX={handleWheelX}
      handleWheelXY={handleWheelXY}
      handleWheelY={handleWheelY}
      id={id}
      labels={labels}
      log={log}
      midline={midline}
      plotDimension={plotDimension}
      points={points}
      scrollLock={scrollLock}
      transform={transform}
      x={x}
      y={y}
    />
  );
};

ScatterplotContainer.defaultProps = {
  midline: null,
};

ScatterplotContainer.propTypes = {
  axisLength: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
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
