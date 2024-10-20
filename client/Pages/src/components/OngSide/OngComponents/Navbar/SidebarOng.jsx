// import React, { useState } from 'react';
// import {SquadPanel} from '../../../AdminComponents/SquadPanel'

// export const SidebarOng = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [organization, setOrganization] = useState('');
//   const [date, setDate] = useState('');
//   const [showSquadPanel, setShowSquadPanel] = useState(false);


//   return (
//     <section className="admlg:w-44 sm:-mt-7 sm:ml-1 adms:w-[100px] adms:-mt-32 adms:ml-5 sm:w-[150px] bg-[#C6E5D6] dark:bg-gray-600 h-full fixed pt-16 sm:pt-20 adms:pt-14 adms:bg-[#C6E5D6] dark:adms:bg-gray-700">
//       <div className="p-2 sm:p-4 adms:p-1">
//         <div>
//         <div className="flex-grow p-4 overflow-y-auto">
//         <button
//                 onClick={() => setShowSquadPanel(!showSquadPanel)}
//                 className="flex items-center admlg:w-56 w-full p-2 mb-4 rounded-lg shadow transition-colors duration-200 adms:w-28 adms:-ml-2 hover:bg-green-100"
//               >
//                 <img
//                   src="https://via.placeholder.com/40"
//                   alt="ConfPerfil"
//                   className="w-10 h-10 rounded-full mr-3 adms:w-9 adms:h-9 adms:mr-1"
//                 />
//                 <span className="text-lg font-medium adms:text-xs">SQUADS</span>
//               </button>

//           </div>
//         </div>
//         {/* Input de filtro por nombre */}
//         <div className="mb-3 sm:mb-4 adms:mb-2">
//           <label htmlFor="search" className="block text-xs sm:text-sm adms:text-2xs text-gray-700 dark:text-gray-200 font-bold">Filtrar por nombre</label>
//           <input
//             type="text"
//             id="search"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full px-1 sm:px-2 adms:px-1 py-1 mt-1 border rounded text-xs sm:text-sm adms:text-2xs bg-white dark:bg-gray-600 dark:text-white border-gray-300 dark:border-gray-600"
//             placeholder="Buscar por nombre"
//           />
//         </div>

//         {/* Formulario con select de Organización y Fecha */}
//         <form>
//           {/* Select de organización */}
//           <div className="mb-3 sm:mb-4 adms:mb-2">
//             <label htmlFor="organization" className="block text-xs sm:text-sm adms:text-2xs text-gray-700 dark:text-gray-200">Organización</label>
//             <select
//               id="organization"
//               value={organization}
//               onChange={(e) => setOrganization(e.target.value)}
//               className="w-full px-1 sm:px-2 adms:px-1 py-1 mt-1 border rounded text-xs sm:text-sm adms:text-2xs bg-white dark:bg-gray-600 dark:text-white border-gray-300 dark:border-gray-600"
//             >
//               <option value="">Seleccionar Organización</option>
//               <option value="Empresa">Empresa</option>
//               <option value="ONG">ONG</option>
//             </select>
//           </div>

//           {/* Input de fecha */}
//           <div className="mb-3 sm:mb-4 adms:mb-2">
//             <label htmlFor="date" className="block text-xs sm:text-sm adms:text-2xs text-gray-700 dark:text-gray-200">Fecha</label>
//             <input
//               type="date"
//               id="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               className="w-full px-1 sm:px-2 adms:px-1 py-1 mt-1 border rounded text-xs sm:text-sm adms:text-2xs bg-white dark:bg-gray-600 dark:text-white border-gray-300 dark:border-gray-600"
//             />
//           </div>
//         </form>
//       </div>
//       <SquadPanel 
//         showPanel={showSquadPanel} 
//         onClose={() => setShowSquadPanel(false)} 
//       />
//     </section>
//   );
// };

// import React, { useState } from 'react';
// import { SquadsView } from '../../../AdminComponents/SquadsView'; // Nueva vista que contiene squads

// export const SidebarOng = () => {
//   const [showSquads, setShowSquads] = useState(false);

//   const handleShowSquads = () => {
//     setShowSquads(!showSquads);
//   };

