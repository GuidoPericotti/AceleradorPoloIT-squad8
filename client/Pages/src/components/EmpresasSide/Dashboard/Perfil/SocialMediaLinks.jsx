
import React from 'react';

const SocialMediaLinks = ({ darkMode }) => {
  return (
    <nav className="w-full text-center mt-28">
      <h4 className={`text-base font-semibold ${darkMode ? 'text-white' : 'text-[#1e1e1e]'}`}>
        Redes Oficiales
      </h4>
      <div className="flex justify-center mt-4 gap-12">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" 
               className={`w-12 h-12 ${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-300`} 
               viewBox="0 0 24 24" 
               fill="currentColor">
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.785 4.66-4.785 1.325 0 2.464.099 2.795.144v3.24l-1.918.001c-1.503 0-1.793.714-1.793 1.761v2.309h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
          </svg>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" 
               className={`w-12 h-12 ${darkMode ? 'text-blue-400' : 'text-blue-500'} transition-colors duration-300`} 
               viewBox="0 0 24 24" 
               fill="currentColor">
            <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.932 4.932 0 0 0 2.163-2.723 9.868 9.868 0 0 1-3.127 1.196 4.918 4.918 0 0 0-8.384 4.482c-4.086-.2-7.719-2.162-10.148-5.144a4.822 4.822 0 0 0-.665 2.475 4.915 4.915 0 0 0 2.188 4.096 4.897 4.897 0 0 1-2.229-.616v.061a4.916 4.916 0 0 0 3.946 4.827 4.908 4.908 0 0 1-2.224.084 4.916 4.916 0 0 0 4.6 3.417 9.868 9.868 0 0 1-6.102 2.104c-.397 0-.788-.023-1.175-.068a13.913 13.913 0 0 0 7.548 2.212c9.054 0 14.002-7.502 14.002-14.002 0-.213-.005-.425-.014-.637a10.013 10.013 0 0 0 2.457-2.548z" />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default SocialMediaLinks;
