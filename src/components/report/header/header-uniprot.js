import PropTypes from 'prop-types';
import React from 'react';

import Link from '../../link/link';

const HeaderUniprot = ({
  uniprot,
}) => (
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
);

HeaderUniprot.propTypes = {
  uniprot: PropTypes.string.isRequired,
};

export default HeaderUniprot;
