

import React from 'react';

export const ButtonOngEmpresa = ({ nombre, filterType, currentFilter, onClick }) => {
  const isSelected = filterType === currentFilter;

  const handleButtonClick = () => {
    onClick();
  };

  return (
    <button
      className={`dark:text-white rounded-lg px-6 py-2 admlg:w-[200px] admlg:h-[50px] adms:ml-12 adms:px-0.5 adms:py-1 text-sm adms:text-xs font-semibold border ${isSelected ? 'bg-[#034AA6] text-white border-[#034AA6] border-2' : 'text-[#034AA6] border-2 btn-outline border-[#034AA6]'} adms:w-[100px] sm:w-auto`}
      onClick={handleButtonClick}
    >
      {nombre}
    </button>
  );
};
