import React from 'react';

import Hero from '../components/layout/background/hero';
import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';

import Browse from '../components/display/browse/browse-container';
import Display from '../components/display/display';

import '../components/display/display.css';
import './index.css';

const IndexPage = () => (
  <Layout margin={false}>
    <SEO title="Home" />
    <Hero
      className="home__landing"
      Tag="section"
    >
      <div>
        <h1>COVID-19 interactome</h1>
        <p className="home__landing-description">
          BioID-based interactome of the SARS-CoV-2 proteome
        </p>
        <Browse />
      </div>
    </Hero>
    <Display />
  </Layout>
);

export default IndexPage;
