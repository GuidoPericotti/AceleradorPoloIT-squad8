import React, { useState } from 'react';
import { ModalInfo } from './ModalInfo'; // Importa el componente Modal

export const ButtonCardAdmin = ({ nombre }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsSelected(!isSelected);
    setIsModalOpen(true); // Mostrar el modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Cerrar el modal
  };

  return (
    <>
      <button
        className={`w-full lg:w-52 md:w-52 sm:w-40 rounded-lg mx-2 sm:mx-8 py-4 text-sm font-semibold border ${isSelected ? 'bg-[#034AA6] text-white border-[#034AA6] border-2' : 'bg-[#B1C7E380] border-[#8BACD6] text-black border-2 btn-outline'}`}
        onClick={handleButtonClick}
      >
        {nombre}
      </button>

      {/* Modal */}
      <ModalInfo isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default ButtonCardAdmin;
