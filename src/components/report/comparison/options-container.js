import PropTypes from 'prop-types';
import React from 'react';

import Options from './options';
import validateFDR from '../../../utils/input-handlers/validate-fdr';
import validateSpec from '../../../utils/input-handlers/validate-spec';

const OptionsContainer = ({
  changeOption,
  options,
}) => {
  const handleFDRChange = (e) => {
    const [validated, value] = validateFDR(e);
    if (validated) {
      changeOption('fdr', value);
    }
  };

  const handleLogToggle = (e) => {
    changeOption('log', e.target.checked);
  };

  const handleSpecChange = (e) => {
    const [validated, value] = validateSpec(e);
    if (validated) {
      changeOption('count', value);
    }
  };

  return (
    <Options
      handleFDRChange={handleFDRChange}
      handleLogToggle={handleLogToggle}
      handleSpecChange={handleSpecChange}
      options={options}
    />
  );
};

OptionsContainer.propTypes = {
  changeOption: PropTypes.func.isRequired,
  options: PropTypes.shape({}).isRequired,
};

export default OptionsContainer;
