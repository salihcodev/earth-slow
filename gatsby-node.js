const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const tourPageTemp = path.resolve(
    './src/templates/tour-page-template/tour.template.comp.jsx'
  );

  const { data } = await graphql(`
    query {
      allTours: allContentfulEarthSlowTours {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  data.allTours.edges.forEach(({ node }) => {
    const slug = node.slug.trim();
    createPage({
      path: `tours/${slug}`,
      component: tourPageTemp,
      context: { slug: slug },
    });
  });
};
