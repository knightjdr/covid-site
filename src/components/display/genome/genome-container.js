import React, { useState } from 'react';

import Genome from './genome';

const GenomeContainer = () => {
  const [orf, setOrf] = useState('ORF1a');

  const handleClick = (e) => {
    const { dataset } = e.currentTarget;
    setOrf(dataset.orf);
  };

  return (
    <Genome
      handleClick={handleClick}
      orf={orf}
    />
  );
};

export default GenomeContainer;
