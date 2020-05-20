import { nanoid } from 'nanoid';
import round from '../../../../../utils/round';

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

const doesPreyPassFilters = (data, condition, options) => (
  data.conditions[condition].count >= options.count
  && data.conditions[condition].fdr <= options.fdr
  && data.conditions[condition].specificity <= options.specificity
);

const filterPreys = (preys, options) => (
  Object.entries(preys).reduce((accum, [prey, preyData]) => {
    const { x, y } = options;
    if (doesPreyPassFilters(preyData, x, options) && doesPreyPassFilters(preyData, y, options)) {
      return [
        ...accum,
        { label: prey, x: preyData.conditions[x].count, y: preyData.conditions[y].count },
      ];
    }
    return accum;
  }, [])
);

const getDimensions = (ref) => {
  const { offsetWidth } = ref.current;
  return {
    axisLength: offsetWidth - 100,
    plotDimension: offsetWidth - 20,
  };
};

const scaleData = (points, ticks, options) => {
  const { axisLength, log } = options;
  const getScaler = (vertex) => {
    const max = ticks[vertex][ticks[vertex].length - 1];
    if (log) {
      const min = ticks[vertex][0];
      const k = axisLength / (Math.log10(max) - Math.log10(min));
      const c = -1 * k * Math.log10(min);
      return (point) => k * Math.log10(point) + c;
    }
    return (point) => (point / max) * axisLength;
  };
  const scaleXValue = getScaler('x');
  const scaleYValue = getScaler('y');
  return {
    points: points.map((point) => ({
      label: point.label,
      x: scaleXValue(Math.max(point.x, ticks.x[0])),
      y: scaleYValue(Math.max(point.y, ticks.y[0])),
    })),
    ticks: {
      x: ticks.x.map((tick) => ({ key: nanoid(10), label: round(tick, 2), x: scaleXValue(tick) })),
      y: ticks.y.map((tick) => ({ key: nanoid(10), label: round(tick, 2), y: scaleYValue(tick) })),
    },
  };
};

const getData = (preys, wrapperRef, options) => {
  if (!wrapperRef.current || !options.x || !options.y) {
    return {};
  }
  const dimensions = getDimensions(wrapperRef);
  const filteredPreys = filterPreys(preys, options);
  const ticks = {
    x: defineAxis(filteredPreys, { log: options.log, scale: options.scale, vertex: 'x' }),
    y: defineAxis(filteredPreys, { log: options.log, scale: options.scale, vertex: 'y' }),
  };
  const scaledData = scaleData(filteredPreys, ticks, { ...dimensions, log: options.log });
  return {
    ...dimensions,
    log: options.log,
    midline: {
      x: scaledData.ticks.x[scaledData.ticks.x.length - 1].x,
      y: scaledData.ticks.y[scaledData.ticks.y.length - 1].y,
    },
    points: scaledData.points,
    x: {
      label: options.x,
      ticks: scaledData.ticks.x,
    },
    y: {
      label: options.y,
      ticks: scaledData.ticks.y,
    },
  };
};

export default getData;
