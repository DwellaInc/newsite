import React from 'react';
import './WhatWeOffer.scss';
import Card from '../../../../components/Card/Card';
import { cardInfo } from './info';

export default function WhatWeOffer() {
  return (
    <section className="what-we-offer">
      <h3 className="what-we-offer-title">What we offer</h3>
      <div className="what-we-offer-cards">
        {cardInfo.map((card) => {
          return (
            <>
              <Card image={card.image} text={card.text} />
            </>
          );
        })}
      </div>
    </section>
  );
}
