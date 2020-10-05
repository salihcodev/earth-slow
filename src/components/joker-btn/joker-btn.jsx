// BASIC:
import React from 'react';
import './joker-btn.style.sass';

// UTILITIES:

// COMPONENT:=>
const JokerBtn = ({ text, color, bkgc }) => (
  <button
    style={{ backgroundColor: `${bkgc}`, color: `${color}` }}
    className="joker-btn"
  >
    {text}
  </button>
);

export default JokerBtn;
