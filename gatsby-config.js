module.exports = {
  siteMetadata: {
    title: `Netlify Function Golang Tutorial`,
    description: `Demo GatsbyJS site which deploys Golang Lambda functions with Netlify.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        backgroundColor: `#ecf1f9`,
        themeColor: `#0297f6`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
