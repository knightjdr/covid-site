const doesPreyPassFilters = (data, condition, options) => (
  data.conditions[condition]?.fdr <= options.fdr
  && data.conditions[condition].count >= options.count
  && (
    data.conditions[condition].specificity === 'Infinity'
    || data.conditions[condition].specificity >= options.specificity
  )
);

const filterPreys = (preys, options) => (
  Object.entries(preys).reduce((accum, [prey, preyData]) => {
    const {
      xCondition,
      xMetric,
      yCondition,
      yMetric,
    } = options;
    if (
      doesPreyPassFilters(preyData, xCondition, options)
      || doesPreyPassFilters(preyData, yCondition, options)
    ) {
      return [
        ...accum,
        {
          label: prey,
          x: preyData.conditions[xCondition]?.[xMetric] || 0,
          y: preyData.conditions[yCondition]?.[yMetric] || 0,
        },
      ];
    }
    return accum;
  }, [])
);

export default filterPreys;
