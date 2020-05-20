import PropTypes from 'prop-types';
import React from 'react';

const AXIS_OFFSET = 5;

const Xaxis = ({
  axisLength,
  handleMouseDownX,
  handleWheel,
  id,
  transform,
  x,
}) => {
  const { scale } = transform;
  const tickFontSize = 12 / scale;
  const tickLabelPosition = 28 / scale;
  const tickLength = 10 / scale;
  const tickWidth = 2 / scale;
  return (
    <g
      onMouseDown={handleMouseDownX}
      onWheel={handleWheel}
      transform={`translate(55 ${axisLength + 15})`}
    >
      <defs>
        <clipPath id={`${id}_xaxis_text_clip`}>
          <rect
            height={65}
            width={axisLength + 25}
            x={-5}
            y={0}
          />
        </clipPath>
        <clipPath id={`${id}_xaxis_tick_clip`}>
          <rect
            height={65}
            width={axisLength + 2}
            x={AXIS_OFFSET - 1}
            y={0}
          />
        </clipPath>
      </defs>
      <g id={`${id}_xaxis_wheel`}>
        <rect
          height={65}
          opacity={0}
          width={axisLength}
          x={5}
          y={0}
        />
      </g>
      <line
        className="scatterplot__axis"
        stroke="black"
        x1={AXIS_OFFSET}
        x2={AXIS_OFFSET + axisLength}
        y1={0}
        y2={0}
      />
      <g clipPath={`url(#${id}_xaxis_tick_clip)`}>
        <g transform={transform.matrix.xAxis}>
          {
            x.ticks.map((tick) => (
              <g
                className="scatterplot__tick"
                key={`x-tick-${tick.key}`}
              >
                <line
                  stroke="black"
                  strokeWidth={tickWidth}
                  x1={AXIS_OFFSET + tick.x}
                  x2={AXIS_OFFSET + tick.x}
                  y1={0}
                  y2={tickLength}
                />
              </g>
            ))
          }
        </g>
      </g>
      <g clipPath={`url(#${id}_xaxis_text_clip)`}>
        <g transform={transform.matrix.xAxis}>
          {
            x.ticks.map((tick) => (
              <g
                className="scatterplot__tick"
                key={`x-text-${tick.key}`}
              >
                <text
                  fill="black"
                  fontFamily="Liberation Sans"
                  fontSize={`${tickFontSize}px`}
                  textAnchor="middle"
                  x={AXIS_OFFSET + tick.x}
                  y={tickLabelPosition}
                >
                  {tick.label}
                </text>
              </g>
            ))
          }
        </g>
      </g>
      <text
        fill="black"
        fontFamily="Liberation Sans"
        textAnchor="middle"
        x={AXIS_OFFSET + (axisLength / 2)}
        y={55}
      >
        {x.label}
      </text>
    </g>
  );
};

Xaxis.propTypes = {
  axisLength: PropTypes.number.isRequired,
  handleMouseDownX: PropTypes.func.isRequired,
  handleWheel: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  transform: PropTypes.shape({
    scale: PropTypes.number,
    matrix: PropTypes.shape({
      xAxis: PropTypes.string,
    }),
  }).isRequired,
  x: PropTypes.shape({
    label: PropTypes.string,
    ticks: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        label: PropTypes.number,
        x: PropTypes.number,
      }),
    ),
  }).isRequired,
};

export default Xaxis;
