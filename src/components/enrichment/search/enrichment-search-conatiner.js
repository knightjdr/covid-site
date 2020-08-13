import PropTypes from 'prop-types';
import React from 'react';

import EnrichmentSearch from './enrichment-search';

const EnrichmentSearchContainer = ({
  handleChangeSearchTerm,
  handleSearch,
  searchTerm,
}) => {

  return (
    <EnrichmentSearch
      handleChangeSearchTerm={handleChangeSearchTerm}
      handleSearch={handleSearch}
      searchTerm={searchTerm}
    />
  );
};

EnrichmentSearchContainer.propTypes = {
  handleChangeSearchTerm: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default EnrichmentSearchContainer;
