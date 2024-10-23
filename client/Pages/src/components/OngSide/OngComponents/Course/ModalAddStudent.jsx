import React, { useState, useEffect } from "react";

const ModalAddStudent = ({ isOpen, closeModal, addStudent, initialData }) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    surname: initialData?.surname || "",
    perfil: initialData?.perfil || "",
    telefono: initialData?.telefono || "",
    dni: initialData?.dni || "",
    edad: initialData?.edad || "",
    email: initialData?.email || "",
    condicion: initialData?.condicion || ""
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed left-0 top-0 z-[1055] h-full w-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative flex w-full max-w-md flex-col rounded-md bg-white shadow-lg">
        <div className="flex items-center justify-between rounded-t-md border-b-2 p-4">
          <h5 className="text-xl font-medium">
            {initialData ? "Editar Estudiante" : "Añadir Estudiante"}
          </h5>
          <button
            type="button"
            className="text-neutral-500 hover:text-neutral-800 focus:text-neutral-800"
            onClick={closeModal}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-2">
            <div className="mb-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                type="text"
                id="nombre_estudiante"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Apellido</label>
              <input
                type="text"
                id="apellido_estudiante"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="perfil" className="block text-sm font-medium text-gray-700">Perfil</label>
              <select
                id="perfil_estudiante"
                name="perfil"
                value={formData.perfil}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Seleccionar Perfil</option>
                <option value="desarrollador">Desarrollador</option>
                <option value="tester">Tester</option>
                <option value="uiux">UI/UX</option>
              </select>
            </div>

            <div className="mb-2">
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
              <input
                type="text"
                id="telefono_estudiante"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="dni" className="block text-sm font-medium text-gray-700">DNI</label>
              <input
                type="text"
                id="dni_estudiante"
                name="dni"
                value={formData.dni}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="edad" className="block text-sm font-medium text-gray-700">Edad</label>
              <input
                type="text"
                id="edad_estudiante"
                name="edad"
                value={formData.edad}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email_estudiante"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="condicion" className="block text-sm font-medium text-gray-700">Condición</label>
              <select
                id="condicion_estudiante"
                name="condicion"
                value={formData.condicion}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Seleccionar Condición</option>
                <option value="egresado">Egresado</option>
                <option value="regular">Regular</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-end border-t-2 p-4">
            <button
              type="button"
              className="mr-2 inline-block rounded-md px-4 py-2 bg-gray-300 text-gray-700 hover:bg-gray-400"
              onClick={closeModal}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="inline-block rounded-md px-4 py-2 bg-blue-500 text-white hover:bg-blue-600"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAddStudent;
