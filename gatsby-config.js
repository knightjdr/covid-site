module.exports = {
  pathPrefix: '/covid-site',
  siteMetadata: {
    siteUrl: 'https://jamesknight.dev/covid-site',
    title: 'COVID-19 interactome',
    description: 'BioID-based interactome of the COVID-19 proteome.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'COVID-19 interactome',
        short_name: 'COVID-19 interactome',
        start_url: '/',
        background_color: '#7dc383',
        theme_color: '#7dc383',
        display: 'standalone',
        icon: 'src/images/virus.png',
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://jamesknight.dev/covid-site',
        sitemap: 'https://jamesknight.dev/covid-site/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};
