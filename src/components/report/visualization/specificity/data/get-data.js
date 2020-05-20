import defineAxis from '../../data/define-axis';
import filterPreys from '../../data/filter-preys';
import getDimensions from '../../data/get-dimensions';
import scaleData from '../../data/scale-data';

const convertSpecificityToNumber = (preys) => {
  const max = preys.reduce((accum, prey) => (
    prey.y !== 'Infinity' && prey.y > accum ? prey.y : accum
  ), 0);
  return preys.map((prey) => ({
    ...prey,
    y: prey.y === 'Infinity' ? max : prey.y,
  }));
};

const getData = (preys, ref, options) => {
  if (!ref.current || !options.condition) {
    return {};
  }
  const dimensions = getDimensions(ref);

  const filterOptions = {
    ...options,
    xCondition: options.condition,
    xMetric: 'count',
    yCondition: options.condition,
    yMetric: 'specificity',
  };
  let filteredPreys = filterPreys(preys, filterOptions);
  filteredPreys = convertSpecificityToNumber(filteredPreys);

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
