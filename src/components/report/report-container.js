import PropTypes from 'prop-types';
import React from 'react';

import Report from './report';

import copyToClipboard from '../../utils/copy-to-clipboard';

const ReportContainer = ({
  conditions,
  description,
  gene,
  id,
  name,
  preys,
  sequence,
  uniprot,
}) => {
  const copyProteinToClipboard = () => {
    copyToClipboard(sequence);
  };

  return (
    <Report
      conditions={conditions}
      copyProteinToClipboard={copyProteinToClipboard}
      description={description}
      gene={gene}
      id={id}
      name={name}
      preys={preys}
      sequence={sequence}
      uniprot={uniprot}
    />
  );
};

ReportContainer.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  gene: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  preys: PropTypes.shape({}).isRequired,
  sequence: PropTypes.string.isRequired,
  uniprot: PropTypes.shape({
    covid: PropTypes.string,
    sars: PropTypes.string,
  }).isRequired,
};

export default ReportContainer;
