

//  import React from 'react';
// export const TitlePerfil = ({ darkMode }) => {
//   return (
//     <header className={`
//       mt-20 font-bold uppercase w-full h-16 rounded-tl-3xl rounded-tr-3xl 
//       flex justify-center items-center
//       ${darkMode 
//         ? 'bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900' 
//         : 'bg-gradient-to-r from-[#76b596] via-[#41839d] to-[#034aa6]'}
//       transition-colors duration-300
//     `}>
//       <h1 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-[#1e1e1e]'}`}>
//         Perfil
//       </h1>
//     </header>  
//   );
// };
import React, { useEffect, useState } from 'react';

export const TitlePerfil = ({ darkMode }) => {
  const [nombreEmpresa, setNombreEmpresa] = useState('');

  useEffect(() => {
    const fetchNombreEmpresa = async () => {
      try {
        const response = await fetch('/http://localhost:3000/api/empresa'); // Reemplaza con tu endpoint
        const data = await response.json();
        if (data && data.nombre_empresa) {
          setNombreEmpresa(data.nombre_empresa); // Actualiza el nombre de la empresa
        }
      } catch (error) {
        console.error('Error al recuperar el nombre de la empresa:', error);
      }
    };

    fetchNombreEmpresa(); // Llama a la función para cargar el nombre
  }, []);

  return (
    <header className={`
      mt-20 font-bold uppercase w-full h-16 rounded-tl-3xl rounded-tr-3xl 
      flex justify-center items-center
      ${darkMode 
        ? 'bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-r from-[#76b596] via-[#41839d] to-[#034aa6]'}
      transition-colors duration-300
    `}>
      <h1 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-[#1e1e1e]'}`}>
        {nombreEmpresa || 'Nombre de la Empresa'} {/* Muestra "Perfil" si no hay nombre */}
      </h1>
    </header>  
  );
};
