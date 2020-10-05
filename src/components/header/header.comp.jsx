// BASIC:
import React from 'react';
import './header.style.sass';

// UTILITIES:
import { EarthSlowContext } from '../../contextAPI/context/contextAPI';
import { v4 as uuid } from 'uuid';
import { Link } from 'gatsby';
import Logo from '../../images/logo.svg';

// COMPONENT:=>
const HeaderComp = () => {
  const { navState, FlipNavState, NavRoutes } = React.useContext(
    EarthSlowContext
  );
  console.log(navState);

  return (
    <>
      <nav className="header">
        {/* logo */}
        <Link to="/">
          <div className="logo-container">
            <div
              className="logo"
              style={{ background: ` url(${Logo}) center/cover` }}
            ></div>
          </div>
        </Link>

        {/* links */}
        <div className="nav-routes-container">
          <ul className="nav-routes">
            {NavRoutes.map(({ path, text }) => (
              <li key={uuid()} className="nav-route">
                <Link to={path}>{text}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* signin & purchasing */}
        <div className="purchase">
          <button className="sign-in">Sign in</button>
          <button className="purchase-tour">Burch a tour</button>
        </div>

        {/* toggler */}
        <button
          className="toggler-container"
          onClick={() => FlipNavState(navState)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>

      {/* small size navbar: */}
      <section
        className={`small-screen-navbar ${navState ? 'opened-nav' : null}`}
      >
        <div className="small-screen-navbar-container">
          {/* links */}
          <div className="alt-nav-routes-container">
            <ul className="alt-nav-routes">
              {NavRoutes.map(({ path, text }) => (
                <li key={uuid()} className="alt-nav-route">
                  <Link to={path}>{text}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* signin & purchasing */}
          <div className="purchase">
            <button className="sign-in">Sign in</button>
            <button className="purchase-tour">Burch a tour</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderComp;
