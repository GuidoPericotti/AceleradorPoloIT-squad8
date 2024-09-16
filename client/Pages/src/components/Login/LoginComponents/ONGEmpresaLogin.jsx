
import React from 'react';

// Componente de seleccion si ONG o Empresa
const ONGEmpresaLogin = ({ onOptionChange }) => {
  return (
    <div className="pb-10">
      <label
        htmlFor="organizationType"
        className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-6"
      >
        Tipo de Organización
      </label>
      <select
        id="organizationType"
        className="peer block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-gray-700 dark:text-gray-300 placeholder-transparent focus:border-sky-500 focus:outline-none focus:ring-0"
        onChange={onOptionChange}
      >
        <option value="">Seleccione uno</option>
        <option value="Empresa">Empresa</option>
        <option value="ONG">ONG</option>
      </select>
    </div>
  );
};

export default ONGEmpresaLogin;
