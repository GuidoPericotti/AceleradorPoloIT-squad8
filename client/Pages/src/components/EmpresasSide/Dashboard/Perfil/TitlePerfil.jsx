

 import React from 'react';
export const TitlePerfil = ({ darkMode }) => {
  return (
    <header className={`
      mt-20 font-bold uppercase w-full h-16 rounded-tl-3xl rounded-tr-3xl 
      flex justify-center items-center
      ${darkMode 
        ? 'bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-r from-[#76b596] via-[#41839d] to-[#034aa6]'}
      transition-colors duration-300
    `}>
      <h1 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-[#1e1e1e]'}`}>
        Perfil
      </h1>
    </header>  
  );
};