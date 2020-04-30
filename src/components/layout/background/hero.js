import BackgroundImage from 'gatsby-background-image';
import PropTypes from 'prop-types';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Hero = ({
  children,
  image,
  ...props
}) => {
  const query = useStaticQuery(
    graphql`
      query {
        image1: file(relativePath: { eq: "background/virus.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image2: file(relativePath: { eq: "background/virus-2.jpg" }) {
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
    query[image].childImageSharp.fluid,
    'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
  ].reverse();

  return (
    <BackgroundImage
      fluid={backgroundFluidImageStack}
      {...props}
    >
      {children}
    </BackgroundImage>
  );
};

Hero.defaultProps = {
  image: 'image1',
};

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string,
};

export default Hero;
