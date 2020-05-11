import React from 'react';

import Layout from '../../components/layout/layout';
import Link from '../../components/link/link';
import SEO from '../../components/seo/seo';

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
      <Link
        rel="noreferrer"
        to="https://nbcc.lunenfeld.ca/resources"
      >
        Network Biology Collaborative Centre
      </Link>
      .
    </p>
    <h2>Tools</h2>
    <ul>
      <li>
        <Link rel="noreferrer" to="https://gene-info.org">
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
        <Link rel="noreferrer" to="https://www.covid19cellatlas.org">
          COVID-19 Cell Atlas (www.covid19cellatlas.org)
        </Link>
      </li>
      <li>
        <Link rel="noreferrer" to="https://www.covid19dataportal.org">
          EMBL-EBI COVID-19 Data Portal (www.covid19dataportal.org)
        </Link>
      </li>
      <li>
        <Link rel="noreferrer" to="https://covid-19.uniprot.org">
          UniProtKB data for SARS-CoV-2 and related entries (covid-19.uniprot.org)
        </Link>
      </li>
      <li>
        <Link rel="noreferrer" to="https://viralzone.expasy.org/8996">
          ViralZone SARS-CoV-2 resources (viralzone.expasy.org/8996)
        </Link>
      </li>
    </ul>
  </Layout>
);

export default ResourcesPage;
