// import React, { useState } from 'react';

// export const SidebarOng = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [organization, setOrganization] = useState('');
//   const [date, setDate] = useState('');

//   return (
//     <section className="bg-gray-100 w-[200px] h-full fixed pt-20">
//       <div className="p-4">
//         {/* Input de filtro por nombre */}
//         <div className="mb-4">
//           <label htmlFor="search" className="block text-sm text-gray-700 font-bold">Filtrar por nombre</label>
//           <input
//             type="text"
//             id="search"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full px-2 py-1 mt-1 border rounded"
//             placeholder="Buscar por nombre"
//           />
//         </div>

//         {/* Formulario con select de Organización y Fecha */}
//         <form>
//           {/* Select de organización */}
//           <div className="mb-4">
//             <label htmlFor="organization" className="block text-sm text-gray-700"></label>
//             <select
//               id="organization"
//               value={organization}
//               onChange={(e) => setOrganization(e.target.value)}
//               className="w-full px-2 py-1 mt-1 border rounded"
//             >
//               <option value="">Organización</option>
//               <option value="Empresa">Empresa</option>
//               <option value="ONG">ONG</option>
//             </select>
//           </div>

//           {/* Input de fecha */}
//           <div className="mb-4">
//             <label htmlFor="date" className="block text-sm text-gray-700">Fecha</label>
//             <input
//               type="date"
//               id="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               className="w-full px-2 py-1 mt-1 border rounded"
//             />
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };
//  import React, { useState } from 'react';

//  export const SidebarOng = () => {
//    const [searchTerm, setSearchTerm] = useState('');
//    const [organization, setOrganization] = useState('');
//    const [date, setDate] = useState('');

//    return (
//      <section className="md:-mt-7 md:ml-1 sm:-mt-7 sm:ml-1 -mt-7 ml-1 md:w-1/4 sm:w-1/5 bg-gray-100 h-full fixed pt-16 sm:pt-20 lg:w-[180px]">
//        <div className="p-2 sm:p-4">
//          {/* Input de filtro por nombre */}
//          <div className="mb-3 sm:mb-4">
//            <label htmlFor="search" className="block text-xs sm:text-sm text-gray-700 font-bold">Filtrar por nombre</label>
//            <input
//              type="text"
//              id="search"
//              value={searchTerm}
//              onChange={(e) => setSearchTerm(e.target.value)}
//              className="w-full px-1 sm:px-2 py-1 mt-1 border rounded text-xs sm:text-sm"
//              placeholder="Buscar por nombre"
//            />
//          </div>

//          {/* Formulario con select de Organización y Fecha */}
//          <form>
//            {/* Select de organización */}
//            <div className="mb-3 sm:mb-4">
//              <label htmlFor="organization" className="block text-xs sm:text-sm text-gray-700">Organización</label>
//              <select
//                id="organization"
//                value={organization}
//                onChange={(e) => setOrganization(e.target.value)}
//                className="w-full px-1 sm:px-2 py-1 mt-1 border rounded text-xs sm:text-sm"
//              >
//                <option value="">Seleccionar Organización</option>
//                <option value="Empresa">Empresa</option>
//                <option value="ONG">ONG</option>
//              </select>
//            </div>

//            {/* Input de fecha */}
//            <div className="mb-3 sm:mb-4">
//              <label htmlFor="date" className="block text-xs sm:text-sm text-gray-700">Fecha</label>
//              <input
//                type="date"
//                id="date"
//                value={date}
//                onChange={(e) => setDate(e.target.value)}
//                className="w-full px-1 sm:px-2 py-1 mt-1 border rounded text-xs sm:text-sm"
//              />
//            </div>
//          </form>
//        </div>
//      </section>
//    );
//  };


// import React, { useState } from 'react';

// export const SidebarOng = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [organization, setOrganization] = useState('');
//   const [date, setDate] = useState('');

