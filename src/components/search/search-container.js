import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import { useQueryParam, StringParam } from 'use-query-params';

import Search from './search';

import find from './find';

const SearchContainer = () => {
  const [urlTerm] = useQueryParam('term', StringParam);
  const [searchResults, setSearchResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState(urlTerm || '');

  const search = (term) => {
    setSearchResults(find(term));
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  const handleSearch = (e) => {
    const { key } = e;
    if (key === 'Enter' && searchTerm) {
      navigate(`/search?term=${encodeURIComponent(searchTerm)}`, { replace: true });
      search(searchTerm);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      search(searchTerm);
    }
  }, []);

  return (
    <Search
      handleChange={handleChange}
      handleSearch={handleSearch}
      searchResults={searchResults}
      searchTerm={searchTerm}
    />
  );
};

export default SearchContainer;
