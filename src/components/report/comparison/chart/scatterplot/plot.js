import PropTypes from 'prop-types';
import React from 'react';

import Midline from './midline';
import Points from './points';

const Plot = ({
  axisLength,
  handleWheelXY,
  midline,
  points,
  transform,
}) => (
  <g transform="translate(60 15)">
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
    <g clipPath="url(#points_clip)">
      <g
        id="plot_transform_group"
        transform={transform}
      >
        <Midline midline={midline} />
        <Points
          axisLength={axisLength}
          points={points}
          transform={transform.transformPlot}
        />
      </g>
    </g>
    <g onWheel={handleWheelXY}>
      <rect
        height={axisLength}
        opacity={0}
        width={axisLength}
      />
    </g>
  </g>
);

Plot.propTypes = {
  axisLength: PropTypes.number.isRequired,
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
  transform: PropTypes.string.isRequired,
};

export default Plot;
