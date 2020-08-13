import PropTypes from 'prop-types';
import React from 'react';

import EnrichmentDescription from './enrichment-description';
import EnrichmentSearch from './search/enrichment-search-conatiner';

import './enrichment.css';

const Enrichment = ({
  handleChangeSearchTerm,
  handleSearch,
  searchTerm,
}) => (
  <div className="enrichment">
    <h1>GO enrichment</h1>
    <EnrichmentDescription />
    <EnrichmentSearch
      handleChangeSearchTerm={handleChangeSearchTerm}
      handleSearch={handleSearch}
      searchTerm={searchTerm}
    />
  </div>
);

Enrichment.propTypes = {
  handleChangeSearchTerm: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default Enrichment;
