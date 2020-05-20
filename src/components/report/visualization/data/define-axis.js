const getScaleFactor = (scale, multiplier) => (
  scale < 1.5 ? 1 : Math.floor((scale - 1) / 0.5) * multiplier
);

const calculateLinearTicks = (max, scale) => {
  const power = Math.floor(Math.log10(max - 0));
  const step = (10 ** power) / getScaleFactor(scale, 2);
  const ticks = [];
  for (let i = 0; i <= max; i += step) {
    ticks.push(i);
  }
  if (ticks[ticks.length - 1] !== max) {
    ticks.push(ticks[ticks.length - 1] + step);
  }
  return ticks;
};

const getMinLogTick = (min) => {
  const logValue = Math.log10(min);
  if (logValue < 0.1) {
    return 0.01;
  } if (logValue < 1) {
    return 0.1;
  }
  return 1;
};

const calculateLogTicks = (max, min, scale) => {
  const scaleFactor = getScaleFactor(scale, 1);
  const ticks = [];
  const base = getMinLogTick(min);
  for (let i = base; i <= max; i *= 10) {
    ticks.push(i);
    const minorTick = (i * 10) / scaleFactor;
    for (let j = 1; j < scaleFactor; j += 1) {
      const tick = j * minorTick;
      ticks.push(tick);
    }
  }
  if (ticks[ticks.length - 1] !== max) {
    ticks.push(ticks[ticks.length - 1] * 10);
  }
  return ticks;
};

const defineAxis = (preyData, options) => {
  const { log, scale, vertex } = options;
  const max = preyData.reduce((maxValue, datum) => (datum[vertex] > maxValue ? datum[vertex] : maxValue), 0);
  const min = preyData.reduce((minValue, datum) => (datum[vertex] < minValue ? datum[vertex] : minValue), 1000);
  return log ? calculateLogTicks(max, min, scale) : calculateLinearTicks(max, scale);
};

export default defineAxis;
