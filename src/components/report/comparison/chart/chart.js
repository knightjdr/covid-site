import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import './chart.css';
import ScatterPlot from './scatterplot/scatterplot-container';

const Chart = forwardRef((
  {
    data,
    transform,
  },
  ref,
) => (
  <div
    className="chart"
    ref={ref}
  >
    {
      data?.points?.length > 0
        ? (
          <div className="chart__svg">
            <div className="chart__svg-container">
              <ScatterPlot
                axisLength={data.axisLength}
                log={data.log}
                midline={data.midline}
                plotDimension={data.plotDimension}
                points={data.points}
                transform={transform}
                x={data.x}
                y={data.y}
              />
            </div>
          </div>
        )
        : (
          <div className="chart__placeholder">
            <div className="chart__placeholder-inner">
              <span>
                Select a pair of conditions
              </span>
            </div>
          </div>
        )
    }
  </div>
));

Chart.propTypes = {
  data: PropTypes.shape({
    axisLength: PropTypes.number,
    log: PropTypes.bool,
    midline: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
    plotDimension: PropTypes.number,
    points: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        x: PropTypes.number,
        y: PropTypes.number,
      }),
    ),
    x: PropTypes.shape({
      label: PropTypes.string,
      ticks: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.string,
          label: PropTypes.number,
          x: PropTypes.number,
        }),
      ),
    }),
    y: PropTypes.shape({
      label: PropTypes.string,
      ticks: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.string,
          label: PropTypes.number,
          x: PropTypes.number,
        }),
      ),
    }),
  }).isRequired,
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
};

export default Chart;
