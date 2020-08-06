import PropTypes from 'prop-types';
import React from 'react';

import Hero from '../../layout/background/hero';
import Link from '../../link/link';

import './header.css';

const Header = ({
  description,
  gene,
  id,
  localization,
  name,
  uniprot,
}) => {
  const cellLocalizations = localization.cell?.length > 0 ? localization.cell.join(', ') : 'unknown';
  const expressedInVirus = localization.virus?.length > 0;
  return (
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
        {
          uniprot
            && (
              <>
                <div className="report__header-field">Uniprot</div>
                <div className="report__header-uniprot">
                  <Link to={`https://covid-19.uniprot.org/uniprotkb/${uniprot}`}>
                    {uniprot}
                  </Link>
                </div>
              </>
            )
        }
        <div className="report__header-field">Localization</div>
        {
          expressedInVirus
            ? (
              <div className="report__header-localization">
                <span>cell -</span>
                {' '}
                <span>{cellLocalizations}</span>
                ,
                {' '}
                <span>virus -</span>
                {' '}
                <span>{localization.virus.join(', ')}</span>
              </div>
            )
            : <div>{cellLocalizations}</div>
        }
        <div className="report__header-field">Description</div>
        <div>{`${description} Description from UniProt.` || '-'}</div>
      </div>
    </Hero>
  );
};

Header.propTypes = {
  description: PropTypes.string.isRequired,
  gene: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  localization: PropTypes.shape({
    cell: PropTypes.arrayOf(PropTypes.string),
    virus: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  name: PropTypes.string.isRequired,
  uniprot: PropTypes.string.isRequired,
};

export default Header;
