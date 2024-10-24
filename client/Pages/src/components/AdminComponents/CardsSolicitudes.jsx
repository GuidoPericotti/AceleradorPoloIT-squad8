import React, { useState } from 'react';
import { ButtonCardAdmin } from './ButtonCardAdmin';
import { ModalLogin } from '../Login/LoginComponents/ModalLogin';

export const CardsSolicitudes = ({ tipo, darkMode }) => {
  const [showModalAdmin, setShowModalAdmin] = useState(false);

  const handleOpenModal = () => {
    setShowModalAdmin(true);
  };

  const handleModalClose = () => {
    setShowModalAdmin(false);
  };

  return ( 
    <div className={`admlg:ms-8 admlg:w-[400px] bg-[#C6E5D6] w-full border-2 rounded-2xl mb-4 p-2 adms:w-[150px] dark:text-white ${darkMode ? 'bg-gray-900' : 'bg-[#F3F9F6]'}`}>
    <div className="flex flex-col ml-6">
      {/* Botón de cerrar */}
      <div className="flex justify-end mb-1">
        <button
          className="border-slate-900 p-2 rounded-lg"
          onClick={handleOpenModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 adms:h-5 adms:w-5"
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
      </div>
  
      {/* Contenedor para la imagen y el texto */}
      <div className="flex items-center space-x-4">
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <strong className="admlg:text-lg adms:text-xs">Nombre {tipo}</strong>
            <p className="text-xs sm:text-sm adms:text-2xs text-gray-400">Recibido hace 3hs</p>
          </div>
        </div>
      </div>
  
      {/* Botón Ver más */}
      <div className="mt-4 -ml-7 adms:-ml-4 admlg:w-[240px] admlg:ml-14 adms:mr-4">
        <ButtonCardAdmin nombre="Ver más" />
      </div>
    </div>
  
    {/* Modal */}
    {showModalAdmin && (
      <ModalLogin
        onClose={handleModalClose}
        message="¿Quiere rechazar esta solicitud?"
        messagep="La solicitud cambiará de estado de pendiente a rechazado"
        buttonText="Rechazar"
        extraButtonText="Cancelar"
        onExtraButtonClick={() => alert('Rechazado')}
      />
    )}
  </div>
  
  );
};