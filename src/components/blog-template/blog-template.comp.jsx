// BASIC:
import React from 'react';
import './blog-template.style.sass';

// COMPONENTS:

// UTILITIES:
import { Link } from 'gatsby';

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
            <Link to={`/blogs/${slug.trim()}`} className="tour-details">
              read this article
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTemplate;
