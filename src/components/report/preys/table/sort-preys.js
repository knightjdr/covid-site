import sortArrByKey from '../../../../utils/sort/sort-arr-by-key';

const getConditionValues = (preys, getSortValue) => {
  const definedValues = [];
  const nullValues = [];

  Object.entries(preys).forEach(([prey, preyData]) => {
    const entry = getSortValue(prey, preyData.conditions);
    if (entry.value !== null) {
      definedValues.push(entry);
    } else {
      nullValues.push(entry);
    }
  });

  return [definedValues, nullValues];
};

const defineConditionGetter = (condition, metric) => (
  condition === 'prey'
    ? (prey) => ({ prey })
    : (prey, conditions) => ({
      prey,
      value: conditions[condition] ? Number(conditions[condition][metric]) : null,
    })
);

const prependHighlightedPrey = (arr, highlightedPrey) => {
  const index = arr.findIndex((item) => item.prey === highlightedPrey);
  if (index > -1) {
    const prey = arr[index];
    arr.splice(index, 1);
    arr.unshift({
      ...prey,
      highlight: true,
    });
  }
  return arr;
};

const sortPreys = (preys, options) => {
  const {
    condition,
    direction,
    highlightedPrey,
    metric,
    type: sortType,
  } = options;

  const getSortValue = defineConditionGetter(condition, metric);
  const [definedValues, nullValues] = getConditionValues(preys, getSortValue);

  const sortKey = sortType === 'string' ? 'prey' : 'value';
  const sorted = [
    ...sortArrByKey(definedValues, sortKey, direction, sortType),
    ...nullValues,
  ].map(({ prey }) => ({
    conditions: preys[prey].conditions,
    id: preys[prey].id,
    prey,
  }));

  return highlightedPrey ? prependHighlightedPrey(sorted, highlightedPrey) : sorted;
};

export default sortPreys;
