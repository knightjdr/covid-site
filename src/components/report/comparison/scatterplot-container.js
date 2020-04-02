import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Scatterplot from './scatterplot';

const ScatterplotContainer = ({
  preys,
  x,
  y,
}) => {
  const [points, setPoints] = useState([]);

  return (
    <Scatterplot
      points={points}
      x={x}
      y={y}
    />
  );
};

ScatterplotContainer.propTypes = {
  preys: PropTypes.shape({}).isRequired,
  x: PropTypes.string.isRequired,
  y: PropTypes.string.isRequired,
};

export default ScatterplotContainer;
