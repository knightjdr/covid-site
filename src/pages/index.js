import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';

import ProteinNav from '../components/figures/protein-nav/protein-nav-container';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>COVID-19 interactome</h1>
    <p>
      BioID-based interactome of the COVID-19 proteome
    </p>
    <ProteinNav />
  </Layout>
);

export default IndexPage;
