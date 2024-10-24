import React, { useState } from 'react';
import { ModalLogin } from '../../../Login/LoginComponents/ModalLogin';

export const SolicitudAprobada = () => {
  const [isModalOpen, setModalOpen] = useState(true);

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && (
        <ModalLogin 
          onClose={handleClose}
          title="¡Tu solicitud ha sido rechazada!" // Título dinámico
          message="Lo sentimos mucho pero tu solicitud no cumple con los 
          requisitos básicos que pedimos para ser parte de 
          nuestra plataforma.   "
          extraButtonText="Aceptar" // Texto del botón extra (opcional)
          onExtraButtonClick={() => console.log('Botón de más información clicado')} // Acción del botón extra
        />
      )}
    </div>
  );
};
