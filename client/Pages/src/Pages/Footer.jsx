import React from 'react';
import { FooterComponent } from '../components/Footer/FooterComponent';
import { IconFooter } from '../components/Footer/IconFooter';

export const Footer = () => {
  return (
    <footer className="flex justify-around items-start p-6">
      <div className="flex-none mt-4">
        <IconFooter />
      </div>
      <div className="flex-1">
        <FooterComponent />
      </div>
    </footer>
  );
};

