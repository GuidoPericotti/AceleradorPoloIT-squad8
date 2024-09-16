import React from 'react';

const ButtonGroup = ({ onCancel }) => {
  return (
    <div className="flex justify-end space-x-2">
      <button
        type="button"
        className="px-4 py-2 bg-gray-400 text-white rounded-lg"
        onClick={onCancel}
      >
        Cancelar
      </button>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
        Guardar
      </button>
    </div>
  );
};

export default ButtonGroup;