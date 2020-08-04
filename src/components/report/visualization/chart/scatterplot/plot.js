import PropTypes from 'prop-types';
import React from 'react';

import Midline from './midline';
import Points from './points';

const Plot = ({
  axisLength,
  handleClickLabel,
  handleMouseDown,
  handleWheel,
  id,
  labels,
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
      <clipPath id={`${id}_points_clip`}>
        <rect
          height={axisLength}
          width={axisLength}
          x={0}
          y={0}
        />
      </clipPath>
    </defs>
    <g id={`${id}_points_wheel`}>
      <rect
        height={axisLength}
        opacity={0}
        width={axisLength}
        x={0}
        y={0}
      />
    </g>
    <g clipPath={`url(#${id}_points_clip)`}>
      <g transform={transform.matrix.plot}>
        {
          midline
          && (
            <Midline
              midline={midline}
              scale={transform.scale}
            />
          )
        }
        <Points
          axisLength={axisLength}
          handleClickLabel={handleClickLabel}
          labels={labels}
          points={points}
          scale={transform.scale}
        />
      </g>
    </g>
  </g>
);

Plot.defaultProps = {
  midline: null,
};

Plot.propTypes = {
  axisLength: PropTypes.number.isRequired,
  handleClickLabel: PropTypes.func.isRequired,
  handleMouseDown: PropTypes.func.isRequired,
  handleWheel: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  labels: PropTypes.shape({}).isRequired,
  midline: PropTypes.shape({
    x1: PropTypes.number,
    x2: PropTypes.number,
    y1: PropTypes.number,
    y2: PropTypes.number,
  }),
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
