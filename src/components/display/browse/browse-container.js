import React, { useState } from 'react';
import { navigate } from 'gatsby';

import Browse from './browse';

import useSmallScreen from '../../hooks/small-screen/use-small-screen';

const BrowseContainer = () => {
  const [selectedProtein, setSelectedProtein] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const isSmallScreen = useSmallScreen();

  const search = (term) => {
    navigate(`/search?term=${encodeURIComponent(term)}`);
  };

  const handleChangeSelect = (e) => {
    const { value } = e.target;
    setSelectedProtein(value);
  };

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  const handleClick = () => {
    if (searchTerm) {
      search(searchTerm);
    }
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchTerm) {
      search(searchTerm);
    }
  };

  const inputPlaceholder = isSmallScreen
    ? 'Gene symbol or UniProt'
    : 'Human gene symbol (e.g. TRIP11) or UniProt accession (e.g. Q15643)';
  ;

  return (
    <Browse
      handleChangeSelect={handleChangeSelect}
      handleChangeInput={handleChangeInput}
      handleClick={handleClick}
      handleSearch={handleSearch}
      inputPlaceholder={inputPlaceholder}
      searchTerm={searchTerm}
      selectedProtein={selectedProtein}
    />
  );
};

export default BrowseContainer;
