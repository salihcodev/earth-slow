// BASIC:
import React from 'react';
import './layout.style.sass';

// UTILITIES:
import { EarthSlowProvider } from '../../contextAPI/context/contextAPI';
import 'bootstrap/dist/css/bootstrap.css';

// COMPONENTS:
import HeaderComp from '../header/header.comp';
import FooterComp from '../footer/footer.comp';

// THE LAYOUT COMPONENT THAT WRAPS EVERY SINGLE COMPONENT:=>
const LayoutWrapperComp = ({ children }) => (
  <article className="layout-wrapper-component">
    <EarthSlowProvider>
      {/* HEADER = NAVBAR */}
      <HeaderComp />

      <div className="layout-container">
        {/* CHILDREN */}
        {children}
      </div>

      {/* FOOTER */}
      <FooterComp />
    </EarthSlowProvider>
  </article>
);

export default LayoutWrapperComp;
