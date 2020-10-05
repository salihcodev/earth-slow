// BASIC:
import React from 'react';
import './hero-banner.style.sass';

// UTILITIES:
import { Link } from 'gatsby';
import JokerBtn from '../joker-btn/joker-btn';

// COMPONENT:=>
const HeroBanner = ({ heading, text, btnVal }) => (
  <section className="hero-banner">
    <div className="flex-shield">
      <h1 className="hero-heading">{heading}</h1>
      <p className="hero-text">{text}</p>

      <Link to="/">
        <JokerBtn bkgc={'#223036'} color={'#ddd'} text={btnVal} />
      </Link>
    </div>
  </section>
);

export default HeroBanner;
