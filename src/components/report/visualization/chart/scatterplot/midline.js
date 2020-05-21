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
      stroke="black"
      strokeDasharray={`${dash} ${dash}`}
      strokeWidth={strokeWidth}
      x1={midline.x1}
      x2={midline.x2}
      y1={midline.y1}
      y2={midline.y2}
    />
  );
};

Midline.propTypes = {
  midline: PropTypes.shape({
    x1: PropTypes.number,
    x2: PropTypes.number,
    y1: PropTypes.number,
    y2: PropTypes.number,
  }).isRequired,
  scale: PropTypes.number.isRequired,
};

export default Midline;
