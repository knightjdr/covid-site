import React, { useState } from 'react';

import ProteinNav from './protein-nav';

const ProteinNavContainer = () => {
  const [highlighted, sethighlighted] = useState({ protein: '', cell: '', virus: '' });

  const handleProteinMouseOut = () => {
    sethighlighted({
      cell: '',
      protein: '',
      virus: '',
    });
  };

  const handleProteinMouseOver = (e) => {
    const { virusLocalization } = e.target.dataset;
    sethighlighted({
      ...highlighted,
      virus: virusLocalization,
    });
  };

  const handleGraphicMouseOut = () => {
    sethighlighted({
      cell: '',
      protein: '',
      virus: '',
    });
  };

  const handleGraphicMouseOver = (e) => {
    const { localization } = e.currentTarget.dataset;
    sethighlighted({
      ...highlighted,
      protein: localization,
    });
  };

  return (
    <ProteinNav
      handleGraphicMouseOut={handleGraphicMouseOut}
      handleGraphicMouseOver={handleGraphicMouseOver}
      handleProteinMouseOut={handleProteinMouseOut}
      handleProteinMouseOver={handleProteinMouseOver}
      highlighted={highlighted}
    />
  );
};

export default ProteinNavContainer;
