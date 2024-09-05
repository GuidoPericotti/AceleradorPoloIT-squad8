//  import React, { useState, useEffect } from 'react';
//  const InputLocation = ({ selectedCountry, onCountryChange }) => {
//    const [countries, setCountries] = useState([]);

//    useEffect(() => {
//     //  Fetch all countries (using REST Countries API)
//      fetch('https://restcountries.com/v3.1/subregion/South America')
//        .then((response) => response.json())
//        .then((data) => {
//          const countryList = data.map((country) => ({
//            name: country.name.common,
//            code: country.cca2,
//          }));
//          setCountries(countryList);
//        })
//        .catch((error) => console.error('Error fetching countries:', error));
//    }, []);

//    const handleCountryChange = (event) => {
//      const countryCode = event.target.value;
//      onCountryChange(countryCode);  //Pasar la selección al componente padre
//    };

//    return (
//      <div className="mb-4">
//        <select
//          value={selectedCountry}
//          onChange={handleCountryChange}
//          className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 placeholder-transparent focus:border-sky-500 focus:outline-none focus:ring-0"
//        >
//          <option value="">Selecciona un País</option>
//          {countries.map((country) => (
//            <option key={country.code} value={country.code}>
//              {country.name}
//            </option>
//          ))}
//        </select>
//      </div>
//    );
//  };

//  export default InputLocation;

// import React, { useState, useEffect } from 'react';

// const InputLocation = ({ selectedCountry, onCountryChange }) => {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     // Fetch all countries (using REST Countries API)
//     fetch('https://restcountries.com/v3.1/subregion/South America')
//       .then((response) => response.json())
//       .then((data) => {
//         const countryList = data.map((country) => ({
//           name: country.name.common,
//           code: country.cca2,
//         }));
//         setCountries(countryList);
//       })
//       .catch((error) => console.error('Error fetching countries:', error));
//   }, []);

//   const handleCountryChange = (event) => {
//     const countryCode = event.target.value;
//     onCountryChange(countryCode);  // Pasar la selección al componente padre
//   };

//   return (
//     <div className="mb-4">
//       <select
//         value={selectedCountry}
//         onChange={handleCountryChange}
//         className="peer block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-gray-700 dark:text-gray-300 placeholder-transparent focus:border-sky-500 focus:outline-none focus:ring-0"
//       >
//         <option value="">Selecciona un País</option>
//         {countries.map((country) => (
//           <option key={country.code} value={country.code}>
//             {country.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default InputLocation;
import React, { useState, useEffect, forwardRef } from 'react';

const InputLocation = forwardRef(({ selectedCountry, onCountryChange }, ref) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/subregion/South America')
      .then((response) => response.json())
      .then((data) => {
        const countryList = data.map((country) => ({
          name: country.name.common,
          code: country.cca2,
        }));
        setCountries(countryList);
      })
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);

  const handleCountryChange = (event) => {
    const countryCode = event.target.value;
    onCountryChange(countryCode);
  };

  return (
    <div className="mb-4">
      <select
        ref={ref}
        value={selectedCountry}
        onChange={handleCountryChange}
        className="peer block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-gray-700 dark:text-gray-300 placeholder-transparent focus:border-sky-500 focus:outline-none focus:ring-0"
      >
        <option value="">Selecciona un País</option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
});

export default InputLocation;
