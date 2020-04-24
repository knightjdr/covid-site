import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Scatterplot from './scatterplot';

import round from '../../../../../utils/round';

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
    transformPlot: '',
  });

  const mouse = { move: false, start: {} };

  const handleMouseMoveXY = (e) => {
    if (mouse.down) {
      e.preventDefault();
      const { pageX, pageY } = e;

      const delta = {
        x: pageX - mouse.start.x,
        y: pageY - mouse.start.y,
      };

      const { origin, scale } = transform;
      const newOrigin = {
        x: origin.x + delta.x,
        y: origin.y + delta.y,
      };

      const matrix = `matrix(${scale}, 0, 0, ${scale}, ${newOrigin.x}, ${newOrigin.y})`;

      setTransform({
        ...transform,
        transformPlot: matrix,
      });
    }
  };

  const handleMouseUpXY = (e) => {
    e.preventDefault();
    if (mouse.down) {
      const { pageX, pageY } = e;

      const delta = {
        x: pageX - mouse.start.x,
        y: pageY - mouse.start.y,
      };

      const { origin, scale } = transform;
      const newOrigin = {
        x: origin.x + delta.x,
        y: origin.y + delta.y,
      };

      const matrix = `matrix(${scale}, 0, 0, ${scale}, ${newOrigin.x}, ${newOrigin.y})`;

      mouse.down = false;

      setTransform({
        ...transform,
        origin: newOrigin,
        transformPlot: matrix,
      });

      window.removeEventListener('mousemove', handleMouseMoveXY);
      window.removeEventListener('mouseup', handleMouseUpXY);
    }
  };

  const handleMouseDownXY = (e) => {
    e.preventDefault();

    const { pageX, pageY } = e;

    mouse.down = true;
    mouse.start = { x: pageX, y: pageY };

    setTransform({
      ...transform,
      mouseDown: true,
    });

    window.addEventListener('mousemove', handleMouseMoveXY);
    window.addEventListener('mouseup', handleMouseUpXY);
  };

  const handleWheelXY = (e) => {
    e.preventDefault();
    const {
      currentTarget,
      deltaY,
      pageX,
      pageY,
    } = e;
    const { left, top } = currentTarget.querySelector('#scatterplot__points-wheel').getBoundingClientRect();

    const position = {
      x: pageX - left,
      y: pageY - window.pageYOffset - top,
    };

    const { origin, scale } = transform;
    const zoom = Math.exp(-Math.sign(deltaY) * 0.05);
    const newScale = round(scale * zoom, 5);

    const newOrigin = {
      x: round(position.x - (position.x - origin.x) * zoom, 5),
      y: round(position.y - (position.y - origin.y) * zoom, 5),
    };

    const matrix = `matrix(${newScale}, 0, 0, ${newScale}, ${newOrigin.x}, ${newOrigin.y})`;

    setTransform({
      origin: newOrigin,
      scale: newScale,
      transformPlot: matrix,
    });
  };

  return (
    <Scatterplot
      axisLength={axisLength}
      handleMouseDownXY={handleMouseDownXY}
      handleWheelXY={handleWheelXY}
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
