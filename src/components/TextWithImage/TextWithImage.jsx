import React from 'react';
import './TextWithImage.scss';
import NumberAndTitle from '../NumberAndTitle/NumberAndTitle';

export default function TextWithImage({
  text,
  image,
  number,
  title,
  background,
}) {
  if (background === 'grey') {
    return (
      <div className="TWI TWI-grey">
        <div className="TWI-container ">
          <img className="TWI-image" src={image} alt={title} />
          <div className="TWI-text">
            <NumberAndTitle number={number} title={title} />
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="TWI">
      <div className="TWI-container">
        <div className="TWI-text">
          <NumberAndTitle number={number} title={title} />
          <p>{text}</p>
        </div>
        <img className="TWI-image" src={image} alt={title} />
      </div>
    </div>
  );
}
