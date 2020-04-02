import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>COVID-19 interactome</h1>
    <p>
      BioID-based interactome of the COVID-19 proteome
    </p>
    <ul>
      <li><Link to="/NSP1">NSP1</Link></li>
      <li><Link to="/ORF7A-protein">ORF7A protein</Link></li>
    </ul>
  </Layout>
);

export default IndexPage;
