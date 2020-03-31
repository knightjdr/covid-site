import PropTypes from 'prop-types';
import React from 'react';

import Report from './report';

import copyToClipboard from '../../utils/copy-to-clipboard';

const ReportContainer = ({
  gene,
  orfName,
  proteinSequence,
  uniprot,
}) => {
  const copyProteinToClipboard = () => {
    copyToClipboard(proteinSequence);
  };

  return (
    <Report
      copyProteinToClipboard={copyProteinToClipboard}
      gene={gene}
      orfName={orfName}
      proteinSequence={proteinSequence}
      uniprot={uniprot}
    />
  );
};

ReportContainer.propTypes = {
  gene: PropTypes.string.isRequired,
  orfName: PropTypes.string.isRequired,
  proteinSequence: PropTypes.string.isRequired,
  uniprot: PropTypes.string.isRequired,
};

export default ReportContainer;
