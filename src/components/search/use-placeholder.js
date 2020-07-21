import useSmallScreen from '../hooks/small-screen/use-small-screen';

const usePlaceholder = () => {
  const isSmallScreen = useSmallScreen();

  return isSmallScreen
    ? 'Gene symbol or UniProt'
    : 'Human gene symbol (TRIP11), Entrez ID (9321) or UniProt accession (Q15643)';
};

export default usePlaceholder;
