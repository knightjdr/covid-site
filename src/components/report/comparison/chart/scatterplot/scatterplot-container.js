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

  const handleWheelXY = (e) => {
    e.preventDefault();
    const {
      currentTarget,
      deltaY,
      pageX,
      pageY,
    } = e;

    const { left, top } = currentTarget.getBoundingClientRect();
    const mouse = {
      x: round(pageX - left, 5),
      y: round(pageY - window.pageYOffset - top, 5),
    };

    const { origin, scale } = transform;
    const zoom = Math.exp(-Math.sign(deltaY) * 0.05);
    const newScale = scale * zoom;

    const newOrigin = {
      x: mouse.x - (mouse.x - origin.x) * zoom,
      y: mouse.y - (mouse.y - origin.y) * zoom,
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
