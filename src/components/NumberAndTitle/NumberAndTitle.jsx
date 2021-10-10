import React from 'react';
import './NumberAndTitle.scss';

export default function NumberAndTitle({ number, title }) {
  return (
    <div className="NAT-container">
      <div className="NAT-circle">
        <h4 className="NAT-number">{number}</h4>
      </div>
      <h4 className="NAT-title">{title}</h4>
    </div>
  );
}
