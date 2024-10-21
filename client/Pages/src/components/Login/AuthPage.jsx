import React, { useState } from 'react';
import ONGEmpresaLogin from './LoginComponents/ONGEmpresaLogin';
import LogOng from './LogOng';

const AuthPage = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <main className="w-full max-w-md px-3 mx-auto pt-18 pb-6 dark:bg-gray-900 dark:text-white">
      <div className="relative z-0 flex flex-col min-w-0 break-words bg-[#82C7A5] dark:bg-gray-800 border-0 shadow-lg rounded-2xl bg-clip-border">
        <div className="p-6 mb-0 text-center bg-[#82C7A5] dark:bg-gray-800 border-b-0 rounded-t-2xl text-lg">
          <h5 className="text-gray-900 dark:text-white">¡Bienvenidos!</h5>
        </div>
        <div className="flex flex-row flex-wrap px-3 -mx-3 sm:px-6 xl:px-12 justify-center">
          <p className='text-xs'>Regístrate Aquí</p>
        </div>
        {!selectedOption ? (
          <ONGEmpresaLogin onOptionChange={handleOptionChange} />
        ) : (
          <div className="w-full max-w-md p-6 bg-[#82C7A5] dark:bg-gray-800 rounded-lg shadow-lg">
            <LogOng organizacion={selectedOption} />
          </div>
        )}
      </div>
    </main>
  );
};

export default AuthPage;
