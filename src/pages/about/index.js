import Img from 'gatsby-image';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../../components/layout/layout';
import Link from '../../components/link/link';
import SEO from '../../components/seo/seo';

import CIHR from './assets/cihr.svg';
import GC from './assets/gc.svg';
import Innovation from './assets/innovation.svg';
import LTRI from './assets/ltri.svg';
import OG from './assets/og.svg';
import Thistledown from './assets/thistledown.svg';
import UoT from './assets/uoft.svg';

import './about.css';

const AboutPage = () => {
  const query = useStaticQuery(
    graphql`
      query {
        orf: file(relativePath: { eq: "funding/orf.png" }) {
          childImageSharp {
            fixed(width: 146) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        pmcf: file(relativePath: { eq: "funding/pmcf.png" }) {
          childImageSharp {
            fixed(width: 268) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `,
  );

  return (
    <Layout>
      <SEO title="About" />
      <section className="about">
        <h1>About</h1>
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
        <h2>Credits</h2>
        <div className="about__credits">
          <p>
            <em>A549 viral BioID:</em>
            {' '}
            Payman Samavarchi-Tehrani, Hala Abdouni and Zhen-Yuan Lin, with the assistance of
            Cassandra Wong and Brett Larsen.
          </p>
        </div>
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
            {' '}
            or
            {' '}
            <Link
              to="mailto:braught@uhnres.utoronto.ca"
            >
              Brian Raught (braught@uhnres.utoronto.ca)
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
            Website and data downloads:
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
              rel="noreferrer"
              to="https://thistledown.ca"
            >
              <img
                alt="Thistledown Foundation"
                height={50}
                src={Thistledown}
                width={205}
              />
            </Link>
          </li>
          <li>
            <Link
              outline
              rel="noreferrer"
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
              rel="noreferrer"
              to="https://www.innovation.ca"
            >
              <img
                alt="Canada Foundation for Innovation"
                height={40}
                src={Innovation}
                width={172}
              />
            </Link>
          </li>
          <li>
            <Link
              outline
              rel="noreferrer"
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
              rel="noreferrer"
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
              rel="noreferrer"
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
              rel="noreferrer"
              to="https://www.ontario.ca/page/ontario-research-fund"
            >
              <Img
                alt="Ontario Research Fund"
                fixed={query.orf.childImageSharp.fixed}
                height={50}
                width={146}
              />
            </Link>
          </li>
          <li>
            <Link
              outline
              rel="noreferrer"
              to="https://thepmcf.ca"
            >
              <Img
                alt="Princess Margaret Cancer Foundation"
                fixed={query.pmcf.childImageSharp.fixed}
                height={50}
                width={268}
              />
            </Link>
          </li>
          <li>
            <Link
              outline
              rel="noreferrer"
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
};

export default AboutPage;
