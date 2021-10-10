import React from 'react';
import './Card.scss';

export default function Card({ image, text }) {
  return (
    <div className="card">
      <img className="card-image" src={image} alt="What we offer" />
      <p className="card-text">{text}</p>
    </div>
  );
}
