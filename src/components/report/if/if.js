import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Details from '../../details/details';

const Immunofluorescence = ({ images }) => {
  if (images) {
    const query = useStaticQuery(
      graphql`
        query {
          allFile( filter: { internal: { mediaType: { regex: "if/" } } } ) {
            edges {
              node {
                relativePath
                childImageSharp {
                  fluid(quality: 90, maxWidth: 400) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      `,
    );

    const blue = useMemo(() => (
      query.allFile.edges.find(({ node }) => images.blue.src === node.relativePath)
    ), [query, images.blue.src]);

    const green = useMemo(() => (
      query.allFile.edges.find(({ node }) => images.green.src === node.relativePath)
    ), [query, images.green.src]);

    const merge = useMemo(() => (
      query.allFile.edges.find(({ node }) => images.merge.src === node.relativePath)
    ), [query, images.merge.src]);

    const red = useMemo(() => (
      query.allFile.edges.find(({ node }) => images.red.src === node.relativePath)
    ), [query, images.red.src]);

    return (
      <Details summary="Immunofluorescence">
        <div className="report__if">
          <div className="report__if-inner">
            <figure className="report__if-image">
              <Img
                fluid={red.node.childImageSharp.fluid}
                height={400}
                src={red}
                width={400}
              />
              <figcaption>{images.red.marker}</figcaption>
            </figure>
            <figure className="report__if-image">
              <Img
                fluid={green.node.childImageSharp.fluid}
                height={400}
                src={green}
                width={400}
              />
              <figcaption>{images.green.marker}</figcaption>
            </figure>
            <figure className="report__if-image">
              <Img
                fluid={blue.node.childImageSharp.fluid}
                height={400}
                src={blue}
                width={400}
              />
              <figcaption>{images.blue.marker}</figcaption>
            </figure>
            <figure className="report__if-image">
              <Img
                fluid={merge.node.childImageSharp.fluid}
                height={400}
                src={merge}
                width={400}
              />
              <figcaption>{images.merge.marker}</figcaption>
            </figure>
          </div>
        </div>
      </Details>
    );
  }
  return null;
};

Immunofluorescence.defaultProps = {
  images: null,
};

Immunofluorescence.propTypes = {
  images: PropTypes.shape({
    blue: PropTypes.shape({
      marker: PropTypes.string,
      src: PropTypes.string,
    }),
    green: PropTypes.shape({
      marker: PropTypes.string,
      src: PropTypes.string,
    }),
    merge: PropTypes.shape({
      marker: PropTypes.string,
      src: PropTypes.string,
    }),
    red: PropTypes.shape({
      marker: PropTypes.string,
      src: PropTypes.string,
    }),
  }),
};

export default Immunofluorescence;
