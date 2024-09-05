import React from 'react';
import InputField from './InputField';

const OngName = ({ register }) => {
  return (
    <div className="mb-4 relative">
      <p className="block font-medium text-gray-500 dark:text-gray-400 text-sm mb-1">
        Nombre de la ONG
      </p>
      
      <InputField
        type="text"
        ariaLabel="Nombre"
        {...register('name', { required: true })}
        className="block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-700 dark:text-gray-300 focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0"
        id="Nombre"
      />
    </div>
  );
};

export default OngName;
