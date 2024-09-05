import React, { useState } from 'react';
import { ButtonCardAdmin } from './ButtonCardAdmin';
import { ModalLogin } from '../Login/LoginComponents/ModalLogin';

export const CardsSolicitudes = ({ tipo }) => {
  const [showModalAdmin, setShowModalAdmin] = useState(false);

  const handleOpenModal = () => {
    setShowModalAdmin(true);
  };

  const handleModalClose = () => {
    setShowModalAdmin(false);
  };

  return (
    <div className="bg-base-100 w-96 border-2 rounded-2xl">
      <div className="mb-5 px-4 flex flex-col pt-2">
        {/* Botón de cruz en la esquina superior derecha */}
        <div className="flex justify-end mb-2">
          <button
            className="border-slate-900 p-2 rounded-lg"
            onClick={handleOpenModal}
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
        </div>

        {/* Contenedor para la imagen y el texto */}
        <div className="flex items-start space-x-4">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Movie"
              className="w-20 h-20 rounded-lg"
            />
          </figure>
          <div>
            <strong className="flex-1">Nombre {tipo}</strong>
            <p className="flex-1 text-gray-300">Recibido hace 3hs</p>
          </div>
        </div>

        {/* Botones separados y centrados */}
        <div className="flex justify-between mt-4">
          <ButtonCardAdmin nombre="Ver más" />
          <ButtonCardAdmin nombre="Aceptar" />
        </div>
      </div>

      {/* Mostrar el ModalLogin si showModalAdmin es true */}
      {showModalAdmin && (
        <ModalLogin
          onClose={handleModalClose}
        //   title="Acción requerida"
          message="¿Deseas rechazar la solicitud?"
          buttonText="Cancelar"
          extraButtonText="Rechazar"
          onExtraButtonClick={() => alert('Rechazado')} // Puedes cambiar esta acción según sea necesario
        />
      )}
    </div>
  );
};
