import PropTypes from 'prop-types';
import React from 'react';

import Input from '../../input/input';
import Link from '../../link/link';
import Select from '../../select/select';

import proteins from '../../../../content/bait-list.json';

import './browse.css';

const options = proteins.map((protein) => protein.id);

const Browse = ({
  handleChange,
  handleSearch,
  selectedProtein,
}) => (
  <section className="display browse">
    <h2>Browse & Search</h2>
    <p className="display__instructions">
      We profiled twenty-six proteins from the viral genome. Select one below to view
      a detailed report or search for viral proteins that interact with a human protein.
    </p>
    <div className="browse__inputs">
      <div className="browse__select-container">
        <Select
          className={selectedProtein ? 'browse__select_option-selected' : 'browse__select'}
          id="browse_select"
          label="Protein:"
          onChange={handleChange}
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
      <Input
        direction="horizontal"
        id="search_human_protein"
        label="Search:"
        onKeyDown={handleSearch}
        placeholder="Human gene symbol (e.g. TRIP11) or UniProt accession (e.g. Q15643)"
        type="search"
      />
    </div>
  </section>
);

Browse.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  selectedProtein: PropTypes.string.isRequired,
};

export default Browse;
