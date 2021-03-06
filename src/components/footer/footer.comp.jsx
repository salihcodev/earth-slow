// BASIC:
import React from 'react';
import './footer.style.sass';

// UTILITIES:
import { Link } from 'gatsby';
import { v4 as uuid } from 'uuid';
import { EarthSlowContext } from '../../contextAPI/context/contextAPI';
import AndroidDown from '../../assets/footer/googlePlayLogo.svg';
import AppleDown from '../../assets/footer/appStore.svg';

// COMPONENT:=>
const FooterComp = () => {
  const {
    SocialMediaLinks,
    Projects,
    Support,
    Company,
    companyExperience,
  } = React.useContext(EarthSlowContext);
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-2">
            <div className="socialMedia footerWing">
              <h5 className="sectionTitle">social media</h5>
              <div className="emptyWrapper">
                <ul>
                  {SocialMediaLinks.map(SLink => {
                    return (
                      <li className="SLink" key={uuid()}>
                        <Link to={SLink.link}>{SLink.icon}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-6">
            <div className="footerLinks footerWing">
              <h5 className="sectionTitle">site map</h5>
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <ul className="siteMap">
                    <h6 className="colDescription">projects</h6>
                    {Projects.map(SLink => (
                      <li className="sLink" key={uuid()}>
                        <Link to={SLink.link}>{SLink.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <ul className="siteMap">
                    <h6 className="colDescription">support</h6>
                    {Support.map(SLink => (
                      <li className="sLink" key={uuid()}>
                        <Link to={SLink.link}>{SLink.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <ul className="siteMap">
                    <h6 className="colDescription">company</h6>
                    {Company.map(SLink => (
                      <li className="sLink" key={uuid()}>
                        <Link to={SLink.link}>{SLink.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <ul className="siteMap">
                    <h6 className="colDescription">co. experience</h6>
                    {companyExperience.map(SLink => (
                      <li className="sLink" key={uuid()}>
                        <Link to={SLink.link}>{SLink.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="downloadApp footerWing">
              <h5 className="sectionTitle">download app</h5>
              <p className="downloadDesc">
                you can also get our applications on google play, app store!
              </p>
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <div className="emptyWrapper">
                    <div
                      style={{ background: `url(${AndroidDown}) center/cover` }}
                      className="downBox androidBox"
                    ></div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="emptyWrapper">
                    <div
                      style={{ background: `url(${AppleDown}) center/cover` }}
                      className="downBox iosBox"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="lastFooter">
          <div className="row">
            <div className="col">
              <div className="policyAndPrivacy">
                <p className="policy">
                  <Link to="/">policy</Link>
                  <Link to="/">privacy</Link>
                  <Link to="/">cookies</Link>
                </p>
              </div>
            </div>
            <div className="col">
              <div className="copyrightsWrapper">
                <p className="copyText">
                  <span className="copyrights">
                    @copyrights {new Date().getFullYear()}
                  </span>
                  <span>, all rights reserved to</span>
                  <a
                    className="author"
                    href="https://www.twitter.com/salihcodev"
                  >
                    @ahmedsalih
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default FooterComp;
