import React from 'react';
import { navigate } from 'gatsby';

import Browse from './browse';

const BrowseContainer = () => {
  const handleChange = (e) => {
    const { value } = e.target;
    navigate(`/${value}`);
  };

  const handleSearch = (e) => {
    const { key, target } = e;
    if (key === 'Enter') {
      const { value } = target;
      console.log(value);
    }
  };

  return (
    <Browse
      handleChange={handleChange}
      handleSearch={handleSearch}
    />
  );
};

export default BrowseContainer;
