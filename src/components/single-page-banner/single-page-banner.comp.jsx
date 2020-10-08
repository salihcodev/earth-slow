// BASIC:
import React from 'react';
import './single-page-banner.style.sass';

// UTILITIES:
import { Link } from 'gatsby';
import JokerBtn from '../joker-btn/joker-btn';

// COMPONENT:=>
const SingleToursBanner = ({
  heading,
  headingBg,
  startsAt,
  hCl,
  text,
  Tcl,
  btnVal,
  btnCl,
  btnBg,
}) => (
  <section className="hero-banner">
    <div className="flex-shield">
      {btnVal && (
        <Link to="/">
          <JokerBtn bkgc={btnBg} color={btnCl} text={btnVal} />
        </Link>
      )}
      {startsAt && <span className="starts-at">{startsAt}</span>}
    </div>
  </section>
);

export default SingleToursBanner;
