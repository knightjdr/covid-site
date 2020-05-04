import PropTypes from 'prop-types';
import React from 'react';
import { faSearch } from '@fortawesome/pro-solid-svg-icons';

import ButtonIcon from '../buttons/icon/button';
import Input from '../input/input';
import SearchResults from './search-results';

import './search.css';

const Search = ({
  handleChange,
  handleClick,
  handleSearch,
  inputPlaceholder,
  searchResults,
  searchTerm,
}) => (
  <section className="search">
    <p>
      Search for viral proteins that interact with a human protein (at 1% FDR).
    </p>
    <div className="input_button">
      <Input
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        className="search__input"
        direction="horizontal"
        id="search_human_protein"
        label="Search:"
        onChange={handleChange}
        onKeyDown={handleSearch}
        placeholder={inputPlaceholder}
        spellCheck="false"
        type="search"
        value={searchTerm}
      />
      <ButtonIcon
        kind="primary"
        icon={faSearch}
        onClick={handleClick}
        type="button"
      />
    </div>
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
  handleClick: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  searchTerm: PropTypes.string.isRequired,
};

export default Search;
