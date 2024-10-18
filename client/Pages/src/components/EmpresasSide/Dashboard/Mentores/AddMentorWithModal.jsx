import React, { useState } from 'react';
import ModalAddMentor from './ModalAddMentor';

const AddMentorWithModal = ({ addMentor, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded">
        Añadir Estudiante
      </button>
      <ModalAddMentor isOpen={isOpen} closeModal={closeModal} addMentor={addMentor} darkMode={darkMode} />
    </>
  );
};

export default AddMentorWithModal;
    