// BASIC:
import React from 'react';
import './contact-form.style.sass';

// COMPONENT:=>
import JokerBtn from '../joker-btn/joker-btn';

// COMPONENT:=>
const contactForm = () => (
  <section className="form-wrapper">
    <form action="https://formspree.io/f/xdopazer" method="post">
      <div className="inputs-container row">
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Email*</label>
          <input
            name="user-email"
            type="email"
            className="form-control"
            id="inputEmail4"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Password*</label>
          <input
            name="user-password"
            type="password"
            className="form-control"
            id="inputPassword4"
          />
        </div>
      </div>
      <div className="inputs-container row">
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">City*</label>
          <input
            name="user-city"
            type="text"
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputTripSort">State</label>
          <select id="inputTripSort" className="form-control">
            <option selected>Choose...</option>
            <option>Mountain</option>
            <option>Boat racing</option>
            <option>1...</option>
            <option>2...</option>
            <option>3...</option>
          </select>
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="inputZip">Zip</label>
          <input
            name="user-ZIP"
            type="text"
            className="form-control"
            id="inputZip"
          />
        </div>
      </div>
      <div className="check-me-input form-group">
        <div className="form-check">
          <input
            name="check-the-user"
            className="form-check-input"
            type="checkbox"
            id="gridCheck"
          />
          <label className="form-check-label" htmlFor="gridCheck">
            Check me out
          </label>
        </div>
        <JokerBtn
          type={'submit'}
          className="btn btn-primary"
          text={'submit your trip now'.toUpperCase()}
          color={'#ddd'}
          bkgc={'#333344'}
        />
      </div>
    </form>
  </section>
);

export default contactForm;
