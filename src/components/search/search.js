import PropTypes from 'prop-types';
import React from 'react';

import Input from '../input/input';
import SearchResults from './search-results';

import './search.css';

const Search = ({
  handleChange,
  handleSearch,
  searchResults,
  searchTerm,
}) => (
  <section className="search">
    <p>
      Search for viral proteins that interact with a human gene.
    </p>
    <Input
      className="search__input"
      direction="horizontal"
      id="search_human_protein"
      label="Search:"
      onChange={handleChange}
      onKeyDown={handleSearch}
      placeholder="Human gene symbol (e.g. TRIP11) or UniProt accession (e.g. Q15643)"
      type="search"
      value={searchTerm}
    />
    {
      searchResults
      && <SearchResults searchResults={searchResults} />
    }
  </section>
);

Search.defaultProps = {
  searchResults: null,
};

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  searchTerm: PropTypes.string.isRequired,
};

export default Search;
