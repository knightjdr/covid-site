import PropTypes from 'prop-types';
import React, { useMemo, useRef } from 'react';

import Chart from './chart';

import getData from './data/get-data';

const ChartContainer = ({
  options,
  preys,
  x,
  y,
}) => {
  const wrapperRef = useRef();

  const data = useMemo(() => (
    getData(preys, wrapperRef, { ...options, x, y })
  ), [options, preys, wrapperRef, x, y]);

  return (
    <Chart
      data={data}
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
