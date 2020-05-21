import defineAxis from '../../data/define-axis';
import defineMidline from '../../data/define-midline';
import filterPreys from '../../data/filter-preys';
import getDimensions from '../../data/get-dimensions';
import scaleData from '../../data/scale-data';

const getData = (preys, ref, options) => {
  if (!ref.current || !options.x || !options.y) {
    return {};
  }
  const dimensions = getDimensions(ref);

  const filterOptions = {
    ...options,
    xCondition: options.x,
    xMetric: 'count',
    yCondition: options.y,
    yMetric: 'count',
  };
  const filteredPreys = filterPreys(preys, filterOptions);

  const ticks = {
    x: defineAxis(filteredPreys, { log: options.log, scale: options.scale, vertex: 'x' }),
    y: defineAxis(filteredPreys, { log: options.log, scale: options.scale, vertex: 'y' }),
  };

  const scaledData = scaleData(filteredPreys, ticks, { ...dimensions, log: options.log });

  const midline = options.midline ? defineMidline(scaledData.ticks, dimensions.axisLength, options.log) : null;

  return {
    ...dimensions,
    log: options.log,
    midline,
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
