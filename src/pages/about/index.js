import React from 'react';

import Layout from '../../components/layout/layout';
import Link from '../../components/link/link';
import SEO from '../../components/seo/seo';

import CIHR from './assets/cihr.svg';
import GC from './assets/gc.svg';
import LTRI from './assets/ltri.svg';
import OG from './assets/og.svg';
import ORF from './assets/orf.png';
import ORF2x from './assets/orf2x.png';
import ORF3x from './assets/orf3x.png';
import UoT from './assets/uoft.svg';

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
        ,
        {' '}
        <Link to="http://www.raughtlab.ca">
          Brian Raught
        </Link>
        {' '}
        and
        {' '}
        <Link to="http://llama.mshri.on.ca">
          Fritz Roth
        </Link>
        {' '}
        aim to identify the human proteins interacting with the SARS-CoV-2 proteome
        using the proximity labelling technique BioID. This website is a repository
        for that data.
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
        Funding for this project was provided by:
      </p>
      <ul className="about__funding-list">
        <li>
          <Link
            outline
            to="https://www.cihr-irsc.gc.ca"
          >
            <img
              alt="Canadian Institutes of Health Research"
              height={50}
              src={CIHR}
              width={80}
            />
          </Link>
        </li>
        <li>
          <Link
            outline
            to="https://www.genomecanada.ca"
          >
            <img
              alt="Genome Canada"
              height={50}
              src={GC}
              width={83}
            />
          </Link>
        </li>
        <li>
          <Link
            outline
            to="http://www.lunenfeld.ca"
          >
            <img
              alt="Lunenfeld-Tanenbaum Research Institute"
              height={50}
              src={LTRI}
              width={318}
            />
          </Link>
        </li>
        <li>
          <Link
            outline
            to="http://www.ontariogenomics.ca"
          >
            <img
              alt="Ontario Genomics"
              height={50}
              src={OG}
              width={116}
            />
          </Link>
        </li>
        <li>
          <Link
            outline
            to="https://www.ontario.ca/page/ontario-research-fund"
          >
            <img
              alt="Ontario Research Fund"
              height={50}
              src={ORF}
              srcSet={`
                ${ORF} 1x,
                ${ORF2x} 2x,
                ${ORF3x} 3x
              `}
              width={146}
            />
          </Link>
        </li>
        <li>
          <Link
            outline
            to="https://www.utoronto.ca"
          >
            <img
              alt="University of Toronto"
              height={50}
              src={UoT}
              width={141}
            />
          </Link>
        </li>
      </ul>
    </section>
  </Layout>
);

export default AboutPage;
