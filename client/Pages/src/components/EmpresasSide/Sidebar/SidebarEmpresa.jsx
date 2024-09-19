// import React from 'react';

// export const SidebarEmpresa = () => {
//   return (
//     <div className="w-64 h-full bg-gray-200 p-4 pt-20">
//       {/* Botón con imagen y texto Perfil */}
//       <button className="flex items-center w-full p-2 mb-4 bg-white hover:bg-gray-300 rounded-lg shadow">
//         <img
//           src="https://via.placeholder.com/40"
//           alt="Perfil"
//           className="w-10 h-10 rounded-full mr-3"
//         />
//         <span className="text-lg font-medium">Perfil</span>
//       </button>

//       {/* Select para Proyectos */}
//       <div className="mb-4">
//         <label htmlFor="proyectos" className="block text-sm font-medium mb-2">Proyectos</label>
//         <select
//           id="proyectos"
//           className="w-full p-2 bg-white border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
//         >
//           <option value="proyecto1">Proyecto 1</option>
//           <option value="proyecto2">Proyecto 2</option>
//           <option value="proyecto3">Proyecto 3</option>
//         </select>
//       </div>

//       {/* Select para Participantes */}
//       <div>
//         <label htmlFor="participantes" className="block text-sm font-medium mb-2">Participantes</label>
//         <select
//           id="participantes"
//           className="w-full p-2 bg-white border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
//         >
//           <option value="participante1">Participante 1</option>
//           <option value="participante2">Participante 2</option>
//           <option value="participante3">Participante 3</option>
//         </select>
//       </div>
//     </div>
//   );
// };

import React from 'react';

export const SidebarEmpresa = ({ onProfileClick }) => {
  return (
    <div className="w-64 h-full bg-gray-200 p-4 pt-20">
      {/* Botón con imagen y texto Perfil */}
      <button
        className="flex items-center w-full p-2 mb-4 bg-white hover:bg-gray-300 rounded-lg shadow"
        onClick={onProfileClick} // Manejar clic para mostrar la card de perfil
      >
        <img
          src="https://via.placeholder.com/40"
          alt="Perfil"
          className="w-10 h-10 rounded-full mr-3"
        />
        <span className="text-lg font-medium">Perfil</span>
      </button>

      {/* Select para Proyectos */}
      <div className="mb-4">
        <label htmlFor="proyectos" className="block text-sm font-medium mb-2">Proyectos</label>
        <select
          id="proyectos"
          className="w-full p-2 bg-white border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
        >
          <option value="proyecto1">Proyecto 1</option>
          <option value="proyecto2">Proyecto 2</option>
          <option value="proyecto3">Proyecto 3</option>
        </select>
      </div>

      {/* Select para Participantes */}
      <div>
        <label htmlFor="participantes" className="block text-sm font-medium mb-2">Participantes</label>
        <select
          id="participantes"
          className="w-full p-2 bg-white border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
        >
          <option value="participante1">Participante 1</option>
          <option value="participante2">Participante 2</option>
          <option value="participante3">Participante 3</option>
        </select>
      </div>
    </div>
  );
};
