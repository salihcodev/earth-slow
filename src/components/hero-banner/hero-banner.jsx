// BASIC:
import React from 'react';
import './hero-banner.style.sass';

// UTILITIES:
import { Link } from 'gatsby';
import JokerBtn from '../joker-btn/joker-btn';

// COMPONENT:=>
const HeroBanner = ({ heading, hCl, text, Tcl, btnVal, btnCl, btnBg }) => (
  <section className="hero-banner">
    <div className="flex-shield">
      <h1 className="hero-heading" style={{ color: `${hCl}` }}>
        {heading}
      </h1>
      <p className="hero-text" style={{ color: `${Tcl}` }}>
        {text}
      </p>

      <Link to="/">
        <JokerBtn bkgc={btnBg} color={btnCl} text={btnVal} />
      </Link>
    </div>
  </section>
);

export default HeroBanner;
