import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import { nanoid } from 'nanoid';
import { useStaticQuery, graphql } from 'gatsby';

import Details from '../../details/details';

import './if.css';

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

    return (
      <Details summary="Immunofluorescence">
        <div className="report__if">
          {
            images.map((image, index) => {
              const blue = query.allFile.edges.find(({ node }) => image.blue.src === node.relativePath);
              const green = query.allFile.edges.find(({ node }) => image.green.src === node.relativePath);
              const merge = query.allFile.edges.find(({ node }) => image.merge.src === node.relativePath);
              const red = query.allFile.edges.find(({ node }) => image.red.src === node.relativePath);

              return (
                <div
                  className="report__if-inner"
                  key={nanoid(10)}
                >
                  <figure className="report__if-image">
                    <Img
                      alt={`Image ${index + 1} red channel`}
                      fluid={red.node.childImageSharp.fluid}
                      height={400}
                      width={400}
                    />
                    <figcaption>{image.red.marker}</figcaption>
                  </figure>
                  <figure className="report__if-image">
                    <Img
                      alt={`Image ${index + 1} green channel`}
                      fluid={green.node.childImageSharp.fluid}
                      height={400}
                      width={400}
                    />
                    <figcaption>{image.green.marker}</figcaption>
                  </figure>
                  <figure className="report__if-image">
                    <Img
                      alt={`Image ${index + 1} blue channel`}
                      fluid={blue.node.childImageSharp.fluid}
                      height={400}
                      width={400}
                    />
                    <figcaption>{image.blue.marker}</figcaption>
                  </figure>
                  <figure className="report__if-image">
                    <Img
                      alt={`Image ${index + 1} merge channel`}
                      fluid={merge.node.childImageSharp.fluid}
                      height={400}
                      width={400}
                    />
                    <figcaption>{image.merge.marker}</figcaption>
                  </figure>
                </div>
              );
            })
          }
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
  images: PropTypes.arrayOf(
    PropTypes.shape({
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
  ),
};

export default Immunofluorescence;
