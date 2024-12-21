import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Featuresection from './components/featuresection'
export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featuresection />
    </div>
  );
}
