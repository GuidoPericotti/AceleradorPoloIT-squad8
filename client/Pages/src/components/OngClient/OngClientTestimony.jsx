import React from 'react';
import { FormButton } from '../Login/LoginComponents/FormButton';
import { IconOngTestimony } from './IconOngTestimony';

export const OngClientTestimony = () => {
  return (
    <>
      <main className="flex justify-between px-4 py-32 ">
        <div className="max-w-xl">
          <div className="pb-4">
            <h2 className="text-4xl font-bold text-left text-gray-800 dark:text-white">
              Impulsar tu ONG con talento <br />
              de calidad ahora es simple
            </h2>
          </div>
          <div className="pb-4">
            <p className="text-sm text-left text-gray-600 dark:text-gray-300">
              Polo IT te ayuda a encontrar, contratar y gestionar los mejores talentos de la región.
            </p>
          </div>
          <a>
            <FormButton 
              text="Empezá tu camino"
              className="bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            />
          </a>
        </div>
        <div className="flex items-start pr-20">
          <IconOngTestimony />
        </div>
      </main>
    </>
  );
};
