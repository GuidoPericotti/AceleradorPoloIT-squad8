import React from 'react';

export const IconFooter = () => {
  return (
    <>
      <div className="flex flex-col items-center space-y-4">
        <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.simpleicons.org/figma/black"
            alt="Figma Logo"
            className="w-10 h-10"
          />
        </a>
        <div className="flex space-x-4">
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
        </div>
      </div>
    </>
  );
};
