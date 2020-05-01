import PropTypes from 'prop-types';
import React from 'react';
import { faMinus, faPlus } from '@fortawesome/pro-solid-svg-icons';

import Button from '../../buttons/rectangular/button';
import ButtonIcon from '../../buttons/icon/button';
import Input from '../../input/input';
import Switch from '../../switch/switch';

import './options.css';

const Options = ({
  handleExport,
  handleFDRChange,
  handleLogToggle,
  handleReset,
  handleSpecChange,
  handleZoom,
  options,
}) => (
  <div className="comparison__options">
    <Input
      direction="horizontal"
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
      direction="horizontal"
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
    <div className="comparison__options-zoom">
      <span>Zoom:</span>
      <ButtonIcon
        data-delta={-1}
        icon={faPlus}
        kind="secondary"
        onClick={handleZoom}
      />
      <ButtonIcon
        data-delta={1}
        icon={faMinus}
        kind="secondary"
        onClick={handleZoom}
      />
    </div>
    <Button
      onClick={handleExport}
      kind="primary"
    >
      Export
    </Button>
    <Button
      onClick={handleReset}
      kind="warning"
    >
      Reset
    </Button>
  </div>
);

Options.propTypes = {
  handleExport: PropTypes.func.isRequired,
  handleFDRChange: PropTypes.func.isRequired,
  handleLogToggle: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleSpecChange: PropTypes.func.isRequired,
  handleZoom: PropTypes.func.isRequired,
  options: PropTypes.shape({
    count: PropTypes.number,
    fdr: PropTypes.number,
    log: PropTypes.bool,
  }).isRequired,
};

export default Options;
