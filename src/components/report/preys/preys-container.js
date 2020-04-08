import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Preys from './preys';
import validateFDR from '../../../utils/input-handlers/validate-fdr';
import validateSpec from '../../../utils/input-handlers/validate-spec';

const PreysContainer = ({
  conditions,
  id,
  preys,
}) => {
  const [fdr, setFDR] = useState(0.01);
  const [spectralCount, setSpectralCount] = useState(0);

  const handleFDRChange = (e) => {
    const [validated, value] = validateFDR(e);
    if (validated) {
      setFDR(value);
    }
  };

  const handleSpecChange = (e) => {
    const [validated, value] = validateSpec(e);
    if (validated) {
      setSpectralCount(value);
    }
  };

  return (
    <Preys
      conditions={conditions}
      fdr={fdr}
      handleFDRChange={handleFDRChange}
      handleSpecChange={handleSpecChange}
      id={id}
      preys={preys}
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
