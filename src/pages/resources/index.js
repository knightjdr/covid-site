import React from 'react';

import Layout from '../../components/layout/layout';
import Link from '../../components/link/link';
import SEO from '../../components/seo/seo';

const ResourcesPage = () => (
  <Layout>
    <SEO title="Resources" />
    <h1>Resources</h1>
    <p>
      Below you can find links to databases and other websites relevant to COVID-19.
    </p>
    <h2>Databases</h2>
    <ul>
      <li>
        <Link to="https://www.covid19cellatlas.org">COVID-19 Cell Atlas (www.covid19cellatlas.org)</Link>
      </li>
      <li>
        <Link to="https://www.covid19dataportal.org">EMBL-EBI Data Portal (www.covid19dataportal.org)</Link>
      </li>
      <li>
        <Link to="https://covid-19.uniprot.org">
          UniProtKB data for SARS-CoV-2 and related entries (covid-19.uniprot.org)
        </Link>
      </li>
    </ul>
  </Layout>
);

export default ResourcesPage;
