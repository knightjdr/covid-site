import PropTypes from 'prop-types';
import React from 'react';

const Midline = ({
  midline,
  scale,
}) => {
  const dash = 5 / scale;
  const strokeWidth = 2 / scale;
  return (
    <line
      className="scatterplot__midline"
      strokeDasharray={`${dash} ${dash}`}
      strokeWidth={strokeWidth}
      x1={0}
      x2={midline.x}
      y1={midline.y}
      y2={0}
    />
  );
};

Midline.propTypes = {
  midline: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  scale: PropTypes.number.isRequired,
};

export default Midline;
