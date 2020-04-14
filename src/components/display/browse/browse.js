import PropTypes from 'prop-types';
import React from 'react';

import Input from '../../input/input';
import Select from '../../select/select';

import proteins from '../../../../content/bait-list.json';

import './browse.css';

const options = proteins.map((protein) => protein.id);

const Browse = ({
  handleChange,
  handleSearch,
}) => (
  <section className="display browse">
    <h2>Browse & Search</h2>
    <p className="display__instructions">
      There are 26 known proteins encoded by the viral genome. Select one below to view
      a detailed report or search for viral proteins that interact with a human gene.
    </p>
    <div className="browse__inputs">
      <Select
        id="browse_select"
        label="Protein:"
        onChange={handleChange}
        options={options}
        placeholder="Select protein"
      />
      <Input
        direction="horizontal"
        id="search_human_protein"
        label="Search:"
        onKeyDown={handleSearch}
        placeholder="Gene symbol or UniProt"
      />
    </div>
  </section>
);

Browse.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default Browse;
