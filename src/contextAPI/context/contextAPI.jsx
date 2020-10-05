// BASIC:
import React from 'react';

// CONSTANTS:
import NavRoutes from '../constants/routes';
import SocialMediaLinks from '../constants/SocialMediaLinks';
import {
  Projects,
  Support,
  Company,
  companyExperience,
} from '../constants/SiteMap';
import ServicesData from '../constants/ServicesData';

// create context:
const EarthSlowContext = React.createContext();

const EarthSlowProvider = ({ children }) => {
  // hooks
  const [navState, setNavState] = React.useState(false);

  // navbar toggling functionality:
  const FlipNavState = navState => setNavState(!navState);

  return (
    <EarthSlowContext.Provider
      value={{
        navState,
        FlipNavState,
        NavRoutes,
        SocialMediaLinks,
        Projects,
        Support,
        Company,
        companyExperience,
        ServicesData,
      }}
    >
      {children}
    </EarthSlowContext.Provider>
  );
};

export { EarthSlowProvider, EarthSlowContext };
