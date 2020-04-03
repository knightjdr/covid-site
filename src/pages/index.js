import React from 'react';

import Layout from '../components/layout';
import Link from '../components/link/link';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>COVID-19 interactome</h1>
    <p>
      BioID-based interactome of the COVID-19 proteome
    </p>
    <ul>
      <li><Link to="/NSP1" nav>NSP1</Link></li>
      <li><Link to="/ORF7A-protein" nav>ORF7A protein</Link></li>
    </ul>
  </Layout>
);

export default IndexPage;
