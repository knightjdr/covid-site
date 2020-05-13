import React, { useState } from 'react';

import Localization from './localization';

import useSmallScreen from '../../hooks/small-screen/use-small-screen';

const LocalizationContainer = () => {
  const [highlighted, sethighlighted] = useState({ protein: '', cell: '', virus: '' });
  const isSmallScreen = useSmallScreen();

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
      cell: cellLocalization || 'unknown',
      virus: virusLocalization || 'non-structural',
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

  const userText = isSmallScreen
    ? `Tap a protein to view its localization or a compartment
      to view all viral proteins that localize there.`
    : `Hover over a protein to view its localization or over a compartment
      to view all viral proteins that localize there.`;

  return (
    <Localization
      handleGraphicMouseOut={handleGraphicMouseOut}
      handleGraphicMouseOver={handleGraphicMouseOver}
      handleProteinMouseOut={handleProteinMouseOut}
      handleProteinMouseOver={handleProteinMouseOver}
      highlighted={highlighted}
      userText={userText}
    />
  );
};

export default LocalizationContainer;
