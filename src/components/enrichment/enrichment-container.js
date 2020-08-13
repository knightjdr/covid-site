import React, { useState } from 'react';

import Enrichment from './enrichment';

const EnrichmentContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTerms, setSearchTerms] = useState({});

  const handleChangeSearchTerm = (e, value) => {
    setSearchTerm(value || e.target.value);
  };

  const handleSearch = (e, value) => {
    if (
      value
      || (
        searchTerm
        && !searchTerms[searchTerm]
        && (
          e.currentTarget.tagName === 'BUTTON'
          || (
            e.which === 13 || e.keyCode === 13
          )
        )
      )
    ) {
      setSearchTerms({
        ...searchTerms,
        [value || searchTerm]: true,
      });
    }
  };

  return (
    <Enrichment
      handleChangeSearchTerm={handleChangeSearchTerm}
      handleSearch={handleSearch}
      searchTerm={searchTerm}
      searchTerms={searchTerms}
    />
  );
};

export default EnrichmentContainer;
