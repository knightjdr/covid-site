import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Preys from './preys';
import isNumber from '../../../utils/sort/is-number';

const PreysContainer = ({
  conditions,
  id,
  preys,
}) => {
  const [fdr, setFDR] = useState(0.01);
  const [spectralCount, setSpectralCount] = useState(0);

  const handleFDRChange = (e) => {
    let value = Number(e.target.value);
    if (isNumber(value)) {
      value = Math.max(0, value);
      value = Math.min(1, value);
      setFDR(value);
    }
  };

  const handleSpecChange = (e) => {
    let value = Number(e.target.value);
    if (isNumber(value)) {
      value = Math.max(0, value);
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
