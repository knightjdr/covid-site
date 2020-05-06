import PropTypes from 'prop-types';
import React from 'react';
import { faSearch } from '@fortawesome/pro-solid-svg-icons';

import ButtonIcon from '../../buttons/icon/button';
import Input from '../../input/input';
import Link from '../../link/link';
import Select from '../../select/select';

import proteins from '../../../../content/bait-list.json';

import './browse.css';

const options = proteins.map((protein) => protein.id);

const Browse = ({
  handleChangeSelect,
  handleChangeInput,
  handleClick,
  handleSearch,
  inputPlaceholder,
  searchTerm,
  selectedProtein,
}) => (
  <div className="display browse">
    <h2>Browse & Search</h2>
    <p className="display__instructions">
      We profiled twenty-eight proteins from the viral genome. Select one below to view
      a detailed report or search for viral proteins that interact with a human protein.
    </p>
    <div className="browse__inputs">
      <div className="browse__select-container">
        <Select
          className={selectedProtein ? 'browse__select_option-selected' : 'browse__select'}
          id="browse_select"
          label="Protein:"
          onChange={handleChangeSelect}
          options={options}
          placeholder="Select..."
          value={selectedProtein}
        />
        <div style={{ visibility: selectedProtein ? 'visible' : 'hidden' }}>
          <Link
            buttonStyle
            kind="primary"
            nav
            to={`/${selectedProtein}`}
          >
            View
          </Link>
        </div>
      </div>
      <div className="input_button">
        <Input
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          direction="horizontal"
          id="search_human_protein"
          label="Search:"
          onChange={handleChangeInput}
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
    </div>
  </div>
);

Browse.propTypes = {
  handleChangeSelect: PropTypes.func.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  selectedProtein: PropTypes.string.isRequired,
};

export default Browse;
