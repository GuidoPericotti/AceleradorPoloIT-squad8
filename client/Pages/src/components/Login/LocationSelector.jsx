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
        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      />

      {/* El componente InputProvincias muestra las provincias basadas en el país seleccionado */}
      <InputProvincias
        selectedCountry={selectedCountry}
        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>
  );
};

export default LocationSelector;
