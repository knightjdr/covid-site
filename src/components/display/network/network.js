import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartNetwork } from '@fortawesome/pro-duotone-svg-icons';

import Button from '../../buttons/rectangular/button';

import './network.css';

const Network = forwardRef((
  {
    handleReset,
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
      <p className="display__legend">
        paragraph
      </p>
      <p className="display__instructions">Instructions</p>
      <div
        className="network__cytoscape-container"
        ref={ref}
      />
      <div className="network__buttons">
        <Button
          kind="primary"
          onClick={handleReset}
        >
          Reset
        </Button>
      </div>
    </div>
  </section>
));

Network.propTypes = {
  handleReset: PropTypes.func.isRequired,
};

export default Network;
