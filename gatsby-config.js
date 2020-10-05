//#########: CONFIGURATION :#########//
module.exports = {
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
  ],
};
