import PropTypes from 'prop-types';
import React from 'react';

const AXIS_OFFSET = 15;
const X_START = 60;

const Yaxis = ({
  axisLength,
  handleMouseDownY,
  handleWheelY,
  transform,
  y,
}) => {
  const axisLabelY = AXIS_OFFSET + ((axisLength) / 2);
  const { scale } = transform;
  const tickFontSize = 12 / scale;
  const tickLabelPosition = 13 / scale;
  const tickLength = 10 / scale;
  const tickStart = X_START / scale;
  const tickWidth = 2 / scale;
  return (
    <g
      onMouseDown={handleMouseDownY}
      onWheel={handleWheelY}
    >
      <defs>
        <clipPath id="yaxis_clip">
          <rect
            height={axisLength + 25}
            width={65}
            x={0}
            y={0}
          />
        </clipPath>
      </defs>
      <g id="scatterplot__yaxis-wheel">
        <rect
          height={axisLength}
          opacity={0}
          width={65}
          x={0}
          y={0}
        />
      </g>
      <line
        className="scatterplot__axis"
        stroke="black"
        x1={X_START}
        x2={X_START}
        y1={AXIS_OFFSET}
        y2={AXIS_OFFSET + axisLength}
      />
      <g clipPath="url(#yaxis_clip)">
        <g transform={transform.matrix.yAxis}>
          {
            y.ticks.map((tick) => {
              const yPosition = AXIS_OFFSET + axisLength - tick.y;
              return (
                <g
                  className="scatterplot__tick"
                  key={`y-${tick.label}`}
                >
                  <line
                    stroke="black"
                    strokeWidth={tickWidth}
                    x1={tickStart}
                    x2={tickStart - tickLength}
                    y1={yPosition}
                    y2={yPosition}
                  />
                  <text
                    dominantBaseline="central"
                    fill="black"
                    fontFamily="Liberation Sans"
                    fontSize={`${tickFontSize}px`}
                    textAnchor="end"
                    x={tickStart - tickLabelPosition}
                    y={yPosition}
                  >
                    {tick.label}
                  </text>
                </g>
              );
            })
          }
        </g>
      </g>
      <text
        dominantBaseline="central"
        fill="black"
        fontFamily="Liberation Sans"
        textAnchor="middle"
        transform={`rotate(-90, 10, ${axisLabelY})`}
        x={10}
        y={axisLabelY}
      >
        {y.label}
      </text>
    </g>
  );
};

Yaxis.propTypes = {
  axisLength: PropTypes.number.isRequired,
  handleMouseDownY: PropTypes.func.isRequired,
  handleWheelY: PropTypes.func.isRequired,
  transform: PropTypes.shape({
    scale: PropTypes.number,
    matrix: PropTypes.shape({
      yAxis: PropTypes.string,
    }),
  }).isRequired,
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
