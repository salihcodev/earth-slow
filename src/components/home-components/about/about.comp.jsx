// BASIC:
import React from 'react';
import './about.style.sass';

// UTILITIES:
// import AboutImg from '../../../assets/defaultBcg.jpg';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import JokerBtn from '../../joker-btn/joker-btn';

// COMPONENTS:
import JokerTitle from '../../joker-title/joker-title.comp';

// GRAPHQL QUERY:
const aboutImgQuery = graphql`
  {
    AboutImg: file(relativePath: { eq: "defaultBcg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

// COMPONENT:=>
const About = () => {
  // extract image from query.
  const {
    AboutImg: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(aboutImgQuery);
  const AboutImg = fluid;

  return (
    <section className="about-company">
      {/* title */}
      <JokerTitle text={'ABOUT'} subText={'US'} />

      <div className="row">
        {/* image */}
        <div className="img-wing col-lg-6 col-md-12">
          <div className="img-container">
            <Img fluid={AboutImg} alt="about us" />
          </div>
        </div>

        {/* text or information about company */}
        <div className="info-wing col-lg-6 col-md-12">
          <h3 className="about-title">Explore the difference</h3>
          <p className="about-description-one">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi eius
            eos aliquam. Sed praesentium eaque illo nemo quod dicta blanditiis
            quas soluta vero perferendis ea, eos inventore, error reiciendis
            ipsum?
          </p>
          <p className="about-description-one">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi eius
            eos aliquam. Sed praesentium eaque ipsum?
          </p>
          <Link to="/">
            <JokerBtn
              text={'read more'.toUpperCase()}
              color={'#ddd'}
              bkgc={'#334'}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
