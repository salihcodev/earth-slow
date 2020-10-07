//#########: CONFIGURATION :#########//
// get .env
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  /*** SITE METADATA ***/
  siteMetadata: {
    title: `Earth slow`,
    description: `Earth Slow is a travelling agency that 's provide cheap travelling plans around the world.`,
    author: `@salihcodev`,
  },

  /*** PLUGINS ***/
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        useResolveUrlLoader: {
          options: {
            sourceMap: true,
          },
        },
      },
    }, // sass
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    }, // gatsby-styled-component
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    }, // source filesystem
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    }, // contentful
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
