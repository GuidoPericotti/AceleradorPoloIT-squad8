// import React, { useState, useEffect } from "react";

// const ModalAddStudent = ({ isOpen, closeModal, addStudent, initialData }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     surname: "",
//     mainTech: "",
//     email: "",
//     dni: "",
//     age: "",
//     phone: "",
//   });

//   useEffect(() => {
//     if (initialData) {
//       setFormData(initialData);
//     }
//   }, [initialData]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addStudent(formData);
//     closeModal();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed left-0 top-0 z-[1055] h-full w-full bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="relative flex w-full max-w-md flex-col rounded-md bg-white shadow-lg">
//         <div className="flex items-center justify-between rounded-t-md border-b-2 p-4">
//           <h5 className="text-xl font-medium">
//             {initialData ? "Editar Estudiante" : "Añadir Estudiante"}
//           </h5>
//           <button
//             type="button"
//             className="text-neutral-500 hover:text-neutral-800 focus:text-neutral-800"
//             onClick={closeModal}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="p-4">
//           <div className="mb-2">
//             <label>Nombre</label>
//             <input
//               type="text"
//               name="name"
//               className="w-full p-2 border rounded"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-2">
//             <label>Apellido</label>
//             <input
//               type="text"
//               name="surname"
//               className="w-full p-2 border rounded"
//               value={formData.surname}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-2">
//             <label>Tecnologia</label>
//             <input
//               type="text"
//               name="tecnologia"
//               className="w-full p-2 border rounded"
//               value={formData.tecnologia}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Otros campos como email, dni, etc. */}
          
//           <div className="flex justify-end">
//             <button
//               type="button"
//               className="inline-block rounded bg-gray-200 px-4 py-2 text-xs font-medium uppercase mr-2"
//               onClick={closeModal}
//             >
//               Cerrar
//             </button>
//             <button
//               type="submit"
//               className="inline-block rounded bg-blue-500 text-white px-4 py-2 text-xs font-medium uppercase"
//             >
//               Confirmar
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ModalAddStudent;

import React, { useState, useEffect } from "react";

const ModalAddStudent = ({ isOpen, closeModal, addStudent, initialData }) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    surname: initialData?.surname || "",
    perfil: initialData?.perfil || "",    
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                id="nombre_estudiante"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Apellido</label>
              <input
                id="apellido_estudiante"
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="perfil" className="block text-sm font-medium text-gray-700">Tecnología</label>
              <input
                id="tecnologia_estudiante"
                type="text"
                name="perfil"
                value={formData.perfil}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center justify-end border-t-2 p-4">
            <button
              type="button"
              className="mr-2 inline-block px-4 py-2 bg-gray-300 text-gray-700 hover:bg-gray-400"
              onClick={closeModal}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="inline-block px-4 py-2 bg-blue-500 text-white hover:bg-blue-600"
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
