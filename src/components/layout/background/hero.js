import BackgroundImage from 'gatsby-background-image';
import PropTypes from 'prop-types';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Hero = ({
  children,
  ...props
}) => {
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
    <BackgroundImage
      fluid={backgroundFluidImageStack}
      {...props}
    >
      {children}
    </BackgroundImage>
  );
};

Hero.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Hero;
