module.exports = {
  siteMetadata: {
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
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/virus.png',
      },
    },
  ],
};
