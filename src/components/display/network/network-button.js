import PropTypes from 'prop-types';
import React from 'react';
import { faMinus, faPlus } from '@fortawesome/pro-solid-svg-icons';

import Button from '../../buttons/rectangular/button';
import ButtonIcon from '../../buttons/icon/button';

const NetworkButtons = ({
  handleClear,
  handleReset,
  handleZoomIn,
  handleZoomOut,
  isLoading,
}) => (
  <div
    className="network__buttons"
    style={{ visibility: isLoading ? 'hidden' : 'visible' }}
  >
    <ButtonIcon
      ariaLabel="Zoom in"
      icon={faPlus}
      kind="primary"
      onClick={handleZoomIn}
    />
    <ButtonIcon
      ariaLabel="Zoom out"
      icon={faMinus}
      kind="primary"
      onClick={handleZoomOut}
    />
    <Button
      kind="primary"
      onClick={handleClear}
    >
      Clear
    </Button>
    <Button
      kind="warning"
      onClick={handleReset}
    >
      Reset
    </Button>
  </div>
);

NetworkButtons.propTypes = {
  handleClear: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleZoomIn: PropTypes.func.isRequired,
  handleZoomOut: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default NetworkButtons;
