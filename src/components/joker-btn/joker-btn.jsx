// BASIC:
import React from 'react';
import './joker-btn.style.sass';

// UTILITIES:

import { Link } from 'gatsby';

// COMPONENT:=>
const JokerBtn = ({ color, bkgc, type, to, children }) => (
  <Link
    type={type}
    style={{ backgroundColor: `${bkgc}`, color: `${color}` }}
    className="joker-btn"
    to={to}
  >
    {children}
  </Link>
);

export default JokerBtn;
