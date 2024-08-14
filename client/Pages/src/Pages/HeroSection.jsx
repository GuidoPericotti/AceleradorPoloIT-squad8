import React from 'react';
import { HeroVideo } from '../components/HeroComponents/HeroVideo';
import { HeroText } from '../components/HeroComponents/HeroText';


export const HeroSection = () => {
  return (
    <>  
    <section className="relative text-center">
  <HeroVideo className="w-full h-auto" autoPlay muted loop />
  <div className="absolute inset-0 flex items-center justify-center text-white">
    <HeroText className="text-xl font-bold"/>
  </div>
</section>

    </>
  )
}
