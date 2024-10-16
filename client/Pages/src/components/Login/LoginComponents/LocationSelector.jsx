import React, { useState } from 'react';
import InputLocation from './InputLocation';
import InputProvincias from './InputProvincias';

const LocationSelector = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  return (
    <div className="mb-4">
      {/* El componente InputLocation permite seleccionar el país */}
      <InputLocation
        selectedCountry={selectedCountry}
        onCountryChange={setSelectedCountry}
        className="block w-full mt-1 border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-800 text-black	 dark:text-gray-300"
      />

      {/* El componente InputProvincias muestra las provincias basadas en el país seleccionado */}
      <InputProvincias
        selectedCountry={selectedCountry}
        className="block w-full mt-1 border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-800 text-black	 dark:text-gray-300"
      />
    </div>
  );
};

export default LocationSelector;
