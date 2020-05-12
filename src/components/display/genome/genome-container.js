import React, { useState } from 'react';

import Genome from './genome';

const GenomeContainer = () => {
  const [orf, setOrf] = useState('ORF1a');

  const handleMouseOver = (e) => {
    const { dataset } = e.currentTarget;
    setOrf(dataset.orf);
  };

  return (
    <Genome
      handleMouseOver={handleMouseOver}
      orf={orf}
    />
  );
};

export default GenomeContainer;
