import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';

import Browse from '../components/display/browse/browse-container';
import Localization from '../components/display/localization/localization-container';

import '../components/display/display.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>COVID-19 interactome</h1>
    <p>
      BioID-based interactome of the COVID-19 proteome
    </p>
    <Browse />
    <Localization />
  </Layout>
);

export default IndexPage;
