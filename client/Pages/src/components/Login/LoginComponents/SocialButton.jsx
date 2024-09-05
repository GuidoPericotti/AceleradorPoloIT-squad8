import React from 'react';

const SocialButton = ({ icon, alt }) => {
  return (
    <div className="flex-none px-1">
      <a 
        className="block p-0 font-bold text-center text-gray-700 uppercase transition-all bg-transparent cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft"
      >
        <img 
          src={icon} 
          alt={alt} 
          className="" 
          height="64px" 
          width="64px" 
        />
      </a>
    </div>
  );
};

export default SocialButton;
