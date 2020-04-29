import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';

import Browse from '../components/display/browse/browse-container';
import Localization from '../components/display/localization/localization-container';

import '../components/display/display.css';
import './index.css';

const IndexPage = () => {
  const query = useStaticQuery(
    graphql`
      query {
        virus: file(relativePath: { eq: "background/virus.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `,
  );

  const backgroundFluidImageStack = [
    query.virus.childImageSharp.fluid,
    'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
  ].reverse();

  return (
    <Layout margin={false}>
      <SEO title="Home" />
      <BackgroundImage
        className="home__landing"
        fluid={backgroundFluidImageStack}
        Tag="section"
      >
        <div>
          <h1>COVID-19 interactome</h1>
          <p className="home__landing-description">
            BioID-based interactome of the COVID-19 proteome
          </p>
          <Browse />
        </div>
      </BackgroundImage>
      <div className="home__display">
        <Localization />
      </div>
    </Layout>
  );
};

export default IndexPage;
