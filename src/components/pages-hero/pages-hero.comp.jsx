// BASIC:
import React from 'react';
import './pages-hero.style.sass';

// UTILITIES:
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

// COMPONENTS:
import HeaderComp from '../../components/header/header.comp';
import Searching from '../../components/searching/searching.comp';

// COMPONENT:=>
const PagesHero = ({ img, className, children, home }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {/* HEADER = NAVBAR */}
      <HeaderComp />
      <section className="hero-contents">{children}</section>
      {home && <Searching />}
    </BackgroundImage>
  );
};

export default styled(PagesHero)`
  background: ${props =>
    props.home
      ? `linear-gradient(to top, #000006, #DC7C0155)`
      : `linear-gradient(to top, #000006, #22303666)`};
  min-height: ${props => (props.home ? `calc(100vh)` : `50vh`)};
  background-position: center;
  background-size: cover;
  display: block;
  padding: 1rem;
  opacity: 1 !important;
  overflow: visible !important;

  section.hero-contents {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;
