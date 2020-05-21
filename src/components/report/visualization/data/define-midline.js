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
  const coordinates = {};

  if (ticks.x[0].label >= ticks.y[0].label) {
    const xLabelStart = ticks.x[0].label;
    coordinates.x1 = 0;
    coordinates.y1 = axisLength - ticks.y.find((tick) => tick.label === xLabelStart).y;
  } else {
    const yLabelStart = ticks.y[0].label;
    coordinates.x1 = ticks.x.find((tick) => tick.label === yLabelStart).x;
    coordinates.y1 = 0;
  }

  if (ticks.x[ticks.x.length - 1].label >= ticks.y[ticks.y.length - 1].label) {
    const yLabelEnd = ticks.y[ticks.y.length - 1].label;
    coordinates.x2 = ticks.x.find((tick) => tick.label === yLabelEnd).x;
    coordinates.y2 = 0;
  } else {
    const { label: xLabelEnd, x } = ticks.x[ticks.x.length - 1];
    coordinates.x2 = x;
    coordinates.y2 = axisLength - ticks.y.find((tick) => tick.label === xLabelEnd).y;
  }

  return coordinates;
};

const defineMidline = (ticks, axisLength, logTransform) => (
  logTransform
    ? getLogMidline(ticks, axisLength)
    : getLinearMidline(ticks, axisLength)
);

export default defineMidline;
