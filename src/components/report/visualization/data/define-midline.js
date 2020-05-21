const getLinearMidline = (ticks, axisLength) => {
  const { label: xLabel } = ticks.x[ticks.x.length - 1];
  const { label: yLabel, y } = ticks.y[ticks.y.length - 1];

  return {
    x1: 0,
    x2: y * (yLabel / xLabel),
    y1: axisLength,
    y2: 0,
  };
};

const getLogMidline = (ticks, axisLength) => {
  const { label: xLabel, x } = ticks.x[ticks.x.length - 1];
  const { label: yLabel } = ticks.y[ticks.y.length - 1];

  return xLabel > yLabel
    ? {
      x1: 0,
      x2: ticks.x.find((tick) => tick.label === yLabel).x,
      y1: axisLength,
      y2: 0,
    }
    : {
      x1: 0,
      x2: x,
      y1: axisLength,
      y2: ticks.y.find((tick) => tick.label === xLabel).y - axisLength,
    };
};

const defineMidline = (ticks, axisLength, logTransform) => (
  logTransform
    ? getLogMidline(ticks, axisLength)
    : getLinearMidline(ticks, axisLength)
);

export default defineMidline;
