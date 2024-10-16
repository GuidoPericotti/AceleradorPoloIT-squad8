
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
   <div className={`admlg:ms-8 admlg:w-[400px] bg-[#C6E5D6] w-full border-2 rounded-2xl mb-4 p-2 sm:p-4 adms:w-[200px] dark:text-white ${darkMode ? 'bg-gray-900' : 'bg-[#F3F9F6]'}`}>
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
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie"
            className="w-20 h-20 sm:w-16 sm:h-16 adms:w-12 adms:h-12 rounded-lg admlg:w-28 admlg:h-28"
          />
        </figure>
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <strong className="text-lg adms:text-lg">Nombre {tipo}</strong>
            <p className="text-xs sm:text-sm adms:text-2xs text-gray-400">Recibido hace 3hs</p>
          </div>
        </div>
      </div>
  
      {/* Botón Ver más */}
      <div className="mt-4 -ml-7 adms:-ml-4 admlg:w-[240px] admlg:ml-14">
        <ButtonCardAdmin nombre="Ver más" />
      </div>
    </div>
  
    {/* Modal */}
    {showModalAdmin && (
      <ModalLogin
        onClose={handleModalClose}
        message="¿Deseas rechazar la solicitud?"
        buttonText="Cancelar"
        extraButtonText="Rechazar"
        onExtraButtonClick={() => alert('Rechazado')}
      />
    )}
  </div>
  
  );
};
