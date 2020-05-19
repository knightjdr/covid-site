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
        Proximity-dependent biotinylation approaches such as BioID identify proteins that
        are located in the neighborhood of a bait protein of interest directly in living cells,
        and are ideally-suited for detecting associations of proteins localized to membranous
        cellular compartments (see our recent reviews
        {' '}
        <Link to="https://www.sciencedirect.com/science/article/abs/pii/S1367593118301327?via%3Dihub">
          Getting to know the neighborhood: using proximity-dependent biotinylation to characterize
          protein complexes and map organelles
        </Link>
        {' '}
        and
        {' '}
        <Link to="https://www.mcponline.org/content/19/5/757.long">
          Proximity Dependent Biotinylation: Key Enzymes and Adaptation to Proteomics Approaches
        </Link>
        ). Here, we performed BioID on each of the SARS-CoV-2 proteins tagged at either the
        amino or carboxy-terminus in cultivated human cells (A549 lung adenocarcinomas).
        Additional cell types and condition-specific proximity interactions (e.g. after viral
        infection) and proximity interactions for host proteins will be added to this
        website as the data are generated.
      </p>
    </div>
  </section>
);

export default Summary;
