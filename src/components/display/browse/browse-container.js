import React, { useState } from 'react';
import { navigate } from 'gatsby';

import Browse from './browse';

const BrowseContainer = () => {
  const [selectedProtein, setSelectedProtein] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedProtein(value);
  };

  const handleSearch = (e) => {
    const { key, target } = e;
    const { value } = target;
    if (key === 'Enter' && value) {
      navigate(`/search?term=${encodeURIComponent(value)}`);
    }
  };

  return (
    <Browse
      handleChange={handleChange}
      handleSearch={handleSearch}
      selectedProtein={selectedProtein}
    />
  );
};

export default BrowseContainer;
