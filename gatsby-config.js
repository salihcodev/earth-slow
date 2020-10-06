//#########: CONFIGURATION :#########//
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
            sourceMap: true, // false
          },
        },
      },
    }, // sass
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
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
      resolve: 'gatsby-plugin-transition-link',
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
