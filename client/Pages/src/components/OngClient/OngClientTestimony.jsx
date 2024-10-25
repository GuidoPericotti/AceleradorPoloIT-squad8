

import React from 'react';
import { FormButton } from '../Login/LoginComponents/FormButton';
import { IconOngTestimony } from './IconOngTestimony';
import { NavLink } from 'react-router-dom';

export const OngClientTestimony = ({ darkMode }) => {
  return (
    <>
      <main
        className={`flex flex-col admlg:flex-row justify-between px-4 py-16 admlg:py-32 ${
          darkMode ? 'bg-gray-900' : 'bg-[#82C7A5]'
        }`}
      >
        <div className="max-w-xl mb-8 admlg:mb-0">
          <div className="pb-4">
            <h2
              className={`text-2xl admlg:text-4xl font-bold text-left ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
            >
              Impulsar tu ONG con talento <br />
              de calidad ahora es simple
            </h2>
          </div>
          <div className="pb-4">
            <p
              className={`text-sm admlg:text-base text-left ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Polo IT te ayuda a encontrar, contratar y gestionar los mejores talentos de la región.
            </p>
          </div>
          <NavLink to="/crear-cuenta">
            <FormButton
              text="Empezá tu camino"
              className={`${
                darkMode
                  ? 'bg-sky-600 hover:bg-sky-700'
                  : 'bg-sky-500 hover:bg-sky-600'
              } text-white py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500`}
            />
          </NavLink>
        </div>

        {/* Icono de testimonio */}
        <div className="flex justify-center admlg:justify-end pr-0 admlg:pr-20">
          <IconOngTestimony className="w-24 h-24 admlg:w-auto admlg:h-auto" />
        </div>
      </main>
    </>
  );
};
