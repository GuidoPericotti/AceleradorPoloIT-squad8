import React from 'react';

export const ModalLogin = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h3 className="font-bold text-lg">¡Formulario enviado con éxito!</h3>
        <p className="py-4">Serás redirigido a la página de inicio.</p>
        <div className="modal-action">
          <button 
          className="btn inline-block w-full px-16 py-3.5 mt-6 mb-2 font-bold text-center text-white align-middle transition-all ease-in bg-150 bg-x-25 border-0 rounded-lg cursor-pointer text-sm leading-normal tracking-tight-soft shadow-soft-md bg-gradient-to-tl from-gray-900 to-slate-800 hover:scale-102 hover:shadow-soft-xs active:opacity-85"
          onClick={onClose}>Aceptar</button>
        </div>
      </div>
    </div>
  );
};
