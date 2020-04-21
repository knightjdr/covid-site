import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';

import Chart from './chart';

const ChartContainer = ({
  options,
  preys,
  x,
  y,
}) => {
  const wrapperRef = useRef();
  const [data, setData] = useState({});

  return (
    <Chart
      data={{
        axisLength: 415,
        plotDimension: 480,
        points: [
          { label: 'a', x: 20, y: 25 },
          { label: 'b', x: 300, y: 250 },
        ],
        x: {
          label: 'x axis',
          ticks: [
            { label: 0, x: 0 },
            { label: 207.5, x: 207.5 },
            { label: 415, x: 415 },
          ],
        },
        y: {
          label: 'y axis',
          ticks: [
            { label: 0, y: 0 },
            { label: 207.5, y: 207.5 },
            { label: 415, y: 415 },
          ],
        },
      }}
      ref={wrapperRef}
    />
  );
};

ChartContainer.propTypes = {
  options: PropTypes.shape({
    count: PropTypes.number,
    fdr: PropTypes.number,
    log: PropTypes.bool,
  }).isRequired,
  preys: PropTypes.shape({}).isRequired,
  x: PropTypes.string.isRequired,
  y: PropTypes.string.isRequired,
};

export default ChartContainer;
