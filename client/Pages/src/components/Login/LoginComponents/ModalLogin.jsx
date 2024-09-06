import React from 'react';

export const ModalLogin = ({ onClose, title, message, buttonText, extraButtonText, onExtraButtonClick }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{message}</p>
        <div className="modal-action">
          {extraButtonText && (
            <button 
              className="-mb-[73px] ml-20 h-12 inline-block px-3 py-3.5 mt-2 font-bold text-center text-white align-middle transition-all ease-in bg-150 bg-x-25 border-0 rounded-lg cursor-pointer text-sm leading-normal tracking-tight-soft shadow-soft-md bg-gradient-to-tl from-gray-900 to-slate-800 hover:scale-102 hover:shadow-soft-xs active:opacity-85"
              onClick={onExtraButtonClick}
            >
              {extraButtonText}
            </button>
          )}
          <button 
            className="ml-80 h-12 inline-block px-3 py-3.5 mt-2 mb-2 font-bold text-center text-white align-middle transition-all ease-in bg-150 bg-x-25 border-0 rounded-lg cursor-pointer text-sm leading-normal tracking-tight-soft shadow-soft-md bg-gradient-to-tl from-gray-900 to-slate-800 hover:scale-102 hover:shadow-soft-xs active:opacity-85"
            onClick={onClose}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};
