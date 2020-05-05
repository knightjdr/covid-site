import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';

function SEO({
  description,
  lang,
  meta,
  title,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultDescription: description
            defaultTitle: title
            image
            siteUrl
          }
        }
      }
    `,
  );

  const {
    defaultDescription,
    defaultTitle,
    image,
    siteUrl,
  } = site.siteMetadata;

  const seo = {
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    title: title || defaultTitle,
    url: siteUrl,
  };

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seo.title}
      titleTemplate={`%s | ${defaultTitle}`}
      meta={[
        {
          name: 'description',
          content: seo.description,
        },
        {
          property: 'og:title',
          content: seo.title,
        },
        {
          property: 'og:description',
          content: seo.description,
        },
        {
          property: 'og:image',
          content: seo.image,
        },
        {
          property: 'og:image:height',
          content: 630,
        },
        {
          property: 'og:image:width',
          content: 1200,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: seo.url,
        },
        {
          property: 'twitter:title',
          content: seo.title,
        },
        {
          property: 'twitter:description',
          content: seo.description,
        },
        {
          property: 'twitter:image',
          content: seo.image,
        },
        {
          property: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'robots',
          content: 'noindex,nofollow',
        },
      ].concat(meta)}
      link={[
        {
          href: withPrefix('/humans.txt'),
          rel: 'author',
          type: 'text/plain',
        },
      ]}
    />
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