//   return (
//     <section className="admlg:w-44 sm:-mt-7 sm:ml-1 adms:w-[100px] adms:-mt-32 adms:ml-5 sm:w-[150px] bg-[#C6E5D6] dark:bg-gray-600 h-full fixed pt-16 sm:pt-20 adms:pt-14 adms:bg-[#C6E5D6] dark:adms:bg-gray-700">
//       <div className="p-2 sm:p-4 adms:p-1">
//         <div>
//           <div className="flex-grow p-4 overflow-y-auto">
//             <button
//               onClick={handleShowSquads}
//               className="flex items-center admlg:w-56 w-full p-2 mb-4 rounded-lg shadow transition-colors duration-200 adms:w-28 adms:-ml-2"
//             >
//               <img
//                 src="https://via.placeholder.com/40"
//                 alt="ConfPerfil"
//                 className="w-10 h-10 rounded-full mr-3 adms:w-9 adms:h-9 adms:mr-1"
//               />
//               <span className="text-lg font-medium adms:text-xs">SQUADS</span>
//             </button>
//           </div>
//         </div>

//         {/* Mostrar vista lateral si se presiona el botón */}
//         {showSquads && <SquadsView />}
        
//         {/* Input de filtrado */}
//         <div className="mb-3 sm:mb-4 adms:mb-2">
//           <label htmlFor="search" className="block text-xs sm:text-sm adms:text-2xs text-gray-700 dark:text-gray-200 font-bold">
//             Filtrar por nombre
//           </label>
//           <input
//             type="text"
//             id="search"
//             className="w-full px-1 sm:px-2 adms:px-1 py-1 mt-1 border rounded text-xs sm:text-sm adms:text-2xs bg-white dark:bg-gray-600 dark:text-white border-gray-300 dark:border-gray-600"
//             placeholder="Buscar por nombre"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

import React, { useState } from 'react';
import SquadManagement from '../../../AdminComponents/SquadManagement';

export const SidebarOng = ({ onViewChange, currentView}) => {
  const [showSquads, setShowSquads] = useState(false);

  const handleShowSquads = () => {
    setShowSquads(!showSquads);
  };

  return (
    <>
      <section className="admlg:w-44 sm:-mt-7 sm:ml-1 adms:w-[100px] adms:-mt-32 adms:ml-5 sm:w-[150px] bg-[#C6E5D6] dark:bg-gray-600 h-full fixed pt-16 sm:pt-20 adms:pt-14 adms:bg-[#C6E5D6] dark:adms:bg-gray-700">
        <div className="p-2 sm:p-4 adms:p-1">
          <div>
            <div className="flex-grow p-4 overflow-y-auto">
            <button
              onClick={() => onViewChange(currentView === 'squads' ? 'solicitudes' : 'squads')}
              className={`button-class bg-white hover:bg-gray-400
                flex items-center admlg:w-40 w-full p-2 mb-4 rounded-lg shadow
              transition-colors duration-200 adms:w-28 adms:-ml-2
               ${currentView === 'squads' ? 'active' : ''}`}
            >
                <img
                  src="https://via.placeholder.com/40"
                  alt="ConfPerfil"
                  className="w-10 h-10 rounded-full mr-3 adms:w-9 adms:h-9 adms:mr-1"
                />
                <span className="text-lg font-medium adms:text-xs">SQUADS</span>
              </button>
            </div>
          </div>

          {/* Input de filtrado */}
          <div className="mb-3 sm:mb-4 adms:mb-2">
            <label htmlFor="search" className="block text-xs sm:text-sm adms:text-2xs text-gray-700 dark:text-gray-200 font-bold">
              Filtrar por nombre
            </label>
            <input
              type="text"
              id="search"
              className="w-full px-1 sm:px-2 adms:px-1 py-1 mt-1 border rounded text-xs sm:text-sm adms:text-2xs bg-white dark:bg-gray-600 dark:text-white border-gray-300 dark:border-gray-600"
              placeholder="Buscar por nombre"
            />
          </div>
        </div>
      </section>

      {/* Render SquadManagement conditionally */}
      {showSquads && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleShowSquads} />
          <div className="absolute right-0 top-0 h-full w-[calc(100%-16rem)] bg-white shadow-xl">
            <SquadManagement onClose={handleShowSquads} />
          </div>
        </div>
      )}
    </>
  );
};