//   return (
//     <section className="md:-mt-7 md:ml-1 sm:-mt-7 sm:ml-1 -mt-7 ml-1 md:w-1/4 sm:w-1/5 bg-gray-100 dark:bg-gray-600 h-full fixed pt-16 sm:pt-20 lg:w-[180px]">
//       <div className="p-2 sm:p-4">
//         {/* Input de filtro por nombre */}
//         <div className="mb-3 sm:mb-4">
//           <label htmlFor="search" className="block text-xs sm:text-sm text-gray-700 dark:text-gray-200 font-bold">Filtrar por nombre</label>
//           <input
//             type="text"
//             id="search"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full px-1 sm:px-2 py-1 mt-1 border rounded text-xs sm:text-sm bg-white dark:bg-gray-600 dark:text-white border-gray-300 dark:border-gray-600"
//             placeholder="Buscar por nombre"
//           />
//         </div>

//         {/* Formulario con select de Organización y Fecha */}
//         <form>
//           {/* Select de organización */}
//           <div className="mb-3 sm:mb-4">
//             <label htmlFor="organization" className="block text-xs sm:text-sm text-gray-700 dark:text-gray-200">Organización</label>
//             <select
//               id="organization"
//               value={organization}
//               onChange={(e) => setOrganization(e.target.value)}
//               className="w-full px-1 sm:px-2 py-1 mt-1 border rounded text-xs sm:text-sm bg-white dark:bg-gray-600 dark:text-white border-gray-300 dark:border-gray-600"
//             >
//               <option value="">Seleccionar Organización</option>
//               <option value="Empresa">Empresa</option>
//               <option value="ONG">ONG</option>
//             </select>
//           </div>

//           {/* Input de fecha */}
//           <div className="mb-3 sm:mb-4">
//             <label htmlFor="date" className="block text-xs sm:text-sm text-gray-700 dark:text-gray-200">Fecha</label>
//             <input
//               type="date"
//               id="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               className="w-full px-1 sm:px-2 py-1 mt-1 border rounded text-xs sm:text-sm bg-white dark:bg-gray-600 dark:text-white border-gray-300 dark:border-gray-600"
//             />
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

import React, { useState } from 'react';

export const SidebarOng = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [organization, setOrganization] = useState('');
  const [date, setDate] = useState('');

  return (
    <section className="admlg:w-44 sm:-mt-7 sm:ml-1 adms:w-[100px] adms:-mt-32 adms:ml-5 sm:w-[150px] bg-gray-100 dark:bg-gray-600 h-full fixed pt-16 sm:pt-20 adms:pt-14 adms:bg-gray-100 dark:adms:bg-gray-700">
      <div className="p-2 sm:p-4 adms:p-1">
        {/* Input de filtro por nombre */}
        <div className="mb-3 sm:mb-4 adms:mb-2">
          <label htmlFor="search" className="block text-xs sm:text-sm adms:text-2xs text-gray-700 dark:text-gray-200 font-bold">Filtrar por nombre</label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-1 sm:px-2 adms:px-1 py-1 mt-1 border rounded text-xs sm:text-sm adms:text-2xs bg-white dark:bg-gray-600 dark:text-white border-gray-300 dark:border-gray-600"
            placeholder="Buscar por nombre"
          />
        </div>

        {/* Formulario con select de Organización y Fecha */}
        <form>
          {/* Select de organización */}
          <div className="mb-3 sm:mb-4 adms:mb-2">
            <label htmlFor="organization" className="block text-xs sm:text-sm adms:text-2xs text-gray-700 dark:text-gray-200">Organización</label>
            <select
              id="organization"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              className="w-full px-1 sm:px-2 adms:px-1 py-1 mt-1 border rounded text-xs sm:text-sm adms:text-2xs bg-white dark:bg-gray-600 dark:text-white border-gray-300 dark:border-gray-600"
            >
              <option value="">Seleccionar Organización</option>
              <option value="Empresa">Empresa</option>
              <option value="ONG">ONG</option>
            </select>
          </div>

          {/* Input de fecha */}
          <div className="mb-3 sm:mb-4 adms:mb-2">
            <label htmlFor="date" className="block text-xs sm:text-sm adms:text-2xs text-gray-700 dark:text-gray-200">Fecha</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-1 sm:px-2 adms:px-1 py-1 mt-1 border rounded text-xs sm:text-sm adms:text-2xs bg-white dark:bg-gray-600 dark:text-white border-gray-300 dark:border-gray-600"
            />
          </div>
        </form>
      </div>
    </section>
  );
};
