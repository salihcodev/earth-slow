// BASIC:
import React from 'react';

// UTILITIES:

// COMPONENTS:
import LayoutWrapperComp from '../components/layout/layout.comp';
import HeroBanner from '../components/hero-banner/hero-banner';

// hero banner data:
const heading = '404 Not Found';
const text = 'Ooh.. dead end, Maybe you used a bad route';
const btnVal = 'Back To Home';

// PAGE COMPONENT:=>
const NotFoundPage = () => {
  React.useEffect(() => {
    document.title = `Not Found :') | Earth Slow`;
    return () => {};
  }, []);

  return (
    <LayoutWrapperComp>
      <HeroBanner heading={heading} text={text} btnVal={btnVal} />
    </LayoutWrapperComp>
  );
};

export default NotFoundPage;
