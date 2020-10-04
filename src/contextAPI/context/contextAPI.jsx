// BASIC:
import React from 'react';

// CONSTANTS:
import NavRoutes from '../constants/routes';
import ServicesSection from '../constants/services';
import SocialIcons from '../constants/social-icons';

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
        ServicesSection,
        SocialIcons,
      }}
    >
      {children}
    </EarthSlowContext.Provider>
  );
};

export { EarthSlowProvider, EarthSlowContext };
