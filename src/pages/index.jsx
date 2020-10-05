// BASIC:
import React from 'react';

// COMPONENTS:
import LayoutWrapperComp from '../components/layout/layout.comp';
import About from '../components/home-components/about/about.comp';

// PAGE COMPONENT:=>
const HomePage = () => (
  <LayoutWrapperComp>
    <About />
  </LayoutWrapperComp>
);

export default HomePage;
