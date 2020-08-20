import PropTypes from 'prop-types';
import React from 'react';

import Info from './info';

import copyToClipboard from '../../../utils/copy-to-clipboard';

const InfoContainer = ({
  id,
  sequence,
}) => {
  const copyProteinToClipboard = () => {
    copyToClipboard(sequence);
  };

  return (
    <Info
      copyProteinToClipboard={copyProteinToClipboard}
      id={id}
      sequence={sequence}
    />
  );
};

InfoContainer.propTypes = {
  id: PropTypes.string.isRequired,
  sequence: PropTypes.string.isRequired,
};

export default InfoContainer;
