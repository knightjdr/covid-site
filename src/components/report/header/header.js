import PropTypes from 'prop-types';
import React from 'react';

import Hero from '../../layout/background/hero';
import Link from '../../link/link';

import './header.css';

const Header = ({
  description,
  gene,
  id,
  name,
  uniprot,
}) => (
  <Hero
    className="report__header"
    Tag="header"
  >
    <div className="report__header-inner">
      <h1>
        <div className="report__header-title">Identifier</div>
        <div>{id}</div>
      </h1>
      <div className="report__header-field">Gene</div>
      <div>{gene}</div>
      {}
      <div className="report__header-field">Protein name</div>
      <div>{name}</div>
      <div className="report__header-field">Uniprot</div>
      <div className="report__header-uniprot">
        <Link to={`https://covid-19.uniprot.org/uniprotkb/${uniprot}`}>
          {uniprot}
        </Link>
      </div>
      <div className="report__header-field">Description</div>
      <div>{description}</div>
    </div>
  </Hero>
);

Header.propTypes = {
  description: PropTypes.string.isRequired,
  gene: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  uniprot: PropTypes.string.isRequired,
};

export default Header;
