// BASIC:
import React from 'react';
import './joker-title.style.sass';

// COMPONENT:=>
const JokerTitle = ({ text, subText }) => (
  <h2 className="joker-title">
    <span className="text">{text}</span>
    <span className="subtext"> {subText}</span>
  </h2>
);

export default JokerTitle;
