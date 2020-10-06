// BASIC:
import React from 'react';

// COMPONENTS:
import LayoutWrapperComp from '../components/layout/layout.comp';
import ContactForm from '../components/contact-form/contact-form.comp';
import HeroBanner from '../components/hero-banner/hero-banner';
import PagesHero from '../components/pages-hero/pages-hero.comp';
import { graphql } from 'gatsby';

// GRAPHQL QUERY:
export const query = graphql`
  {
    pagesHeroImg: file(relativePath: { eq: "contactBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
// PAGE COMPONENT:=>
const ContactPage = ({
  data: {
    pagesHeroImg: {
      childImageSharp: { fluid },
    },
  },
}) => (
  <LayoutWrapperComp>
    <PagesHero home={false} img={fluid}>
      <HeroBanner
        heading={'Keep in touch with us.'}
        hCl={'#ddd'}
        text={'We are available 24/h'}
        Tcl={'#ddd'}
        btnVal={'mail us'.toUpperCase()}
        btnCl={'#223036'}
        btnBg={'#ddd'}
      />
    </PagesHero>

    {/* bootstrap container */}
    <div className="container">
      <ContactForm />
    </div>
  </LayoutWrapperComp>
);

export default ContactPage;
