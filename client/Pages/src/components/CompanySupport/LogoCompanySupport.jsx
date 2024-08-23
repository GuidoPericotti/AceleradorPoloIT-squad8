import React from 'react';

export const LogoCompanySupport = ({ Company, darkMode }) => {
  return (
    <div className={`flex flex-col items-center space-y-4 p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <h3 className="text-lg font-bold text-center">{Company}</h3>
      <div className="flex flex-wrap justify-center space-x-4">
        <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.simpleicons.org/figma/black"
            alt="Figma Logo"
            className="w-10 h-10"
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://logo.clearbit.com/twitter.com" alt="Twitter Logo" className="w-10 h-10"/>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://logo.clearbit.com/instagram.com" alt="Instagram Logo" className="w-10 h-10"/>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="https://logo.clearbit.com/youtube.com" alt="Youtube Logo" className="w-10 h-10"/>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="https://logo.clearbit.com/linkedin.com" alt="LinkedIn Logo" className="w-10 h-10"/>
        </a>
        <a href="https://globant.com" target="_blank" rel="noopener noreferrer">
          <img src="https://logo.clearbit.com/globant.com" alt="Globant Logo" className="w-10 h-10"/>
        </a>
        <a href="https://disney.com" target="_blank" rel="noopener noreferrer">
          <img src="https://logo.clearbit.com/disney.com" alt="Disney Logo" className="w-10 h-10"/>
        </a>
      </div>
    </div>
  );
};
