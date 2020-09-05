import React from 'react';

import Link from '../link/link';

const Citation = () => (
  <>
    <h2 id="citation">Citation</h2>
    <p>
      If you use data from this project please cite:
      {' '}
      <Link to="https://www.biorxiv.org/content/10.1101/2020.09.03.282103v1">
        Samavarchi-Tehrani, et. al., A SARS-CoV-2-host proximity interactome
      </Link>
      .
    </p>
  </>
);

export default Citation;
