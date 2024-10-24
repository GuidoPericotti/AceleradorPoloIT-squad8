import React from 'react';

const Modal = ({ onClose, children, title }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div
        className={`bg-white p-6 rounded-lg shadow-lg w-full max-w-xs 
        adms:max-w-xs admlg:max-w-sm`}
      >
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
