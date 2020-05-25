import defineAxis from '../../data/define-axis';
import defineMidline from '../../data/define-midline';
import filterPreys from '../../data/filter-preys';
import getDimensions from '../../data/get-dimensions';
import scaleData from '../../data/scale-data';

const convertSpecificityToNumber = (preys) => {
  const max = preys.reduce((accum, prey) => (
    prey.y !== 'Infinity' && prey.y > accum ? prey.y : accum
  ), 0);
  return preys.map((prey) => {
    if (prey.y === 'Infinity') {
      return {
        ...prey,
        highlight: true,
        y: max,
      };
    }
    return {
      ...prey,
    };
  });
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

  const midline = options.midline ? defineMidline(scaledData.ticks, dimensions.axisLength, options.log) : null;

  return {
    ...dimensions,
    log: options.log,
    midline,
    points: scaledData.points,
    x: {
      label: 'spectral count',
      ticks: scaledData.ticks.x,
    },
    y: {
      label: 'specificity',
      ticks: scaledData.ticks.y,
    },
  };
};

export default getData;
