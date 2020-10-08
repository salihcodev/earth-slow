// BASIC:
import React from 'react';
import './tour-template.style.sass';

// COMPONENTS:
// import JokerTitle from '../../joker-title/joker-title.comp';

// UTILITIES:
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Img from 'gatsby-image';

// COMPONENT:=>
const TourTemplate = ({ tour }) => {
  // tour data:
  const {
    name,
    slug,
    price,
    featured,
    days,
    country,
    iamges,
    description: { description },
  } = tour;

  // extract first image to add it to template source.
  const firstTourImg = iamges[0].fluid;

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div className="card tour-template">
        {featured ? <span className="featured-sign">FEATURED</span> : null}
        <Img
          fluid={firstTourImg}
          fadeIn={true}
          className="card-img-top"
          alt={name}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <div className="card-footer">
            <p className="tour-basic-info">
              <small className="country">country: {country}</small>
              <small className="days">days: {days}</small>
            </p>
            <h6 className="price">${price}</h6>
            <AniLink
              cover
              direction="left"
              duration={1}
              bg="#ddd4"
              to={`/tours/${slug.trim()}`}
              className="tour-details"
            >
              full details
            </AniLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourTemplate;
