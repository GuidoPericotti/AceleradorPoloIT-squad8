

import React, { useState } from 'react';

export const ButtonCardAdmin = ({ nombre }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleButtonClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <button
      className={`rounded-lg px-14 py-4 text-sm font-semibold border ${isSelected ? 'bg-gray-500 text-white border-slate-950 border-2' : 'btn-outline'}`}
      onClick={handleButtonClick}
    >
      {nombre}
    </button>
  );
};
