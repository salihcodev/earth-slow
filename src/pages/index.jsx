// BASIC:
import React from 'react';

// COMPONENTS:
import LayoutWrapperComp from '../components/layout/layout.comp';
import About from '../components/home-components/about/about.comp';
import HeroBanner from '../components/hero-banner/hero-banner';
import PagesHero from '../components/pages-hero/pages-hero.comp';
import FeaturedTours from '../components/home-components/featured-tours/featured-tours.comp';

// UTILITIES:
import { graphql } from 'gatsby';

// GRAPHQL QUERY:
export const query = graphql`
  {
    pagesHeroImg: file(relativePath: { eq: "defaultBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

// PAGE COMPONENT:=>
const HomePage = ({
  data: {
    pagesHeroImg: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <LayoutWrapperComp>
      <PagesHero home="true" img={fluid}>
        <HeroBanner
          heading={'Discover the world within us.'}
          hCl={'#ddd'}
          text={'We provide a trips and journeys allover the world —@slowEarth'}
          Tcl={'#ddd'}
          btnVal={'checkout our services'.toUpperCase()}
          btnCl={'#223036'}
          btnBg={'#ddd'}
        />
      </PagesHero>

      {/* bootstrap container */}
      <div className="container">
        <About /> {/* ABOUT */}
        <FeaturedTours /> {/* FEATURED TOURS */}
      </div>
    </LayoutWrapperComp>
  );
};

export default HomePage;
