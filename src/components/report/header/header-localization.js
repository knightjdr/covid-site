import PropTypes from 'prop-types';
import React from 'react';

const HeaderLocalization = ({
  localization,
}) => {
  const cellLocalizations = localization.cellSpecific?.length > 0 ? localization.cellSpecific.join(', ') : 'unknown';
  const expressedInVirus = localization.virus?.length > 0;
  return expressedInVirus
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
    : <div>{cellLocalizations}</div>;
};

HeaderLocalization.propTypes = {
  localization: PropTypes.shape({
    cellSpecific: PropTypes.arrayOf(PropTypes.string),
    virus: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default HeaderLocalization;
