import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartNetwork } from '@fortawesome/pro-duotone-svg-icons';

import Loading from '../../loading/loading';
import NetworkButtons from './network-button';
import NetworkInstructions from './network-instructions';
import NetworkLegend from './network-legend';

import './network.css';

const Network = forwardRef((
  {
    handleClear,
    handleReset,
    handleZoomIn,
    handleZoomOut,
    isLoading,
    selectedNode,
  },
  ref,
) => (
  <section className="display network">
    <div className="display__inner">
      <h2
        className="display__title"
        id="network"
      >
        <FontAwesomeIcon icon={faChartNetwork} />
        Network
      </h2>
      <NetworkLegend />
      <NetworkInstructions />
      <div className="network__cytoscape-container">
        <div
          className="network__canvas-container"
          ref={ref}
        />
        {
          selectedNode
          && <span className="network__selected-node">{selectedNode}</span>
        }
        { isLoading && <Loading /> }
      </div>
      <NetworkButtons
        handleClear={handleClear}
        handleReset={handleReset}
        handleZoomIn={handleZoomIn}
        handleZoomOut={handleZoomOut}
        isLoading={isLoading}
      />
    </div>
  </section>
));

Network.defaultProps = {
  selectedNode: '',
};

Network.propTypes = {
  handleClear: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleZoomIn: PropTypes.func.isRequired,
  handleZoomOut: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  selectedNode: PropTypes.string,
};

export default Network;
