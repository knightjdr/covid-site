const filterPreys = (preys, fdr) => {
  const filteredEntries = Object.entries(preys).filter(([, preyData]) => (
    Object.values(preyData.conditions).some((condition) => condition.fdr <= fdr)
  ));

  const filtered = {};
  filteredEntries.forEach(([prey, preyData]) => {
    filtered[prey] = preyData;
  });

  return filtered;
};

export default filterPreys;
