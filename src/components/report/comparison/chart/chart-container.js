import PropTypes from 'prop-types';
import React, { useMemo, useRef } from 'react';

import Chart from './chart';

import getData from './data/get-data';

const ChartContainer = ({
  options,
  preys,
  transform,
  x,
  y,
}) => {
  const wrapperRef = useRef();

  const data = useMemo(() => {
    const dataOptions = {
      ...options,
      scale: transform.scale,
      x,
      y,
    };
    return getData(preys, wrapperRef, dataOptions);
  }, [options, preys, transform.scale, wrapperRef, x, y]);

  return (
    <Chart
      data={data}
      ref={wrapperRef}
      transform={transform}
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
  transform: PropTypes.shape({
    origin: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
    matrix: PropTypes.shape({
      plot: PropTypes.string,
      xAxis: PropTypes.string,
      yAxis: PropTypes.string,
    }),
    scale: PropTypes.number,
    setTransform: PropTypes.func.isRequired,
  }).isRequired,
  x: PropTypes.string.isRequired,
  y: PropTypes.string.isRequired,
};

export default ChartContainer;
