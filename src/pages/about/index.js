import React from 'react';

import Layout from '../../components/layout/layout';
import Link from '../../components/link/link';
import SEO from '../../components/seo/seo';

import './about.css';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <section className="about">
      <h1>About</h1>
      <p>
        The laboratories of Drs.
        {' '}
        <Link to="https://gingraslab.lunenfeld.ca">
          Anne-Claude Gingras
        </Link>
        {' '}
        and
        {' '}
        <Link to="http://www.raughtlab.ca">
          Brian Raught
        </Link>
        {' '}
        aim to identify the human proteins interacting with the COVID-19
        viral proteome using the proximity labelling technique BioID. This website
        is a repository for that data and the major insights gleaned from it.
      </p>
      <h2>Contact</h2>
      <ul>
        <li>
          General inquiries:
          {' '}
          <Link
            to="mailto:gingras@lunenfeld.ca"
          >
            Anne-Claude Gingras (gingras@lunenfeld.ca)
          </Link>
        </li>
        <li>
          Reagent requests:
          {' '}
          <Link
            to="mailto:habdouni@lunenfeld.ca"
          >
            Hala Abdouni (habdouni@lunenfeld.ca)
          </Link>
        </li>
        <li>
          Website and data analysis:
          {' '}
          <Link
            to="mailto:jknight@lunenfeld.ca"
          >
            James Knight (jknight@lunenfeld.ca)
          </Link>
        </li>
      </ul>
      <h2>Funding</h2>
      <p>
        Funding for this project was provided by: (coming soon...)
      </p>
    </section>
  </Layout>
);

export default AboutPage;
