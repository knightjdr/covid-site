import React from 'react';

import HumanCell from './assets/human-cell.svg';
import InfectedCell from './assets/infected-cell.svg';
import Virus from './assets/virus.svg';

const InteractomeGrid = () => (
  <div className="interactome__grid">
    <div className="interactome__grid-item interactome__human-proteome">
      <h3>Human proteome &#8776; 10K proteins</h3>
      <div className="interactome__grid-item-content">
        <img
          alt="Human cell"
          className="interactome__grid-item-image"
          height={120}
          src={HumanCell}
          width={120}
        />
        <p>
          The A549 proteome has not been precisely defined, but typical cellular
          proteomes consit of approximately ten-thousand proteins.
        </p>
      </div>
    </div>
    <div className="interactome__grid-item interactome__viral-proteome">
      <h3>Viral proteome = 29 proteins</h3>
      <div className="interactome__grid-item-content">
        <img
          alt="Virus"
          className="interactome__grid-item-image"
          height={120}
          src={Virus}
          width={120}
        />
        <p>
          The SARS-Cov-2 genome encodes twenty-nine known proteins, twenty-seven of which
          were profiled in this study.
        </p>
      </div>
    </div>
    <div className="interactome__grid-item interactome__proximity-interactome">
      <h3>Proximity interactome = 2 242 proteins </h3>
      <div className="interactome__grid-item-content">
        <img
          alt="Cell infected with SARS-CoV-2"
          className="interactome__grid-item-image"
          height={120}
          src={InfectedCell}
          width={120}
        />
        <p>
          We detected over 20% of the estimated A549 proteome to be in proximity to
          at least one of the viral proteins we expressed. The N protein had only six
          proximity interactions while M had 938 or ~10% of the cellular proteome.
        </p>
      </div>
    </div>
  </div>
);

export default InteractomeGrid;
