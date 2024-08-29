import React, { useState, useEffect } from 'react';
import countries from './countries.json'; // Asegúrate de que la ruta sea correcta

const InputProvincias = ({ selectedCountry }) => {
  const [provincias, setProvincias] = useState([]);
  const [localities, setLocalities] = useState([]);
  const geoNamesUsername = 'andyliporace';

  useEffect(() => {
    if (!selectedCountry) return;

    const countryGeonameId = countries[selectedCountry];

    if (!countryGeonameId) {
      console.error(`No geonameId found for country code: ${selectedCountry}`);
      return;
    }

    // Fetch provinces/states within the selected country (using GeoNames API)
    fetch(
      `http://api.geonames.org/childrenJSON?geonameId=${countryGeonameId}&username=${geoNamesUsername}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data.geonames) {
          console.error('Unexpected response structure:', data);
          return;
        }

        const provinceList = data.geonames.map((province) => ({
          name: province.name,
          geonameId: province.geonameId,
        }));
        setProvincias(provinceList);
        setLocalities([]); // Reset localities when country changes
      })
      .catch((error) => console.error('Error fetching provinces:', error));
  }, [selectedCountry]);

  const handleProvinciaChange = (event) => {
    const provinciaGeonameId = event.target.value;

    // Fetch localities within the selected province/state (using GeoNames API)
    fetch(
      `http://api.geonames.org/searchJSON?adminCode1=${provinciaGeonameId}&featureClass=P&maxRows=10&username=${geoNamesUsername}`
    )
      .then((response) => response.json())
      .then((data) => {
        const localityList = data.geonames.map((locality) => locality.name);
        setLocalities(localityList);
      })
      .catch((error) => console.error('Error fetching localities:', error));
  };

  return (
    <div>
      {provincias.length > 0 && (
        <div className="mb-4">
          <select
            onChange={handleProvinciaChange}
            className="peer block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-gray-700 dark:text-gray-300 placeholder-transparent focus:border-sky-500 dark:focus:border-sky-300 focus:outline-none focus:ring-0"
          >
            <option value="">Selecciona una Provincia</option>
            {provincias.map((provincia) => (
              <option key={provincia.geonameId} value={provincia.geonameId}>
                {provincia.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {localities.length > 0 && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Selecciona una Localidad
          </label>
          <select
            className="block w-full mt-1 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:border-indigo-500 dark:focus:border-indigo-300 focus:ring-indigo-500 dark:focus:ring-indigo-300"
          >
            <option value="">Selecciona una localidad</option>
            {localities.map((locality, index) => (
              <option key={index} value={locality}>
                {locality}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default InputProvincias;
