// BASIC:
import React from 'react';

// COMPONENTS:
import LayoutWrapperComp from '../components/layout/layout.comp';
import HeroBanner from '../components/hero-banner/hero-banner';
import PagesHero from '../components/pages-hero/pages-hero.comp';
import { graphql } from 'gatsby';

// GRAPHQL QUERY:
export const query = graphql`
  {
    pagesHeroImg: file(relativePath: { eq: "toursBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

// PAGE COMPONENT:=>
const ToursPage = ({
  data: {
    pagesHeroImg: {
      childImageSharp: { fluid },
    },
  },
}) => (
  <LayoutWrapperComp>
    <PagesHero home={false} img={fluid}>
      <HeroBanner
        heading={'Our various tours'}
        hCl={'#223036'}
        text={'Go ahead and checkout which type of adventure we made.'}
        Tcl={'#223036'}
        btnVal={'purchase a tour'.toUpperCase()}
        btnCl={'#223036'}
        btnBg={'#ddd'}
      />
    </PagesHero>

    {/* bootstrap container */}
    <div className="container">ToursPage</div>
  </LayoutWrapperComp>
);

export default ToursPage;
