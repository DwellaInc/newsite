import React from 'react';
import './Intro.scss';
import IntroHouse from '../../../../assets/images/Intro_HouseUp.png';

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro-message">
        <h3 className="intro-title">
          Real estate investing just got a whole lot easier.
        </h3>
        <p>
          With Dwella, you can invest in homes without having to leave your own.
          By leveraging innovative technology, you can participate in the
          thriving housing markets of the biggest cities with as little as the
          coins in your pocket. This is today's real estate investing, for
          everyone.
        </p>
      </div>
      <img className="intro-image" src={IntroHouse} alt="Three houses" />
    </section>
  );
}
