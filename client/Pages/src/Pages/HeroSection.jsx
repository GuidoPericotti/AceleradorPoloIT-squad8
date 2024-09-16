import React from 'react';
import { HeroVideo } from '../components/HeroComponents/HeroVideo';
import { HeroText } from '../components/HeroComponents/HeroText';

export const HeroSection = ({ darkMode}) => {
  return (
    <>  
      <section className="relative text-center">
        <HeroVideo className="w-full h-auto" autoPlay muted loop />
        <div className="absolute inset-0 flex items-center justify-center">
          <HeroText darkMode={darkMode} />
        </div>
      </section>
    </>
  );
};
