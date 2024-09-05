import React, { useState } from 'react';

const CreateCourseModal = ({ onClose }) => {
  const [courseTitle, setCourseTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para guardar el curso
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Crear Curso</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Título del Curso</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-lg"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Descripción</label>
            <textarea
              className="mt-1 p-2 w-full border rounded-lg"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-400 text-white rounded-lg"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCourseModal;
