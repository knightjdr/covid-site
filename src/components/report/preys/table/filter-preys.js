const filterPreys = (preys, fdr, specificity, spectralCount) => {
  const filteredEntries = Object.entries(preys).filter(([, preyData]) => (
    Object.values(preyData.conditions).some((condition) => (
      condition.fdr <= fdr
      && condition.count >= spectralCount
      && (condition.specificity === 'Infinity' || condition.specificity >= specificity)
    ))
  ));

  const filtered = {};
  filteredEntries.forEach(([prey, preyData]) => {
    filtered[prey] = preyData;
  });

  return filtered;
};

export default filterPreys;
