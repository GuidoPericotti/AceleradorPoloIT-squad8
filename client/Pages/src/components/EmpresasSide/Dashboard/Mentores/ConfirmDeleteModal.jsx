import React from "react";

const ConfirmDeleteModal = ({ isOpen, closeModal, mentor, confirmDelete }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed left-0 top-0 z-[1055] h-full w-full bg-black bg-opacity-50 flex justify-center items-center"
      tabIndex="-1"
      role="dialog"
    >
      <div className="relative flex w-full max-w-md flex-col rounded-md bg-white shadow-lg">
        <div className="flex items-center justify-between rounded-t-md border-b-2 p-4">
          <h5 className="text-xl font-medium">¿Quiere eliminar a este estudiante?</h5>
          <button
            type="button"
            className="text-neutral-500 hover:text-neutral-800 focus:text-neutral-800"
            onClick={closeModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4">
          <p>Se eliminará a <strong>{mentor.name}</strong> de tu lista de estudiantes.</p>
          <div className="flex justify-end mt-4 space-x-3">
            <button
              className="inline-block rounded bg-gray-200 px-4 py-2 text-xs font-medium uppercase mr-2"
              onClick={closeModal}
            >
              Cancelar
            </button>
            <button
              className="inline-block rounded bg-red-600 text-white px-4 py-2 text-xs font-medium uppercase hover:bg-red-700"
              onClick={confirmDelete}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
