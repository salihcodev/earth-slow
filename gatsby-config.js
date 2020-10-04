//#########: CONFIGURATION :#########//
module.exports = {
  /*** PLUGINS ***/
  plugins: [
    // sass:
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: {
          options: {
            sourceMap: true, // false
          },
        },
      },
    }, // sass
  ],
}
