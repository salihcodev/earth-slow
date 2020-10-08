// BASIC:
import React from 'react';
import './header.style.sass';

// UTILITIES:
import { EarthSlowContext } from '../../contextAPI/context/contextAPI';
import { v4 as uuid } from 'uuid';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Logo from '../../assets/logo.svg';

// COMPONENT:=>
const HeaderComp = () => {
  const { navState, FlipNavState, NavRoutes } = React.useContext(
    EarthSlowContext
  );

  return (
    <>
      <nav className="header">
        {/* logo */}
        <AniLink paintDrip duration={1} hex="#af95bd" to="/">
          <div className="logo-container">
            <div
              className="logo"
              style={{ background: ` url(${Logo}) center/cover` }}
            ></div>
          </div>
        </AniLink>

        {/* AniLinks */}
        <div className="nav-routes-container">
          <ul className="nav-routes">
            {NavRoutes.map(({ path, text }) => (
              <li key={uuid()} className="nav-route">
                <AniLink paintDrip hex="#cdad84" duration={1} to={path}>
                  {text}
                </AniLink>
              </li>
            ))}
          </ul>
        </div>

        {/* signin & purchasing */}
        <div className="purchase">
          <button className="purchase-tour">Purchase a tour</button>
          <button className="sign-in">Sign in</button>
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
          {/* AniLinks */}
          <div className="alt-nav-routes-container">
            <ul className="alt-nav-routes">
              {NavRoutes.map(({ path, text }) => (
                <li key={uuid()} className="alt-nav-route">
                  <AniLink paintDrip duration={1} hex="#cdad84" to={path}>
                    {text}
                  </AniLink>
                </li>
              ))}
            </ul>
          </div>

          {/* signin & purchasing */}
          <div className="purchase">
            <button className="purchase-tour">Purchase a tour</button>
            <button className="sign-in">Sign in</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderComp;
