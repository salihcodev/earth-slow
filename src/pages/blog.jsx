// BASIC:
import React from 'react';

// COMPONENTS:
import LayoutWrapperComp from '../components/layout/layout.comp';
import HeroBanner from '../components/hero-banner/hero-banner';
import PagesHero from '../components/pages-hero/pages-hero.comp';
import AllBlogs from '../components/blogs-components/all-blogs/all-blogs.comp';
import { graphql } from 'gatsby';

// GRAPHQL QUERY:
export const query = graphql`
  {
    pagesHeroImg: file(relativePath: { eq: "blogBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

// PAGE COMPONENT:=>
// document.title = `Earth Slow | Blog`;
const BlogPage = ({
  data: {
    pagesHeroImg: {
      childImageSharp: { fluid },
    },
  },
}) => (
  <LayoutWrapperComp>
    <PagesHero home={false} img={fluid}>
      <HeroBanner
        heading={'Know more about our services.'}
        hCl={'#ddd'}
        text={'We have a teams that are writing a monthly blog post.'}
        Tcl={'#ddd'}
        btnVal={'read featured blogs'.toUpperCase()}
        btnCl={'#223036'}
        btnBg={'#ddd'}
      />
    </PagesHero>

    {/* bootstrap container */}
    <div className="container">
      <AllBlogs />
    </div>
  </LayoutWrapperComp>
);

export default BlogPage;
