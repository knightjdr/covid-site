import PropTypes from 'prop-types';
import React from 'react';

import Midline from './midline';
import Points from './points';

const Plot = ({
  axisLength,
  handleMouseDownXY,
  handleWheelXY,
  midline,
  points,
  transform,
}) => (
  <g
    onMouseDown={handleMouseDownXY}
    onWheel={handleWheelXY}
    transform="translate(60 15)"
  >
    <defs>
      <clipPath id="points_clip">
        <rect
          height={axisLength}
          width={axisLength}
          x={0}
          y={0}
        />
      </clipPath>
    </defs>
    <g id="scatterplot__points-wheel">
      <rect
        height={axisLength}
        opacity={0}
        width={axisLength}
      />
    </g>
    <g clipPath="url(#points_clip)">
      <g transform={transform.transformPlot}>
        <Midline
          midline={midline}
          scale={transform.scale}
        />
        <Points
          axisLength={axisLength}
          points={points}
          scale={transform.scale}
          transform={transform.transformPlot}
        />
      </g>
    </g>
  </g>
);

Plot.propTypes = {
  axisLength: PropTypes.number.isRequired,
  handleMouseDownXY: PropTypes.func.isRequired,
  handleWheelXY: PropTypes.func.isRequired,
  midline: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  points: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  ).isRequired,
  transform: PropTypes.shape({
    scale: PropTypes.number,
    transformPlot: PropTypes.string,
  }).isRequired,
};

export default Plot;
