module.exports = {
  siteMetadata: {
    description: 'BioID-based interactome of the COVID-19 proteome.',
    image: '/thumbnail.png',
    siteUrl: 'https://covid19interactome.org',
    title: 'COVID-19 interactome',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-use-query-params',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
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
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'dark-mode',
        classNameLight: 'light-mode',
        storageKey: 'darkMode',
        minify: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://covid19interactome.org',
        sitemap: 'https://covid19interactome.org/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};
