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
          title="¡Tu solicitud ha sido aprobada!" // Título dinámico
          message="¡Felicidades tu solicitud ha sido aprobada y ya eres 
          parte de nuestra comunidad! 
        Has clic en aceptar para continuar "
          extraButtonText="Aceptar" // Texto del botón extra (opcional)
          onExtraButtonClick={() => console.log('Botón de más información clicado')} // Acción del botón extra
        />
      )}
    </div>
  );
};
