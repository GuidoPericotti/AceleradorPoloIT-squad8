import React, { useState, useEffect } from "react";

const ModalAddMentor = ({ isOpen, closeModal, addMentor, initialData }) => {
  const [formData, setFormData] = useState({
    name: "",
    mainTech: "",
    secondaryTech: "",
    email: "",
    dni: "",
    birthDate: "",
    phone: "",
  });

  // Usar useEffect para actualizar los campos del formulario cuando se selecciona un mentor para editar
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
    addMentor(formData);
    closeModal(); // Cierra el modal después de guardar
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed left-0 top-0 z-[1055] h-full w-full bg-black bg-opacity-50 flex justify-center items-center"
      tabIndex="-1"
      role="dialog"
    >
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

        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-2">
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded"
              value={formData.name}
              onChange={handleChange}
              required
              id="nombre_mentor"
            />
          </div>
          <div className="mb-2">
            <label>Apellido</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded"
              value={formData.name}
              onChange={handleChange}
              required
              id="apellido_mentor"
            />
          </div>

          <div className="mb-2">
            <label>Tec. principal</label>
            <input
              type="text"
              name="mainTech"
              className="w-full p-2 border rounded"
              value={formData.mainTech}
              onChange={handleChange}
              required
              id="tecnologia_mentor"
            />
          </div>

          <div className="mb-2">
            <label>Tec. secundaria</label>
            <input
              type="text"
              name="secondaryTech"
              className="w-full p-2 border rounded"
              value={formData.secondaryTech}
              onChange={handleChange}
              required
              id="tecnologiasec1_mentor"
            />
          </div>

          <div className="mb-2">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded"
              value={formData.email}
              onChange={handleChange}
              required
              id="email_mentor"
            />
          </div>

          <div className="mb-2">
            <label>Número de DNI</label>
            <input
              type="text"
              name="dni"
              className="w-full p-2 border rounded"
              value={formData.dni}
              onChange={handleChange}
              required
              id="dni_mentor"
            />
          </div>

          <div className="mb-2">
            <label>Edad</label>
            <input
              type="text"
              name="age"
              className="w-full p-2 border rounded"
              value={formData.age}
              onChange={handleChange}
              required
              id="edad_mentor"
            />
          </div>

          <div className="mb-2">
            <label>Número de Teléfono</label>
            <input
              type="tel"
              name="phone"
              className="w-full p-2 border rounded"
              value={formData.phone}
              onChange={handleChange}
              required
              id="telefono_mentor"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="inline-block rounded bg-gray-200 px-4 py-2 text-xs font-medium uppercase mr-2"
              onClick={closeModal}
            >
              Cerrar
            </button>
            <button
              type="submit"
              className="inline-block rounded bg-blue-500 text-white px-4 py-2 text-xs font-medium uppercase"
            >
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAddMentor;
