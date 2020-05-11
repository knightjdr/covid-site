import React from 'react';

import Localization from './localization/localization-container';
import Sequence from './sequence/sequence-container';
import Summary from './summary/summary';

const Display = () => (
  <div>
    <Summary />
    <Sequence />
    <Localization />
  </div>
);

Display.propTypes = {};

export default Display;
