import PropTypes from 'prop-types';
import React from 'react';

const AXIS_OFFSET = 5;
const X_START = 60;

const Yaxis = ({
  axisLength,
  y,
}) => {
  const axisLabelY = AXIS_OFFSET + ((axisLength) / 2);
  return (
    <g>
      <line
        className="scatterplot__axis"
        x1={X_START}
        x2={X_START}
        y1={AXIS_OFFSET}
        y2={AXIS_OFFSET + axisLength}
      />
      {
        y.ticks.map((tick) => {
          const yPosition = AXIS_OFFSET + axisLength - tick.y;
          return (
            <g key={`y-${tick.label}`}>
              <line
                className="scatterplot__tick"
                x1={X_START}
                x2={X_START - 10}
                y1={yPosition}
                y2={yPosition}
              />
              <text
                dominantBaseline="central"
                textAnchor="end"
                x={X_START - 13}
                y={yPosition}
              >
                {tick.label}
              </text>
            </g>
          );
        })
      }
      <text
        dominantBaseline="central"
        textAnchor="middle"
        transform={`rotate(-90, 5, ${axisLabelY})`}
        x={5}
        y={axisLabelY}
      >
        {y.label}
      </text>
    </g>
  );
};

Yaxis.propTypes = {
  axisLength: PropTypes.number.isRequired,
  y: PropTypes.shape({
    label: PropTypes.string,
    ticks: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.number,
        x: PropTypes.number,
      }),
    ),
  }).isRequired,
};

export default Yaxis;
