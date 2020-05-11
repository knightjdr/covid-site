import React from 'react';

import Contact from '../../components/about/contact';
import Credits from '../../components/about/credits';
import Funding from '../../components/about/funding';
import Layout from '../../components/layout/layout';
import Link from '../../components/link/link';
import SEO from '../../components/seo/seo';

import './about.css';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <section className="about">
      <h1>About</h1>
      <ul className="about__links">
        <li>
          <Link
            nav
            to="/about/#credits"
          >
            Credits
          </Link>
        </li>
        <li>
          <Link
            nav
            to="/about/#contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            nav
            to="/about/#funding"
          >
            Funding
          </Link>
        </li>
      </ul>
      <p>
        The laboratories of Drs.
        {' '}
        <Link rel="noreferrer" to="https://gingraslab.lunenfeld.ca">
          Anne-Claude Gingras
        </Link>
        {' '}
        and
        {' '}
        <Link rel="noreferrer" to="http://www.raughtlab.ca">
          Brian Raught
        </Link>
        {' '}
        aim to identify the human proteins interacting with the SARS-CoV-2 proteome
        using the proximity labelling technique BioID. This website is a repository
        for that data.
      </p>
      <p>
        This is part of a larger project to map the functional interactome enabled by
        the synthesis of SARS-CoV-2 ORFs by
        {' '}
        <Link rel="noreferrer" to="http://llama.mshri.on.ca">
          Fritz Roth
        </Link>
        ,
        {' '}
        <Link rel="noreferrer" to="https://research.pasteur.fr/en/team/group-yves-jacob">
          Yves Jacob
        </Link>
        {' '}
        and
        {' '}
        <Link rel="noreferrer" to="http://www.raughtlab.ca">
          Brian Raught
        </Link>
        {' '}
        &#40;
        <Link to="https://www.preprints.org/manuscript/202004.0009/v2">
          A Flexible Genome-Scale Resource of SARS-CoV-2 Coding Sequence Clones
        </Link>
        &#41;
        .
      </p>
      <Credits />
      <Contact />
      <Funding />
    </section>
  </Layout>
);

export default AboutPage;
