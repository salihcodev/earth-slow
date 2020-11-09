// BASIC:
import React from 'react';
import './searching.style.sass';

// UTILITIES:
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

import abstractedLogo from '../../assets/abstracted-logo.svg';
// COMPONENTS:

// COMPONENT:=>
const searching = () => {
  return (
    <section className="searching">
      <div className="container">
        <nav className="searching-wrapper">
          <div className="input-cont">
            <form>
              <input
                type="text"
                className="search-query"
                placeholder="Camping, Mountainy, Races"
              />
              <button type="submit" className="icon">
                <AiOutlineSearch />
              </button>
            </form>
          </div>
          <div className="categories">
            <ul className="cats">
              <li className="category">
                <span className="text">Camping</span>
                <span className="icon">
                  <IoIosArrowDown />
                </span>
                <div className="cat-list">
                  <ul>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                  </ul>
                </div>
              </li>
              <li className="category">
                <span className="text">Racing</span>
                <span className="icon">
                  <IoIosArrowDown />
                </span>
                <div className="cat-list">
                  <ul>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                  </ul>
                </div>
              </li>
              <li className="category">
                <span className="text">Mountain Climb</span>
                <span className="icon">
                  <IoIosArrowDown />
                </span>
                <div className="cat-list">
                  <ul>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="company-abstracted-logo">
            <img src={abstractedLogo} alt="abstracted lgo" />
          </div>
        </nav>
      </div>
    </section>
  );
};

export default searching;
