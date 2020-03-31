import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>COVID-19 interactome</h1>
    <p>
      BioID-based interactome of the COVID-19 proteome
    </p>
  </Layout>
);

export default IndexPage;
