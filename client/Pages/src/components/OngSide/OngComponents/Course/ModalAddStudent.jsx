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

// import React, { useState, useEffect } from "react";

// const ModalAddStudent = ({ isOpen, closeModal, addStudent, initialData }) => {
//   const [formData, setFormData] = useState({
//     name: initialData?.name || "",
//     surname: initialData?.surname || "",
//     perfil: initialData?.perfil || "",    
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
//         <form onSubmit={handleSubmit}>
//           <div className="p-4">
//             <div className="mb-0.5">
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
//               <input
//                 id="nombre_estudiante"
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               />
//             </div>
//             <div className="mb-0.5">
//               <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Apellido</label>
//               <input
//                 id="apellido_estudiante"
//                 type="text"
//                 name="surname"
//                 value={formData.surname}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               />
//             </div>
//             <div className="mb-0.5">
//               <label htmlFor="perfil" className="block text-sm font-medium text-gray-700">Tecnología</label>
//               <input
//                 id="tecnologia_estudiante"
//                 type="text"
//                 name="perfil"
//                 value={formData.perfil}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               />
//             </div>
//             <div className="mb-0.5">
//               <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Telefono</label>
//               <input
//                 id="telefono_estudiante"
//                 type="text"
//                 name="telefono"
//                 value={formData.telefono}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               />
//             </div>
//             <div className="mb-0.5">
//               <label htmlFor="dni" className="block text-sm font-medium text-gray-700">DNI</label>
//               <input
//                 id="dni_estudiante"
//                 type="text"
//                 name="dni"
//                 value={formData.dni}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               />
//             </div>
//             <div className="mb-0.5">
//               <label htmlFor="edad" className="block text-sm font-medium text-gray-700">Edad</label>
//               <input
//                 id="edad_estudiante"
//                 type="text"
//                 name="edad"
//                 value={formData.edad}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               />
//             </div>
//             <div className="mb-0.5">
//               <label htmlFor="perfil" className="block text-sm font-medium text-gray-700">Perfil</label>
//               <input
//                 id="tecnologia_estudiante"
//                 type="text"
//                 name="perfil"
//                 value={formData.perfil}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               />
//             </div>
//             <div className="mb-0.5">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 id="email_estudiante"
//                 type="text"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               />
//             </div>
//             <div className="mb-0.5">
//               <label htmlFor="condicion" className="block text-sm font-medium text-gray-700">Perfil</label>
//               <select
//                 id="condicion_estudiante"
//                 name="condicion"
//                 value={formData.condicion}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               >
//                 <option value="" disabled>Selecciona un perfil</option>
//                 <option value="egresado">Egresado</option>
//                 <option value="regular">Regular</option>
//               </select>
//             </div>
//           </div>
//           <div className="flex items-center justify-end border-t-2 p-4">
//             <button
//               type="button"
//               className="mr-2 inline-block px-4 py-2 bg-gray-300 text-gray-700 hover:bg-gray-400"
//               onClick={closeModal}
//             >
//               Cancelar
//             </button>
//             <button
//               type="submit"
//               className="inline-block px-4 py-2 bg-blue-500 text-white hover:bg-blue-600"
//             >
//               Guardar
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ModalAddStudent;

import React, { useState, useEffect } from "react";

// Mock database
const mockDatabase = {
  names: [
    { id: 1, value: "Juan" },
    { id: 2, value: "María" },
    { id: 3, value: "Carlos" },
    { id: 4, value: "Ana" }
  ],
  surnames: [
    { id: 1, value: "García" },
    { id: 2, value: "López" },
    { id: 3, value: "Martínez" },
    { id: 4, value: "Rodriguez" }
  ],
  technologies: [
    { id: 1, value: "JavaScript" },
    { id: 2, value: "Python" },
    { id: 3, value: "Java" },
    { id: 4, value: "React" }
  ],
  phones: [
    { id: 1, value: "1234567890" },
    { id: 2, value: "0987654321" },
    { id: 3, value: "5555555555" }
  ],
  dnis: [
    { id: 1, value: "12345678" },
    { id: 2, value: "87654321" },
    { id: 3, value: "11223344" }
  ],
  ages: [
    { id: 1, value: "18" },
    { id: 2, value: "19" },
    { id: 3, value: "20" },
    { id: 4, value: "21" },
    { id: 5, value: "22" }
  ],
  profiles: [
    { id: 1, value: "Frontend Developer" },
    { id: 2, value: "Backend Developer" },
    { id: 3, value: "Full Stack Developer" },
    { id: 4, value: "QA Engineer" }
  ],
  emails: [
    { id: 1, value: "juan@example.com" },
    { id: 2, value: "maria@example.com" },
    { id: 3, value: "carlos@example.com" }
  ]
};

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
          <div className="p-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
              <select
                id="nombre_estudiante"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Seleccionar Nombre</option>
                {mockDatabase.names.map((name) => (
                  <option key={name.id} value={name.value}>
                    {name.value}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Apellido</label>
              <select
                id="apellido_estudiante"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Seleccionar Apellido</option>
                {mockDatabase.surnames.map((surname) => (
                  <option key={surname.id} value={surname.value}>
                    {surname.value}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="perfil" className="block text-sm font-medium text-gray-700">Tecnología</label>
              <select
                id="tecnologia_estudiante"
                name="perfil"
                value={formData.perfil}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Seleccionar Tecnología</option>
                {mockDatabase.technologies.map((tech) => (
                  <option key={tech.id} value={tech.value}>
                    {tech.value}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
              <select
                id="telefono_estudiante"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Seleccionar Teléfono</option>
                {mockDatabase.phones.map((phone) => (
                  <option key={phone.id} value={phone.value}>
                    {phone.value}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="dni" className="block text-sm font-medium text-gray-700">DNI</label>
              <select
                id="dni_estudiante"
                name="dni"
                value={formData.dni}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Seleccionar DNI</option>
                {mockDatabase.dnis.map((dni) => (
                  <option key={dni.id} value={dni.value}>
                    {dni.value}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="edad" className="block text-sm font-medium text-gray-700">Edad</label>
              <select
                id="edad_estudiante"
                name="edad"
                value={formData.edad}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Seleccionar Edad</option>
                {mockDatabase.ages.map((age) => (
                  <option key={age.id} value={age.value}>
                    {age.value}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <select
                id="email_estudiante"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Seleccionar Email</option>
                {mockDatabase.emails.map((email) => (
                  <option key={email.id} value={email.value}>
                    {email.value}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
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