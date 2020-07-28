import React from 'react';

import Localization from './localization/localization-container';
import Genome from './genome/genome-container';
import Network from './network/network-container';
import Summary from './summary/summary';

const Display = () => (
  <div>
    <Summary />
    <Genome />
    <Localization />
    <Network />
  </div>
);

Display.propTypes = {};

export default Display;
