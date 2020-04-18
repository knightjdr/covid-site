const filterPreys = (preys, fdr, spectralCount) => {
  const filteredEntries = Object.entries(preys).filter(([, preyData]) => (
    Object.values(preyData.conditions).some((condition) => condition.fdr <= fdr && condition.count >= spectralCount)
  ));

  const filtered = {};
  filteredEntries.forEach(([prey, preyData]) => {
    filtered[prey] = preyData;
  });

  return filtered;
};

export default filterPreys;
