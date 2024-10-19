// import React from 'react';

// export const ModalInfo = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="relative bg-white p-6 rounded-lg shadow-lg">
//         {/* Botón de cruz en la esquina superior derecha */}
//         <button
//           className="absolute top-2 right-2 p-2 rounded-full text-gray-700 hover:text-gray-900"
//           onClick={onClose} // Usar la función onClose para cerrar el modal
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>

//         <h2 className="text-lg font-semibold">Este es el Modal</h2>
//         <p className="mt-4">Nombre de la Ong/Empresa</p>
//         <p className="mt-4">Información de la ONG/Empresa</p>
//         <p className="mt-4">Contenido del modal...</p>

//         <div className="mt-4 flex justify-end space-x-3">
//           <button
//             className="px-4 py-2 bg-sky-500 text-white rounded"
//             onClick={onClose}
//           >
//             Aceptar
//           </button>
//           <button
//             className="px-4 py-2 bg-sky-500 text-white rounded"
//             onClick={onClose}
//           >
//             Rechazar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// ./src/components/AdminComponents/ModalInfo.jsx

import React, { useState, useEffect } from 'react';

export const ModalInfo = ({ isOpen, onClose, data }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');
  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');

  // Actualizar el estado cuando 'data' cambia
  useEffect(() => {
    if (data) {
      console.log('Datos recibidos en ModalInfo:', data);
      setName(data.name || '');
      setLocation(data.location || '');
      setPhone(data.phone || '');
      setEmail(data.email || '');
      setInstagram(data.instagram || '');
      setFacebook(data.facebook || '');
      setTwitter(data.twitter || '');
    }
  }, [data]);

  // Si el modal no está abierto, no renderizar nada
  if (!isOpen) return null;

  // Función para manejar el guardado de la información
  const handleSave = async () => {
    const updatedData = {
      ...data,
      name,
      location,
      phone,
      email,
      instagram,
      facebook,
      twitter,
    };
    
    console.log('Información actualizada:', updatedData);

    try {
      // Aquí puedes realizar una llamada a tu API para guardar los cambios
      // Por ejemplo:
      /*
      const response = await fetch('/api/update-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar la información');
      }

      // Opcional: Actualizar el contexto de autenticación si es necesario
      // login(updatedData);
      */

      // Por ahora, simplemente cerramos el modal
      onClose();
    } catch (error) {
      console.error('Error al guardar la información:', error);
      alert('Ocurrió un error al guardar la información. Por favor, intenta de nuevo.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-[#82C7A5] dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
        {/* Botón de cerrar */}
        <button
          className="absolute top-4 right-2 p-2 rounded-full text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
          onClick={onClose}
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Título */}
        <h2 className="text-lg font-semibold mb-1">Información de la {data?.role}</h2>
        <hr className="mb-1" />

        {/* Nombre */}
        <div className="mb-1">
          <label className="block text-black dark:text-gray-300">Nombre de la {data?.role}</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-1 border rounded-lg dark:bg-gray-700 dark:border-gray-600 text-gray-700 dark:text-gray-200"
            placeholder={`Nombre de la ${data?.role}`}
          />
        </div>

        {/* Localización */}
        <div className="mb-1">
          <label className="block text-black dark:text-gray-300">Localización</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-1 border rounded-lg dark:bg-gray-700 dark:border-gray-600 text-gray-700 dark:text-gray-200"
            placeholder="Localización"
          />
        </div>

        {/* Número de Teléfono */}
        <div className="mb-1">
          <label className="block text-black dark:text-gray-300">Número de Teléfono</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-1 border rounded-lg dark:bg-gray-700 dark:border-gray-600 text-gray-700 dark:text-gray-200"
            placeholder="Número de Teléfono"
          />
        </div>

        {/* Correo Electrónico */}
        <div className="mb-1">
          <label className="block text-black dark:text-gray-300">Correo Electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-1 border rounded-lg dark:bg-gray-700 dark:border-gray-600 text-gray-700 dark:text-gray-200"
            placeholder="Correo Electrónico"
          />
        </div>

        {/* Canales Digitales Oficiales */}
        <div className="mb-1">
          <label className="block text-black dark:text-gray-300">Canales Digitales Oficiales</label>
          <div className="mt-2 space-y-2">
            <div>
              <label className="block text-black dark:text-gray-300">Instagram</label>
              <input
                type="text"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                className="w-full px-3 py-1 border rounded-lg dark:bg-gray-700 dark:border-gray-600 text-gray-700 dark:text-gray-200"
                placeholder="Instagram"
              />
            </div>
            <div>
              <label className="block text-black dark:text-gray-300">Facebook</label>
              <input
                type="text"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
                className="w-full px-3 py-1 border rounded-lg dark:bg-gray-700 dark:border-gray-600 text-gray-700 dark:text-gray-200"
                placeholder="Facebook"
              />
            </div>
            <div>
              <label className="block text-black dark:text-gray-300">Twitter</label>
              <input
                type="text"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
                className="w-full px-3 py-1 border rounded-lg dark:bg-gray-700 dark:border-gray-600 text-gray-700 dark:text-gray-200"
                placeholder="Twitter"
              />
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="mt-4 flex justify-end space-x-3">
          <button
            type="button"
            className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleSave}
          >
            Aprobar
          </button>
          <button
            type="button"
            className="px-4 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={onClose}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;
