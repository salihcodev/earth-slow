// BASIC:
import React from 'react';
import './blog-template.style.sass';

// COMPONENTS:

// UTILITIES:
import AniLink from 'gatsby-plugin-transition-link/AniLink';

// COMPONENT:=>
const BlogTemplate = ({ blog }) => {
  // blog data:
  const {
    name,
    createdAt,
    slug,
    blogHeader: { blogHeader },
  } = blog;

  return (
    <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="card blog-template">
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{blogHeader}</p>
          <div className="card-footer">
            <p className="released-time">
              <code>{createdAt}</code>
            </p>
            <AniLink
              cover
              direction="left"
              duration={1}
              bg="#ddd4"
              to={`/blogs/${slug.trim()}`}
              className="tour-details"
            >
              read this article
            </AniLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTemplate;
