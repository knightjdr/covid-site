import Img from 'gatsby-image';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Link from '../link/link';

import CIHR from './assets/cihr.svg';
import GC from './assets/gc.svg';
import Innovation from './assets/innovation.svg';
import LTRI from './assets/ltri.svg';
import OG from './assets/og.svg';
import Thistledown from './assets/thistledown.svg';
import UoT from './assets/uoft.svg';

const Funding = () => {
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
    <>
      <h2 id="funding">Funding</h2>
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
    </>
  );
};

Funding.propTypes = {};

export default Funding;
