import PropTypes from 'prop-types';
import React from 'react';

import Report from './report';

import copyToClipboard from '../../utils/copy-to-clipboard';

const ReportContainer = ({
  conditions,
  description,
  gene,
  id,
  preys,
  proteinName,
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
      id={id}
      preys={preys}
      proteinName={proteinName}
      proteinSequence={proteinSequence}
      uniprot={uniprot}
    />
  );
};

ReportContainer.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  gene: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  preys: PropTypes.shape({}).isRequired,
  proteinName: PropTypes.string.isRequired,
  proteinSequence: PropTypes.string.isRequired,
  uniprot: PropTypes.string.isRequired,
};

export default ReportContainer;
