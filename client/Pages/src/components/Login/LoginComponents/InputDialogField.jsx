import React from 'react';

export const InputDialogField = () => {
  return (
    <div className="mb-4">
      <label 
        htmlFor="courses" 
        className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
      >
        Cursos a brindar:
      </label>
      <select 
        id="courses" 
        className="peer block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-gray-700 dark:text-gray-300 placeholder-transparent focus:border-sky-500 focus:outline-none focus:ring-0"
      >
        <option value="">Seleccione uno</option>
        <option value="Web">Programación en desarrollo WEB</option>
        <option value="Full">Full Stack</option>
        <option value="UX">UX</option>
        <option value="Marketing">Marketing digital</option>
      </select>
    </div>
  );
};
