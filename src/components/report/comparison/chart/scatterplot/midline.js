import PropTypes from 'prop-types';
import React from 'react';

const Midline = ({
  axisLength,
}) => (
  <g transform="translate(60 15)">
    <line
      strokeDasharray="5 5"
      x1={0}
      x2={axisLength}
      y1={axisLength}
      y2={0}
    />
  </g>
);

Midline.propTypes = {
  axisLength: PropTypes.number.isRequired,
};

export default Midline;
