import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faParagraph } from '@fortawesome/pro-duotone-svg-icons';

import Link from '../../link/link';

import './summary.css';

const Summary = () => (
  <section className="display summary">
    <div className="display__inner">
      <h2 className="display__title">
        <FontAwesomeIcon icon={faParagraph} />
        Summary
      </h2>
      <p>
        Viruses are obligate intracellular parasites, entirely dependent on host cell protein
        machinery for their replication. Characterizing how the virus that causes COVID-19,
        SARS-CoV-2, usurps host cell machinery function, while simultaneously disrupting the
        cellular antiviral response, will both: (i) dramatically improve our understanding of
        SARS-CoV-2 pathophysiology and; (ii) identify useful drug targets. The SARS-CoV-2 RNA
        genome codes for at least twenty-nine proteins. Using a technique called
        {' '}
        <Link nav to="/resources#bioid">
          BioID
        </Link>
        , we aim to
        characterize the virus-host protein-protein interactome in multiple human cell types.
      </p>
      <h3>Notes</h3>
      <p>
        Consider installing the browser extension
        {' '}
        <Link to="https://gene-info.org">
          GIX
        </Link>
        {' '}
        for retrieving human gene information anywhere on this website by double-clicking on
        its symbol or immediately next to the symbol on report tables.
      </p>
    </div>
  </section>
);

export default Summary;
