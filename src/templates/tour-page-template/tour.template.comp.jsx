// BASIC:
import React from 'react';
import './tour.template.style.sass';

// UTILITIES:
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

// COMPONENTS:
import LayoutWrapperComp from '../../components/layout/layout.comp';
import PagesHero from '../../components/pages-hero/pages-hero.comp';
import SingleToursBanner from '../../components/single-page-banner/single-page-banner.comp';
import JokerBtn from '../../components/joker-btn/joker-btn';
import JourneyDay from '../../components/journey-day/journey-day.comp';

// PAGE COMPONENT:=>
const TourTemplate = ({ data: { singleTour } }) => {
  // extract contentful data
  const {
    name,
    price,
    featured,
    country,
    days,
    startTime,
    description: { description },
    iamges,
    journeyPlan,
  } = singleTour;
  // get hero image [first one]:
  const { fluid } = iamges[0];

  return (
    <LayoutWrapperComp>
      <article className="single-tour-wrapper">
        <section className="tour-offer">
          <p className="the-offer">
            <span className="offer-text">this journey has offer now</span>
            <span className="offer-price">{`$${price - 10}`}</span>
            <b className="original-price">{`$${price}`}</b>
          </p>
        </section>
        <PagesHero home={false} img={fluid}>
          <SingleToursBanner
            btnVal={'request this journey'.toUpperCase()}
            btnCl={'#223036'}
            hCl={'#223036'}
            btnBg={'#ddd'}
            startsAt={startTime}
          />
        </PagesHero>

        {/* TEMPLATE CONTENT */}
        <div className="single-tour-page">
          <section className="tour-basic-info">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="info-box country">
                  <span className="text">country: {country}</span>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="info-box price">
                  <span className="text">cost: {price}</span>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="info-box featured">
                  {featured ? (
                    <span className="featured">popularity: yes</span>
                  ) : (
                    <span className="featured">popularity: No</span>
                  )}
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="info-box days">
                  <span className="text">duration: {days}</span>
                </div>
              </div>
            </div>
          </section>
          <div className="container">
            <section className="tour-description">
              <h2 className="name">{name}</h2>
              <p className="description">{description}</p>
            </section>
            <section className="tour-imgs">
              <div className="row">
                {iamges.map(({ contentful_id, fluid }) => (
                  <div className="col-4">
                    <Img
                      key={contentful_id}
                      fluid={fluid}
                      className="tour-img"
                    />
                  </div>
                ))}
              </div>
            </section>
            <section className="tour-timeline">
              <h2>Tour timeline</h2>
              {journeyPlan.map(({ ...day }) => (
                <JourneyDay singleJuDay={day} />
              ))}
            </section>

            <div className="request-btn text-right">
              <JokerBtn
                color={'#ddd'}
                bkgc={'#223036'}
                type={'button'}
                to="/contact"
              >
                Request this tour
              </JokerBtn>
            </div>
          </div>
        </div>
      </article>
    </LayoutWrapperComp>
  );
};

export default TourTemplate;

// PAGE QUERY:
export const query = graphql`
  query($slug: String!) {
    singleTour: contentfulEarthSlowTours(slug: { eq: $slug }) {
      contentful_id
      name
      slug
      price
      featured
      country
      days
      startTime(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      iamges {
        contentful_id
        fluid(quality: 100, maxWidth: 4800) {
          ...GatsbyContentfulFluid
        }
      }
      journeyPlan {
        day
        sign
        info
      }
    }
  }
`;
