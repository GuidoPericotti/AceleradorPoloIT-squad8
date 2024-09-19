// import React from 'react';

// export const ButtonOngEmpresa = ({ nombre, filterType, currentFilter, onClick }) => {
//   const isSelected = filterType === currentFilter;

//   const handleButtonClick = () => {
//     onClick(); // Llama a la función onClick pasada como prop
//   };

//   return (
//     <button
//       className={`rounded-lg px-24 py-4 text-sm font-semibold border ${isSelected ? 'bg-gray-500 text-white border-slate-950 border-2' : 'btn-outline'}`}
//       onClick={handleButtonClick}
//     >
//       {nombre}
//     </button>
//   );
// };

// import React from 'react';

// export const ButtonOngEmpresa = ({ nombre, filterType, currentFilter, onClick }) => {
//   const isSelected = filterType === currentFilter;

//   const handleButtonClick = () => {
//     onClick();
//   };

//   return (
//     <button
//   className={`dark:text-white rounded-lg px-6 py-2 sm:px-8 sm:py-3 text-sm font-semibold border ${isSelected ? 'bg-gray-500 text-white border-slate-950 border-2' : 'btn-outline'}`}
//   onClick={handleButtonClick}
// >
//   {nombre}
// </button>
//   );
// };

import React from 'react';

export const ButtonOngEmpresa = ({ nombre, filterType, currentFilter, onClick }) => {
  const isSelected = filterType === currentFilter;

  const handleButtonClick = () => {
    onClick();
  };

  return (
    <button
      className={`dark:text-white rounded-lg px-6 py-2 admlg:w-[200px] admlg:h-[50px] adms:ml-12 adms:px-0.5 adms:py-1 text-sm adms:text-xs font-semibold border ${isSelected ? 'bg-gray-500 text-white border-slate-950 border-2' : 'btn-outline'} adms:w-[100px] sm:w-auto`}
      onClick={handleButtonClick}
    >
      {nombre}
    </button>
  );
};
