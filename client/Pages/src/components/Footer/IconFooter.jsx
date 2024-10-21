import React from 'react';

export const IconFooter = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <a
        href="https://www.figma.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <img
          src="https://cdn.simpleicons.org/figma/black"
          alt="Figma Logo"
          className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
        />
      </a>
      <div className="flex flex-wrap justify-center space-x-4 space-y-4 md:space-y-0">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src="https://logo.clearbit.com/twitter.com"
            alt="Twitter Logo"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src="https://logo.clearbit.com/instagram.com"
            alt="Instagram Logo"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
          />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src="https://logo.clearbit.com/youtube.com"
            alt="YouTube Logo"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
          />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src="https://logo.clearbit.com/linkedin.com"
            alt="LinkedIn Logo"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
          />
        </a>
      </div>
    </div>
  );
};