import PropTypes from 'prop-types';
import React from 'react';

import HeaderLocalization from './header-localization';
import Hero from '../../layout/background/hero';

import './header.css';
import HeaderUniprot from './header-uniprot';
import HeaderDescription from './header-description';

const Header = ({
  description,
  gene,
  id,
  localization,
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
      <div>{name || 'none currently assigned'}</div>
      <div className="report__header-field">Localization</div>
      <HeaderLocalization localization={localization} />
      <HeaderUniprot uniprot={uniprot} />
      <HeaderDescription description={description} />
    </div>
  </Hero>
);

Header.propTypes = {
  description: PropTypes.shape({
    custom: PropTypes.string,
    uniprot: PropTypes.string,
  }).isRequired,
  gene: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  localization: PropTypes.shape({
    cellSpecific: PropTypes.arrayOf(PropTypes.string),
    virus: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  name: PropTypes.string.isRequired,
  uniprot: PropTypes.string.isRequired,
};

export default Header;
