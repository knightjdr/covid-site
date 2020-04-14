import React, { useState } from 'react';

import Localization from './localization';

const LocalizationContainer = () => {
  const [highlighted, sethighlighted] = useState({ protein: '', cell: '', virus: '' });

  const handleProteinMouseOut = () => {
    sethighlighted({
      cell: '',
      protein: '',
      virus: '',
    });
  };

  const handleProteinMouseOver = (e) => {
    const { cellLocalization, virusLocalization } = e.target.dataset;
    sethighlighted({
      ...highlighted,
      cell: cellLocalization,
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
    <Localization
      handleGraphicMouseOut={handleGraphicMouseOut}
      handleGraphicMouseOver={handleGraphicMouseOver}
      handleProteinMouseOut={handleProteinMouseOut}
      handleProteinMouseOver={handleProteinMouseOver}
      highlighted={highlighted}
    />
  );
};

export default LocalizationContainer;
