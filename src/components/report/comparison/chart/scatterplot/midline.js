import PropTypes from 'prop-types';
import React from 'react';

const Midline = ({
  midline,
}) => (
  <g transform="translate(60 15)">
    <line
      strokeDasharray="5 5"
      x1={0}
      x2={midline.x}
      y1={midline.y}
      y2={0}
    />
  </g>
);

Midline.propTypes = {
  midline: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default Midline;
