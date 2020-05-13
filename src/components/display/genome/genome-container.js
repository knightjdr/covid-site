import React, { useState } from 'react';

import Genome from './genome';

import useSmallScreen from '../../hooks/small-screen/use-small-screen';

const GenomeContainer = () => {
  const [orf, setOrf] = useState('ORF1a');
  const isSmallScreen = useSmallScreen();

  const handleClick = (e) => {
    const { dataset } = e.currentTarget;
    setOrf(dataset.orf);
  };

  const userText = isSmallScreen
    ? 'Tap an ORF to view details about it.'
    : 'Click an ORF to view details about it.';

  return (
    <Genome
      handleClick={handleClick}
      orf={orf}
      userText={userText}
    />
  );
};

export default GenomeContainer;
