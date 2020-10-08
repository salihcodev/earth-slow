// BASIC:
import React from 'react';
import './featured-tours.style.sass';

// COMPONENTS:
import JokerTitle from '../../joker-title/joker-title.comp';
import TourTemplate from '../../tour-template/tour-template.comp';

// UTILITIES:
import { useStaticQuery, graphql } from 'gatsby';

// COMPONENT QUERY:
const FeaturedToursQuery = graphql`
  query {
    featuredTours: allContentfulEarthSlowTours(
      filter: { featured: { eq: true } }
    ) {
      totalCount
      edges {
        node {
          contentful_id
          name
          slug
          price
          country
          days
          description {
            description
          }
          iamges {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          journeyPlan {
            day
            sign
            info
          }
        }
      }
    }
  }
`;

// COMPONENT:=>
const FeaturedTours = () => {
  const toursResponse = useStaticQuery(FeaturedToursQuery);
  const {
    featuredTours: { edges },
  } = toursResponse;
  console.log(edges);
  return (
    <section className="featured-tours">
      <JokerTitle text={'featured'} subText={'tours'} /> {/* title */}
      {/* tours container */}
      <div className="tours-container row">
        {edges.map(({ node }) => (
          <TourTemplate key={node.contentful_id} tour={node} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedTours;
