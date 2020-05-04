import useSmallScreen from '../hooks/small-screen/use-small-screen';

const usePlaceholder = () => {
  const isSmallScreen = useSmallScreen();

  return isSmallScreen
    ? 'Gene symbol or UniProt'
    : 'Human gene symbol (e.g. TRIP11) or UniProt accession (e.g. Q15643)';
};

export default usePlaceholder;
