import PropTypes from 'prop-types';
import React from 'react';
import { faSearch } from '@fortawesome/pro-solid-svg-icons';

import Autocomplete from '../../input/autocomplete-container';
import Button from '../../buttons/icon/button';

const EnrichmentSearch = ({
  handleChangeSearchTerm,
  handleSearch,
  searchTerm,
}) => (
  <div className="enrichment__controls">
    <span className="enrichment__legend">Legend</span>
    <Autocomplete
      direction="horizontal"
      id="go_term_search"
      label="Search:"
      onChange={handleChangeSearchTerm}
      onSelect={handleSearch}
      options={['a', 'aa', 'b', 'ba']}
      placeholder="Enter term..."
      value={searchTerm}
    />
    <Button
      ariaLabel="Search for prey"
      className="enrichment__controls-button"
      icon={faSearch}
      kind="primary"
      onClick={handleSearch}
    />
  </div>
);

EnrichmentSearch.propTypes = {
  handleChangeSearchTerm: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default EnrichmentSearch;
