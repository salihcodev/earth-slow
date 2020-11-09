// BASIC:
import React from 'react';
import './layout.style.sass';

// UTILITIES:
import { EarthSlowProvider } from '../../contextAPI/context/contextAPI';
import 'bootstrap/dist/css/bootstrap.css';

// COMPONENTS:
import FooterComp from '../footer/footer.comp';

// THE LAYOUT COMPONENT THAT WRAPS EVERY SINGLE COMPONENT:=>
const LayoutWrapperComp = ({ children }) => (
  <EarthSlowProvider>
    <div className="layout-container">
      {/* CHILDREN */}
      {children}
    </div>

    {/* FOOTER */}
    <FooterComp />
  </EarthSlowProvider>
);

export default LayoutWrapperComp;
