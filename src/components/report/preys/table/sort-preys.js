import sortArrByKey from '../../../../utils/sort/sort-arr-by-key';

const defineConditionGetter = (condition) => (
  condition === 'prey'
    ? (prey) => ({ prey })
    : (prey, conditions) => ({
      prey,
      value: conditions[condition] ? conditions[condition].count : 0,
    })
);

const sortPreys = (preys, options) => {
  const { condition, direction, sortType } = options;

  const getSortValue = defineConditionGetter(condition);
  const conditionValues = Object.entries(preys).map(([prey, preyData]) => getSortValue(prey, preyData.conditions));

  const sortKey = sortType === 'string' ? 'prey' : 'value';
  return sortArrByKey(conditionValues, sortKey, direction, sortType).map(({ prey }) => ({
    conditions: preys[prey].conditions,
    id: preys[prey].id,
    prey,
  }));
};

export default sortPreys;
