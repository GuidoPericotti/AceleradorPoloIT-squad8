
import React from 'react';
import InputField from '../../../Login/LoginComponents/InputField';

export const InformacionPersonalEmpresa = ({ darkMode }) => {
  return (
    <div className={`rounded-md ${darkMode ? 'bg-gray-600 text-gray-100' : ' text-gray-800'}`}>
  <h2 className={`pl-1 text-lg font-semibold text-center uppercase ${darkMode ? ' text-gray-100' : ' text-gray-800'}`}>
    Información Personal
  </h2>
  <hr className={`pb-[0.5px] ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`} />
  <form action="">
    <div className="mb-4 mt-1">
      <p className={`${darkMode ? 'text-gray-200' : 'text-gray-800'} mt-2`}>Nombre de la empresa</p>
      <InputField
        id='nombre_empresa'
        className={`mb-5 block w-full appearance-none rounded-lg border ${darkMode ? 'border-gray-600 bg-gray-800 text-gray-200 focus:border-sky-500' : 'border-gray-300 bg-white text-gray-700 focus:border-sky-500'} focus:outline-none focus:ring-0`}
      />
    </div>
    <div className="mb-4">
      <p className={`${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Location</p>
      <InputField
        id='pais_empresa'
        className={`mb-5 block w-full appearance-none rounded-lg border ${darkMode ? 'border-gray-600 bg-gray-800 text-gray-200 focus:border-sky-500' : 'border-gray-300 bg-white text-gray-700 focus:border-sky-500'} focus:outline-none focus:ring-0`}
      />
    </div>
    <div className="mb-4">
      <p className={`${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Número de teléfono</p>
      <InputField
        id='telefono_empresa'
        className={`mb-5 block w-full appearance-none rounded-lg border ${darkMode ? 'border-gray-600 bg-gray-800 text-gray-200 focus:border-sky-500' : 'border-gray-300 bg-white text-gray-700 focus:border-sky-500'} focus:outline-none focus:ring-0`}
      />
    </div>
    <div className="mb-4">
      <p className={`${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Email</p>
      <InputField
        id='email_empresa'
        className={`mb-5 block w-full appearance-none rounded-lg border ${darkMode ? 'border-gray-600 bg-gray-800 text-gray-200 focus:border-sky-500' : 'border-gray-300 bg-white text-gray-700 focus:border-sky-500'} focus:outline-none focus:ring-0`}
      />
    </div>
    {/* Canales Digitales */}
    <div className="mb-4">
      <p className={`${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Canales digitales oficiales</p>
      {/* Input Web */}
      <div className="mb-5 relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {/* SVG Path */}
          </svg>
        </span>
        <InputField
          id='web_empresa'
          placeholder="Sitio Web"
          className={`block w-full pl-10 appearance-none rounded-lg border ${darkMode ? 'border-gray-600 bg-gray-800 text-gray-200 focus:border-sky-500' : 'border-gray-300 bg-white text-gray-700 focus:border-sky-500'} focus:outline-none focus:ring-0`}
        />
      </div>
      {/* Input Instagram */}
      <div className="mb-5 relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {/* SVG Path */}
          </svg>
        </span>
        <InputField
          id='instagram_empresa'
          placeholder="Instagram"
          className={`block w-full pl-10 appearance-none rounded-lg border ${darkMode ? 'border-gray-600 bg-gray-800 text-gray-200 focus:border-sky-500' : 'border-gray-300 bg-white text-gray-700 focus:border-sky-500'} focus:outline-none focus:ring-0`}
        />
      </div>
      {/* Input Twitter */}
      <div className="mb-5 relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {/* SVG Path */}
          </svg>
        </span>
        <InputField
          id='twitter_empresa'
          placeholder="Twitter"
          className={`block w-full pl-10 appearance-none rounded-lg border ${darkMode ? 'border-gray-600 bg-gray-800 text-gray-200 focus:border-sky-500' : 'border-gray-300 bg-white text-gray-700 focus:border-sky-500'} focus:outline-none focus:ring-0`}
        />
      </div>
    </div>
  </form>
</div>

  );
};
