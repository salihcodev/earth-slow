// BASIC:
import React from 'react';
import './pages-hero.style.sass';

// UTILITIES:
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

// COMPONENT:=>
const PagesHero = ({ img, className, children, home }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  );
};

export default styled(PagesHero)`
  background: ${props =>
    props.home ? `linear-gradient(to top, #000006, #DC7C0155)` : `none`};
  min-height: ${props => (props.home ? `calc(100vh - 80px)` : `50vh`)};
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1 !important;
`;
