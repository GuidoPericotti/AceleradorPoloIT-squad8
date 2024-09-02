import React from 'react';

export const ButtonOngEmpresa = ({ nombre, filterType, currentFilter, onClick }) => {
  const isSelected = filterType === currentFilter;

  const handleButtonClick = () => {
    onClick(); // Llama a la función onClick pasada como prop
  };

  return (
    <button
      className={`rounded-lg px-32 py-4 text-sm font-semibold border ${isSelected ? 'bg-gray-500 text-white border-slate-950 border-2' : 'btn-outline'}`}
      onClick={handleButtonClick}
    >
      {nombre}
    </button>
  );
};
