

import React from 'react';

const AddButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="mr-8 inline-flex items-center rounded-md border border-blue-500 bg-blue-500 text-white px-6 py-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-blue-600 hover:border-blue-600 focus:bg-blue-700 focus:border-blue-700 focus:outline-none"
      onClick={onClick}  // Ejecuta la función onClick que recibimos como prop
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 mr-2">
        <path d="M15 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zM12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-1-4h2v-2h-2v2zm-4 2h2v-2h-2v2zM6 12h2v-2H6v2zm-2-4h2v-2H4v2zm0 4h2v-2H4v2z" />
      </svg>
      Añadir
    </button>
  );
};

export default AddButton;
