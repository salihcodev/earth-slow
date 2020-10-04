// BASIC:
import React from 'react';
import './layout.style.sass';

// UTILITIES:
import { EarthSlowProvider } from '../../contextAPI/context/contextAPI';

// COMPONENTS:
import HeaderComp from '../header/header.comp';
import FooterComp from '../footer/footer.comp';

// THE LAYOUT COMPONENT THAT WRAPS EVERY SINGLE COMPONENT:=>
const LayoutWrapperComp = ({ children }) => (
  <EarthSlowProvider>
    {/* HEADER = NAVBAR */}
    <HeaderComp />

    {/* CHILDREN */}
    {children}

    {/* FOOTER */}
    <FooterComp />
  </EarthSlowProvider>
);

export default LayoutWrapperComp;
