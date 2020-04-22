import PropTypes from 'prop-types';
import React from 'react';

const Points = ({
  axisLength,
  points,
}) => (
  <g transform="translate(60 15)">
    {
      points.map((point) => (
        <circle
          cx={point.x}
          cy={axisLength - point.y}
          key={point.label}
          r={5}
        >
          <title>{point.label}</title>
        </circle>
      ))
    }
  </g>
);

Points.propTypes = {
  axisLength: PropTypes.number.isRequired,
  points: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  ).isRequired,
};

export default Points;
