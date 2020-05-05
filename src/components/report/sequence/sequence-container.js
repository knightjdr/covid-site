import PropTypes from 'prop-types';
import React from 'react';

import Sequence from './sequence';

import copyToClipboard from '../../../utils/copy-to-clipboard';

const SequenceContainer = ({ sequence }) => {
  const copyProteinToClipboard = () => {
    copyToClipboard(sequence);
  };

  return (
    <Sequence
      copyProteinToClipboard={copyProteinToClipboard}
      sequence={sequence}
    />
  );
};

SequenceContainer.propTypes = {
  sequence: PropTypes.string.isRequired,
};

export default SequenceContainer;
