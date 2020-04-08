import PropTypes from 'prop-types';
import React from 'react';

import Input from '../../input/input';
import Switch from '../../switch/switch';

import './options.css';

const Options = ({
  handleFDRChange,
  handleLogToggle,
  handleSpecChange,
  options,
}) => (
  <div className="comparison__options">
    <Input
      id="comparison_fdr_option"
      label="FDR:"
      max={1}
      min={0}
      onChange={handleFDRChange}
      step={0.01}
      type="number"
      value={options.fdr}
    />
    <Input
      id="comparison_spec_option"
      label="Spectral count:"
      min={0}
      onChange={handleSpecChange}
      step={1}
      type="number"
      value={options.count}
    />
    <Switch
      checked={options.log}
      id="comparison_log_option"
      label="Log axes:"
      onChange={handleLogToggle}
      type="checkbox"
    />
  </div>
);

Options.propTypes = {
  handleFDRChange: PropTypes.func.isRequired,
  handleLogToggle: PropTypes.func.isRequired,
  handleSpecChange: PropTypes.func.isRequired,
  options: PropTypes.shape({
    count: PropTypes.number,
    fdr: PropTypes.number,
    log: PropTypes.bool,
  }).isRequired,
};

export default Options;
