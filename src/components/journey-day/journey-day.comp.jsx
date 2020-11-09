// BASIC:
import React from 'react';
import './journey-day.style.sass';

// UTILITIES:
import { v4 as uuid } from 'uuid';

// COMPONENT:=>
const JourneyDay = ({ singleJuDay }) => {
  const [JuDay, setJuDay] = React.useState(false);
  const toggleJuDay = () => setJuDay(state => !state);
  const { day, sign, info } = singleJuDay;
  return (
    <div key={uuid()} className="tour-single-day">
      <div className="box-head">
        <button className="day" onClick={toggleJuDay}>
          <h4>{day}</h4>
          <small className="sign">{sign}</small>
        </button>
      </div>
      {JuDay && (
        <div className="box-footer">
          <p className="info">{info}</p>
        </div>
      )}
    </div>
  );
};

export default JourneyDay;
