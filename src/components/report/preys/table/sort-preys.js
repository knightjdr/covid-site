import sortArrByKey from '../../../../utils/sort/sort-arr-by-key';

const defineConditionGetter = (condition, metric) => (
  condition === 'prey'
    ? (prey) => ({ prey })
    : (prey, conditions) => ({
      prey,
      value: conditions[condition] ? Number(conditions[condition][metric]) : 0,
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
  const conditionValues = Object.entries(preys).map(([prey, preyData]) => getSortValue(prey, preyData.conditions));

  const sortKey = sortType === 'string' ? 'prey' : 'value';
  const sorted = sortArrByKey(conditionValues, sortKey, direction, sortType).map(({ prey }) => ({
    conditions: preys[prey].conditions,
    id: preys[prey].id,
    prey,
  }));

  return highlightedPrey ? prependHighlightedPrey(sorted, highlightedPrey) : sorted;
};

export default sortPreys;
