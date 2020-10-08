// BASIC:
import React from 'react';
import './all-tours.style.sass';

// COMPONENTS:
import JokerTitle from '../../joker-title/joker-title.comp';
import TourTemplate from '../../tour-template/tour-template.comp';

// UTILITIES:
import { useStaticQuery, graphql } from 'gatsby';

// COMPONENT QUERY:
const AllToursQuery = graphql`
  query {
    allTours: allContentfulEarthSlowTours {
      totalCount
      edges {
        node {
          contentful_id
          name
          slug
          price
          featured
          country
          days
          description {
            description
          }
          iamges {
            fluid {
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
    }
  }
`;

// COMPONENT:=>
const AllTours = () => {
  const toursResponse = useStaticQuery(AllToursQuery);
  const {
    allTours: { edges },
  } = toursResponse;
  console.log(edges);
  return (
    <section className="all-tours">
      <JokerTitle text={'all'} subText={'tours'} /> {/* title */}
      {/* tours container */}
      <div className="tours-container row">
        {edges.map(({ node }) => (
          <TourTemplate key={node.contentful_id} tour={node} />
        ))}
      </div>
    </section>
  );
};

export default AllTours;
