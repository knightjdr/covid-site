import PropTypes from 'prop-types';
import React from 'react';

import Report from './report';

import copyToClipboard from '../../utils/copy-to-clipboard';

const ReportContainer = ({
  conditions,
  description,
  gene,
  orfName,
  preys,
  proteinSequence,
  uniprot,
}) => {
  const copyProteinToClipboard = () => {
    copyToClipboard(proteinSequence);
  };

  return (
    <Report
      conditions={conditions}
      copyProteinToClipboard={copyProteinToClipboard}
      description={description}
      gene={gene}
      orfName={orfName}
      preys={preys}
      proteinSequence={proteinSequence}
      uniprot={uniprot}
    />
  );
};

ReportContainer.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  gene: PropTypes.string.isRequired,
  orfName: PropTypes.string.isRequired,
  preys: PropTypes.shape({}).isRequired,
  proteinSequence: PropTypes.string.isRequired,
  uniprot: PropTypes.string.isRequired,
};

export default ReportContainer;
