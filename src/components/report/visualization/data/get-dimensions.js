const getDimensions = (ref) => {
  const { offsetWidth } = ref.current;
  return {
    axisLength: offsetWidth - 100,
    plotDimension: offsetWidth - 20,
  };
};

export default getDimensions;
