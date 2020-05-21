import PropTypes from 'prop-types';
import React from 'react';
import { faMinus, faPlus } from '@fortawesome/pro-solid-svg-icons';

import Button from '../../../buttons/rectangular/button';
import ButtonIcon from '../../../buttons/icon/button';
import Input from '../../../input/input';
import Switch from '../../../switch/switch';

import './options.css';

const Options = ({
  handleCountChange,
  handleExport,
  handleFDRChange,
  handleLogToggle,
  handleMidlineToggle,
  handleReset,
  handleSpecificityChange,
  handleZoom,
  id,
  options,
}) => (
  <div className="comparison__options">
    <h4>Options</h4>
    <Input
      direction="horizontal"
      id={`${id}_fdr_option`}
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
      id={`${id}_count_option`}
      label="Spectral count:"
      min={0}
      onChange={handleCountChange}
      step={1}
      type="number"
      value={options.count}
    />
    <Input
      direction="horizontal"
      id={`${id}_specificity_option`}
      label="Specificity:"
      min={0}
      onChange={handleSpecificityChange}
      step={1}
      type="number"
      value={options.count}
    />
    <Switch
      checked={options.log}
      id={`${id}_log_option`}
      label="Log axes:"
      onChange={handleLogToggle}
      type="checkbox"
    />
    <Switch
      checked={options.midline}
      id={`${id}_midline_option`}
      label="x = y line:"
      onChange={handleMidlineToggle}
      type="checkbox"
    />
    <div className="comparison__options-zoom">
      <span>Zoom:</span>
      <ButtonIcon
        ariaLabel="zoom in"
        data-delta={-1}
        icon={faPlus}
        kind="secondary"
        onClick={handleZoom}
      />
      <ButtonIcon
        ariaLabel="zoom out"
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
  handleCountChange: PropTypes.func.isRequired,
  handleExport: PropTypes.func.isRequired,
  handleFDRChange: PropTypes.func.isRequired,
  handleLogToggle: PropTypes.func.isRequired,
  handleMidlineToggle: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleSpecificityChange: PropTypes.func.isRequired,
  handleZoom: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.shape({
    count: PropTypes.number,
    fdr: PropTypes.number,
    log: PropTypes.bool,
    midline: PropTypes.bool,
  }).isRequired,
};

export default Options;
