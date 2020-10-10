// BASIC:
import React from 'react';
import './blog.template.style.sass';

// UTILITIES:
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// COMPONENTS:
import LayoutWrapperComp from '../../components/layout/layout.comp';

// PAGE COMPONENT:=>
const BlogTemplate = ({ data: { singleBlog } }) => {
  // extract contentful data
  const {
    name,
    blogBody: { json },
  } = singleBlog;

  return (
    <LayoutWrapperComp>
      <article className="blog-wrapper container">
        <section className="blog-header">HEADER</section>
        <h2>({name})</h2>
        <section className="blog-body">
          {documentToReactComponents(json)}
        </section>
      </article>
    </LayoutWrapperComp>
  );
};

export default BlogTemplate;

// PAGE QUERY:
export const query = graphql`
  query($slug: String!) {
    singleBlog: contentfulEarthSlowBogs(slug: { eq: $slug }) {
      name
      slug
      createdAt
      blogHeader {
        blogHeader
      }
      blogBody {
        json
      }
    }
  }
`;
