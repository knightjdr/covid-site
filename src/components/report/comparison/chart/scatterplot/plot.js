import PropTypes from 'prop-types';
import React from 'react';

import Midline from './midline';
import Points from './points';

const Plot = ({
  axisLength,
  handleMouseDown,
  handleWheel,
  midline,
  points,
  transform,
}) => (
  <g
    onMouseDown={handleMouseDown}
    onWheel={handleWheel}
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
        x={0}
        y={0}
      />
    </g>
    <g clipPath="url(#points_clip)">
      <g transform={transform.matrix.plot}>
        <Midline
          midline={midline}
          scale={transform.scale}
        />
        <Points
          axisLength={axisLength}
          points={points}
          scale={transform.scale}
        />
      </g>
    </g>
  </g>
);

Plot.propTypes = {
  axisLength: PropTypes.number.isRequired,
  handleMouseDown: PropTypes.func.isRequired,
  handleWheel: PropTypes.func.isRequired,
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
    matrix: PropTypes.shape({
      plot: PropTypes.string,
    }),
  }).isRequired,
};

export default Plot;
