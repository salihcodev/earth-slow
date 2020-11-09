// BASIC:
import React from 'react';
import './single-page-banner.style.sass';

// UTILITIES:
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
        <JokerBtn bkgc={btnBg} color={btnCl} to="contact">
          {btnVal}
        </JokerBtn>
      )}
      {startsAt && <span className="starts-at">{startsAt}</span>}
    </div>
  </section>
);

export default SingleToursBanner;
