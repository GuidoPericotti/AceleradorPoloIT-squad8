import React from 'react';

export const ModalInfo = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white p-6 rounded-lg shadow-lg">
        {/* Botón de cruz en la esquina superior derecha */}
        <button
          className="absolute top-2 right-2 p-2 rounded-full text-gray-700 hover:text-gray-900"
          onClick={onClose} // Usar la función onClose para cerrar el modal
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-lg font-semibold">Este es el Modal</h2>
        <p className="mt-4">Nombre de la Ong/Empresa</p>
        <p className="mt-4">Información de la ONG/Empresa</p>
        <p className="mt-4">Contenido del modal...</p>

        <div className="mt-4 flex justify-end space-x-3">
          <button
            className="px-4 py-2 bg-sky-500 text-white rounded"
            onClick={onClose}
          >
            Aceptar
          </button>
          <button
            className="px-4 py-2 bg-sky-500 text-white rounded"
            onClick={onClose}
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
};
