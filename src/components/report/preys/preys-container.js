import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useQueryParam, StringParam } from 'use-query-params';

import Preys from './preys';
import validateCount from '../../../utils/input-handlers/validate-count';
import validateFDR from '../../../utils/input-handlers/validate-fdr';

const PreysContainer = ({
  conditions,
  id,
  preys,
}) => {
  const [fdr, setFDR] = useState(0.01);
  const [spectralCount, setSpectralCount] = useState(0);
  const [specificity, setSpecificity] = useState(0);
  const [highlightedPrey] = useQueryParam('prey', StringParam);

  const handleCountChange = (e) => {
    const [validated, value] = validateCount(e);
    if (validated) {
      setSpectralCount(value);
    }
  };

  const handleFDRChange = (e) => {
    const [validated, value] = validateFDR(e);
    if (validated) {
      setFDR(value);
    }
  };

  const handleSpecificityChange = (e) => {
    const [validated, value] = validateCount(e);
    if (validated) {
      setSpecificity(value);
    }
  };

  return (
    <Preys
      conditions={conditions}
      fdr={fdr}
      handleCountChange={handleCountChange}
      handleFDRChange={handleFDRChange}
      handleSpecificityChange={handleSpecificityChange}
      highlightedPrey={highlightedPrey || ''}
      id={id}
      preys={preys}
      specificity={specificity}
      spectralCount={spectralCount}
    />
  );
};

PreysContainer.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  preys: PropTypes.shape({}).isRequired,
};

export default PreysContainer;
