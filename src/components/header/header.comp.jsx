// BASIC:
import React from 'react';
import './header.style.sass';

// UTILITIES:
import { EarthSlowContext } from '../../contextAPI/context/contextAPI';
import { v4 as uuid } from 'uuid';
import { Link } from 'gatsby';
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
        <Link to="/">
          <div className="logo-container">
            <div
              className="logo"
              style={{ background: ` url(${Logo}) center/cover` }}
            ></div>
          </div>
        </Link>

        <div className="nav-routes-container">
          <ul className="nav-routes">
            {NavRoutes.map(({ path, text }) => (
              <li key={uuid()} className="nav-route">
                <Link activeClassName="active-nav-styles" to={path}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* signin & purchasing */}
        <div className="purchase">
          <Link to="/purchase-tour" className="purchase-tour">
            Purchase a tour
          </Link>
          <Link to="/sign-in" className="sign-in">
            Sign in
          </Link>
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
          <div className="alt-nav-routes-container">
            <ul className="alt-nav-routes">
              {NavRoutes.map(({ path, text }) => (
                <li key={uuid()} className="alt-nav-route">
                  <Link activeClassName="active-alt-nav-styles" to={path}>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* signin & purchasing */}
          <div className="purchase">
            <Link to="/purchase-tour" className="purchase-tour">
              Purchase a tour
            </Link>
            <Link to="/sign-in" className="sign-in">
              Sign in
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderComp;
