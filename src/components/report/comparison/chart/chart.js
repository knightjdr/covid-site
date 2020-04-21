import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import './chart.css';
import ScatterPlot from './scatterplot/scatterplot';

const Chart = forwardRef((
  {
    data,
  },
  ref,
) => (
  data?.points?.length > 0
    ? (
      <div className="chart">
        <div
          className="chart__svg-container"
          ref={ref}
        >
          <ScatterPlot
            axisLength={data.axisLength}
            plotDimension={data.plotDimension}
            points={data.points}
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
));

Chart.propTypes = {
  data: PropTypes.shape({
    axisLength: PropTypes.number,
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
          label: PropTypes.number,
          x: PropTypes.number,
        }),
      ),
    }),
    y: PropTypes.shape({
      label: PropTypes.string,
      ticks: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.number,
          x: PropTypes.number,
        }),
      ),
    }),
  }).isRequired,
};

export default Chart;
