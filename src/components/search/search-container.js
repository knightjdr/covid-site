import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import { useQueryParam, StringParam } from 'use-query-params';

import Search from './search';

import find from './find';
import usePlaceholder from './use-placeholder';

const SearchContainer = () => {
  const [urlTerm] = useQueryParam('term', StringParam);
  const [searchResults, setSearchResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState(urlTerm || '');

  const inputPlaceholder = usePlaceholder();

  const search = (term) => {
    navigate(`/search?term=${encodeURIComponent(term)}`, { replace: true });
    setSearchResults(find(term));
  };

  const handleChange = (e) => {
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

  useEffect(() => {
    if (searchTerm) {
      search(searchTerm);
    }
  }, []);

  return (
    <Search
      handleChange={handleChange}
      handleClick={handleClick}
      handleSearch={handleSearch}
      inputPlaceholder={inputPlaceholder}
      searchResults={searchResults}
      searchTerm={searchTerm}
    />
  );
};

export default SearchContainer;
