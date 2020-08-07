import PropTypes from 'prop-types';
import React from 'react';

import Description from './description/description-container';

const HeaderDescription = ({
  description,
}) => {
  if (description.custom && description.uniprot) {
    return null;
  }

  return (
    <>
      <Description
        description={description.custom}
        field="Author insights"
      />
      <Description
        description={description.uniprot ? `${description.uniprot} (From UniProt)` : ''}
        field="Description"
      />
    </>
  );
};

HeaderDescription.propTypes = {
  description: PropTypes.shape({
    custom: PropTypes.string,
    uniprot: PropTypes.string,
  }).isRequired,
};

export default HeaderDescription;
