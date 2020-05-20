import React from 'react';

import Layout from '../../components/layout/layout';
import Link from '../../components/link/link';
import SEO from '../../components/seo/seo';

import './resources.css';

const ResourcesPage = () => (
  <Layout>
    <SEO title="Resources" />
    <h1>Resources</h1>
    <p>
      Below you can find links to useful tools, reagents and resources relevant to SARS-CoV-2 and COVID-19.
    </p>
    <h2>Protocols</h2>
    <p>
      BioID and lentiviral protocols, as well as plasmid constructs, can be found at the
      {' '}
      <Link to="https://nbcc.lunenfeld.ca/resources">
        Network Biology Collaborative Centre
      </Link>
      .
    </p>
    <h2>Tools</h2>
    <ul>
      <li>
        <Link to="https://gene-info.org">
          GIX
        </Link>
        {' '}
        is a browser extension that retrieves gene information on any website simply
        by clicking on a gene name. You may find it helpful for quickly retrieving
        information when browsing data on this website.
      </li>
    </ul>
    <h2>Databases</h2>
    <ul>
      <li>
        <Link to="https://www.covid19cellatlas.org">
          COVID-19 Cell Atlas (www.covid19cellatlas.org)
        </Link>
      </li>
      <li>
        <Link to="https://www.covid19dataportal.org">
          EMBL-EBI COVID-19 Data Portal (www.covid19dataportal.org)
        </Link>
      </li>
      <li>
        <Link to="https://covid-19.uniprot.org">
          UniProtKB data for SARS-CoV-2 and related entries (covid-19.uniprot.org)
        </Link>
      </li>
      <li>
        <Link to="https://viralzone.expasy.org/8996">
          ViralZone SARS-CoV-2 resources (viralzone.expasy.org/8996)
        </Link>
      </li>
    </ul>
    <h2>Definitions</h2>
    <h3 id="bioid">BioID</h3>
    <p>
      BioID is a technique that identifies protein-protein interactions in living cells, and represents a
      powerful complementary approach to standard affinity purification approaches (e.g. immunoprecipitation
      combined with mass spectrometry, IP-MS), with a notably improved ability to identify transient or weak
      interactors - and PPIs that take place in/at cellular membranes and on chromatin, where key steps in
      viral replication take place. In BioID, a protein of interest is fused with an
      {' '}
      <span className="resources__bioid-species">
        E. coli
      </span>
      {' '}
      biotin conjugating enzyme mutant. The abortive mutant BirA* protein (R118G) can efficiently activate biotin,
      but exhibits a reduced affinity for the activated molecule. Highly reactive biotinoyl-AMP thus simply
      diffuses away from BirA* and forms covalent bonds with nearby amine groups - including epsilon amines
      on lysine residues in neighbouring (within ~10nm) polypeptides. Following cell lysis, these
      biotinylated proteins can be affinity purified using streptavidin and identified with MS. Since
      interactors are covalently modified with biotin, highly robust lysis conditions can be used to
      solubilize polypeptides from less soluble cellular compartments. Finally, unlike IP-based approaches,
      BioID does not require that protein-protein interactions be maintained post-lysis. Weak and/or transient
      interactors can thus also be identified with this technique.
    </p>
    <h4>References</h4>
    <ul>
      <li>
        <Link to="https://www.sciencedirect.com/science/article/abs/pii/S1367593118301327?via%3Dihub">
          Getting to know the neighborhood: using proximity-dependent biotinylation to characterize
          protein complexes and map organelles
        </Link>
      </li>
      <li>
        <Link to="https://www.mcponline.org/content/19/5/757.long">
          Proximity Dependent Biotinylation: Key Enzymes and Adaptation to Proteomics Approaches
        </Link>
      </li>
    </ul>
  </Layout>
);

export default ResourcesPage;
