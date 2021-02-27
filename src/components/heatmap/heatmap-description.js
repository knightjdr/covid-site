/* eslint-disable max-len */
import React from 'react';

import Link from '../link/link';

const HeatmapDescription = () => (
  <p>
    Clustered heat map of spectral counts for all significant preys (FDR &le; 0.01) detected by viral
    baits. An interactive version of this image can be viewed at
    {' '}
    <Link to="https://prohits-viz.lunenfeld.ca/Interactive/index.html?input_tsv=archive/1596136776_GOUYUlT0me.txt&tool=Interactive">
      ProHits-viz
    </Link>
    .
  </p>
);

export default HeatmapDescription;
