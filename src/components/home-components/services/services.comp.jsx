// BASIC:
import React from 'react';
import './services.style.sass';

// UTILITIES:
import JokerTitle from '../../joker-title/joker-title.comp';
import { EarthSlowContext } from '../../../contextAPI/context/contextAPI';
import { v4 as uuid } from 'uuid';

// COMPONENTS:

// COMPONENT:=>
const Services = () => {
  const { ServicesData } = React.useContext(EarthSlowContext);
  return (
    <section className="company-services">
      {/* title */}
      <JokerTitle text={'OUR'} subText={'SERVICES'} />

      <div className="row">
        {ServicesData.map(service => {
          return (
            <div className="col-md-4 col-sm-6 col-xs-12" key={uuid()}>
              <div className="card services-card">
                <div className="services-card-body">
                  <span className="service-icon">{service.icon}</span>
                  <h5 className=" services-card-title">
                    {service.serviceName}
                    <small className=" services-card-subtitle mb-2 text-muted">
                      {`${service.serviceRate}/10`}
                    </small>
                  </h5>
                  <hr />
                  <p className=" services-card-text">
                    {service.serviceDescription}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
