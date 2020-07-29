import React from 'react';

const NetworkInstructions = () => (
  <p className="display__instructions">
    <span className="display__instructions-desktop">
      Use the mouse to zoom and pan on the network. Click a node to highlight its
      interaction partners.
    </span>
    <span className="display__instructions-touch">
      Pinch to zoom or tap and drag to move the network. Tap a node to highlight its
      interaction partners.
    </span>
  </p>
);

export default NetworkInstructions;
