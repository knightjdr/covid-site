import React from 'react';

import Layout from '../../components/layout/layout';
import Link from '../../components/link/link';
import SEO from '../../components/seo/seo';

const ResourcesPage = () => (
  <Layout>
    <SEO title="Resources" />
    <h1>Resources</h1>
    <p>
      Below you can find links to the protocols used for this project and other resources
      relevant to SARS-CoV-2 and COVID-19.
    </p>
    <h2>Protocols</h2>
    <p>Coming soon...</p>
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
  </Layout>
);

export default ResourcesPage;
