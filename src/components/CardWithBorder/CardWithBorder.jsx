import React from 'react';
import './CardWithBorder.scss';
import downBtn from '../../assets/images/down-button.svg';

export default function CardWithBorder({ image, title, text }) {
  return (
    <div className="CWB">
      <div className="CWB-container">
        <img className="CWB-image" src={image} alt="How We Do It" />
        <h4 className="CWB-title">{title}</h4>
      </div>
      <button className="CWB-button">
        <img className="CWB-expand" src={downBtn} alt="Expand button" />
      </button>
      <p>{text}</p>
    </div>
  );
}
