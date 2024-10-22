import React from 'react';

export const ModalLogin = ({ onClose, title, message, messagep,buttonText, extraButtonText, onExtraButtonClick }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="w-full max-w-lg p-6 bg-[#C6E5D6] rounded-lg shadow-lg">
        <h3 className="font-bold text-lg">{title}</h3>
        <strong className="py-4 font-bold text-lg">{message}</strong>
        <p className="py-4">{messagep}</p>
        <div className="modal-action">
          {extraButtonText && (
            <button 
              className="-mb-[73px] ml-44 h-12 inline-block px-9 border-2 border-[#8BACD6] mt-2 font-bold text-center text-black align-middle transition-all ease-in bg-150 bg-x-25 rounded-lg cursor-pointer text-sm leading-normal tracking-tight-soft shadow-soft-md bg-gradient-to-tl bg-[#B1C7E380] hover:scale-102 hover:shadow-soft-xs active:opacity-85"
              onClick={onExtraButtonClick}
            >
              {extraButtonText}
            </button>
          )}
          <button 
            className="ml-80 h-12 inline-block px-9  mt-2 mb-2 font-bold text-center text-white align-middle transition-all ease-in bg-150 bg-x-25 border-0 rounded-lg cursor-pointer text-sm leading-normal tracking-tight-soft shadow-soft-md bg-gradient-to-tl bg-[#D9526B] hover:scale-102 hover:shadow-soft-xs active:opacity-85"
            onClick={onClose}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};