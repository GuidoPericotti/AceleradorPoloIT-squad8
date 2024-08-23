import React from 'react';
import { FooterComponent } from '../components/Footer/FooterComponent';
import { IconFooter } from '../components/Footer/IconFooter';

export const Footer = ({darkMode}) => {
  return (
    <footer className={`flex justify-around items-start p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className="flex-none mt-4">
        <IconFooter darkMode={darkMode}/>
      </div>
      <div className={`flex-1 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <FooterComponent darkMode={darkMode}/>
      </div>
    </footer>
  );
};

