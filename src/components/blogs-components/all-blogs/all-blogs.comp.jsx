// BASIC:
import React from 'react';
import './all-blogs.style.sass';

// COMPONENTS:
import JokerTitle from '../../joker-title/joker-title.comp';
import BlogTemplate from '../../blog-template/blog-template.comp';

// UTILITIES:
import { useStaticQuery, graphql } from 'gatsby';

// COMPONENT QUERY:
const AllBlogsQuery = graphql`
  query {
    allBlogs: allContentfulEarthSlowBogs {
      edges {
        node {
          contentful_id
          createdAt(formatString: "d MMMM YYYY")
          slug
          name
          blogHeader {
            blogHeader
          }
        }
      }
    }
  }
`;

// COMPONENT:=>
const AllBlogs = () => {
  const blogsResponse = useStaticQuery(AllBlogsQuery);
  const {
    allBlogs: { edges },
  } = blogsResponse;
  console.log(edges);
  return (
    <section className="all-blogs">
      <JokerTitle text={'all'} subText={'blogs'} /> {/* title */}
      {/* blogs container */}
      <div className="blogs-container row">
        {edges.map(({ node }) => (
          <BlogTemplate key={node.contentful_id} blog={node} />
        ))}
      </div>
    </section>
  );
};

export default AllBlogs;
