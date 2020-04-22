import PropTypes from 'prop-types';
import React from 'react';

const AXIS_OFFSET = 5;

const Xaxis = ({
  axisLength,
  x,
}) => (
  <g transform={`translate(55 ${axisLength + 15})`}>
    <line
      className="scatterplot__axis"
      x1={AXIS_OFFSET}
      x2={AXIS_OFFSET + axisLength}
      y1={0}
      y2={0}
    />
    {
      x.ticks.map((tick) => (
        <g
          className="scatterplot__tick"
          key={`x-${tick.label}`}
        >
          <line
            x1={AXIS_OFFSET + tick.x}
            x2={AXIS_OFFSET + tick.x}
            y1={0}
            y2={10}
          />
          <text
            textAnchor="middle"
            x={AXIS_OFFSET + tick.x}
            y={28}
          >
            {tick.label}
          </text>
        </g>
      ))
    }
    <text
      textAnchor="middle"
      x={AXIS_OFFSET + (axisLength / 2)}
      y={55}
    >
      {x.label}
    </text>
  </g>
);

Xaxis.propTypes = {
  axisLength: PropTypes.number.isRequired,
  x: PropTypes.shape({
    label: PropTypes.string,
    ticks: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.number,
        x: PropTypes.number,
      }),
    ),
  }).isRequired,
};

export default Xaxis;
