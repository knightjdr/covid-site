import React from 'react';

import Hero from '../components/layout/background/hero';
import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';

import Browse from '../components/display/browse/browse-container';
import Localization from '../components/display/localization/localization-container';

import '../components/display/display.css';
import './index.css';

const IndexPage = () => (
  <Layout margin={false}>
    <SEO title="Home" />
    <Hero
      className="home__landing"
      Tag="section"
    >
      <div className="home__landing-inner">
        <h1>COVID-19 interactome</h1>
        <p className="home__landing-description">
          BioID-based interactome of the SARS-CoV-2 proteome
        </p>
        <Browse />
      </div>
    </Hero>
  </Layout>
);

export default IndexPage;
