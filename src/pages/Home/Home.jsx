import React from 'react';
import Intro from './components/Intro/Intro';
import Hero from './components/Hero/Hero';
import WhatWeOffer from './components/WhatWeOffer/WhatWeOffer';
import WalkThrough from './components/WalkThrough/WalkThrough';
import HowWeDoIt from './components/HowWeDoIt/HowWeDoIt';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <WhatWeOffer />
      <WalkThrough />
      <HowWeDoIt />
      <AboutUs />
      <Contact />
    </>
  );
}
