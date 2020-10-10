const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // GET THE SINGLE PAGE VIEWERS:
  const tourPageTemp = path.resolve(
    './src/templates/tour-page-template/tour.template.comp.jsx'
  );
  const blogPageTemp = path.resolve(
    './src/templates/blog-page-template/blog.template.comp.jsx'
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
      allBlogs: allContentfulEarthSlowBogs {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  // SINGLE TOUR:
  data.allTours.edges.forEach(({ node }) => {
    const slug = node.slug.trim();
    createPage({
      path: `tours/${slug}`,
      component: tourPageTemp,
      context: { slug: slug },
    });
  });
  // SINGLE BLOG OR POST:
  data.allBlogs.edges.forEach(({ node }) => {
    const slug = node.slug.trim();
    createPage({
      path: `blogs/${slug}`,
      component: blogPageTemp,
      context: { slug: slug },
    });
  });
};
