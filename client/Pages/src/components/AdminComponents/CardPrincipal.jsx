

// import React, { useState } from 'react';
// import { LogoSolicitudes } from './LogoSolicitudes';
// import { ButtonOngEmpresa } from './ButtonOngEmpresa';
// import { CardsSolicitudes } from './CardsSolicitudes';
// import { SidebarOng } from '../OngSide/OngComponents/Navbar/SidebarOng';

// export const CardPrincipal = () => {
//   const [filter, setFilter] = useState('');

//   const allCards = [
//     { id: 1, tipo: 'Pendiente', Nombre: 'ONG' },
//     { id: 2, tipo: 'Rechazado', Nombre: 'ONG' },
//     { id: 3, tipo: 'Pendiente', Nombre: 'ONG' },
//     { id: 4, tipo: 'Aprobado', Nombre: 'Empresa' },
//     { id: 5, tipo: 'Rechazado', Nombre: 'Empresa' },
//     { id: 6, tipo: 'Pendiente', Nombre: 'Empresa' },
//     { id: 7, tipo: 'Aprobado', Nombre: 'ONG' },
//     { id: 8, tipo: 'Rechazado', Nombre: 'Empresa' },
//     { id: 9, tipo: 'Pendiente', Nombre: 'Empresa' }
//   ];

//   const filteredCards = allCards.filter(card => filter === '' || card.tipo === filter);

//   const handleFilterChange = (filterType) => {
//     setFilter(prevFilter => prevFilter === filterType ? '' : filterType);
//   };

//   return (
//     <div className="mt-20 flex flex-col items-center dark:bg-gray-800">
//       <main className="sticky top-[80px] flex items-center bg-gray-100 p-4 w-11/12 rounded-t-3xl dark:bg-gray-600 flex-col sm:flex-row justify-center">
//         <div className="flex items-center justify-center">
//           <LogoSolicitudes />
//           <h2 className="mx-4 text-lg font-semibold text-gray-700 dark:text-white">Solicitudes</h2>
//           <LogoSolicitudes />
//         </div>
//       </main>

//       {/* Botones de filtro */}
//       <section className="mt-8 flex justify-center sm:justify-end w-full px-4 sm:pl-44 md:w-full lg:mr-[720px] md:mr-[320px]">
//         <div className="flex flex-wrap justify-center space-x-2 sm:space-x-2 ">
//           <ButtonOngEmpresa nombre="Pendiente" filterType="Pendiente" currentFilter={filter} onClick={() => handleFilterChange('Pendiente')} />
//           <ButtonOngEmpresa nombre="Aprobado" filterType="Aprobado" currentFilter={filter} onClick={() => handleFilterChange('Aprobado')} />
//           <ButtonOngEmpresa nombre="Rechazado" filterType="Rechazado" currentFilter={filter} onClick={() => handleFilterChange('Rechazado')} />
//         </div>
//       </section>


//       {/* Contenedor principal de columnas */}
//       <section className="flex flex-col sm:flex-row w-full mt-8">
//         <div className="sm:w-1/5 md:w-1/6 mb-8 sm:mb-0 sm:-mt-24 sm:ml-7 md:ml-12">
//           <SidebarOng />
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-1 w-full ml-0 sm:ml-18 md:grid-cols-2 lg:grid-cols-3 lg:ml-7">
//         {filteredCards.map(card => (
//             <CardsSolicitudes key={card.id} tipo={card.Nombre} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// import React, { useState } from 'react';
// import { LogoSolicitudes } from './LogoSolicitudes';
// import { ButtonOngEmpresa } from './ButtonOngEmpresa';
// import { CardsSolicitudes } from './CardsSolicitudes';
// import { SidebarOng } from '../OngSide/OngComponents/Navbar/SidebarOng';

// export const CardPrincipal = () => {
//   const [filter, setFilter] = useState('');

//   const allCards = [
//     { id: 1, tipo: 'Pendiente', Nombre: 'ONG' },
//     { id: 2, tipo: 'Rechazado', Nombre: 'ONG' },
//     { id: 3, tipo: 'Pendiente', Nombre: 'ONG' },
//     { id: 4, tipo: 'Aprobado', Nombre: 'Empresa' },
//     { id: 5, tipo: 'Rechazado', Nombre: 'Empresa' },
//     { id: 6, tipo: 'Pendiente', Nombre: 'Empresa' },
//     { id: 7, tipo: 'Aprobado', Nombre: 'ONG' },
//     { id: 8, tipo: 'Rechazado', Nombre: 'Empresa' },
//     { id: 9, tipo: 'Pendiente', Nombre: 'Empresa' }
//   ];

//   const filteredCards = allCards.filter(card => filter === '' || card.tipo === filter);

//   const handleFilterChange = (filterType) => {
//     setFilter(prevFilter => prevFilter === filterType ? '' : filterType);
//   };

//   return (
//     <div className="mt-20 flex flex-col items-center dark:bg-gray-800">
//       <main className="adms:-ml-8 sticky top-[80px] flex items-center bg-gray-100 p-4 w-[90%] rounded-t-3xl dark:bg-gray-600 flex-col sm:flex-row justify-center">
//         <div className="flex items-center justify-center">
//           <LogoSolicitudes />
//           <h2 className="mx-4 text-lg font-semibold text-gray-700 dark:text-white">Solicitudes</h2>
//           <LogoSolicitudes />
//         </div>
//       </main>

//       {/* Botones de filtro */}
//       <section className="mt-8 flex justify-center sm:justify-end w-full px-4 sm:pl-44 adms:pl-8 lg:mr-[720px] md:mr-[320px]">
//         <div className="flex flex-wrap justify-center space-x-2 sm:space-x-2 adms:space-x-1">
//           <ButtonOngEmpresa nombre="Pendiente" filterType="Pendiente" currentFilter={filter} onClick={() => handleFilterChange('Pendiente')} />
//           <ButtonOngEmpresa nombre="Aprobado" filterType="Aprobado" currentFilter={filter} onClick={() => handleFilterChange('Aprobado')} />
//           <ButtonOngEmpresa nombre="Rechazado" filterType="Rechazado" currentFilter={filter} onClick={() => handleFilterChange('Rechazado')} />
//         </div>
//       </section>

//       {/* Contenedor principal de columnas */}
//       <section className="flex flex-col sm:flex-row w-full mt-8 adms:mr-8 adms:mt-14">
//         <div className="sm:w-[160px] adms:w-[120px] mb-8 sm:mb-0 sm:-mt-24 sm:ml-7 md:ml-12">
//           <SidebarOng />
//         </div>

//         <div className="adms:pl-40 grid grid-cols-1 sm:grid-cols-1 w-full ml-0 sm:ml-18 md:grid-cols-2 lg:grid-cols-3 lg:ml-7">
//           {filteredCards.map(card => (
//             <CardsSolicitudes key={card.id} tipo={card.Nombre} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

import React, { useState } from 'react';
import { LogoSolicitudes } from './LogoSolicitudes';
import { ButtonOngEmpresa } from './ButtonOngEmpresa';
import { CardsSolicitudes } from './CardsSolicitudes';
import { SidebarOng } from '../OngSide/OngComponents/Navbar/SidebarOng';

export const CardPrincipal = () => {
  const [filter, setFilter] = useState('');

  const allCards = [
    { id: 1, tipo: 'Pendiente', Nombre: 'ONG' },
    { id: 2, tipo: 'Rechazado', Nombre: 'ONG' },
    { id: 3, tipo: 'Pendiente', Nombre: 'ONG' },
    { id: 4, tipo: 'Aprobado', Nombre: 'Empresa' },
    { id: 5, tipo: 'Rechazado', Nombre: 'Empresa' },
    { id: 6, tipo: 'Pendiente', Nombre: 'Empresa' },
    { id: 7, tipo: 'Aprobado', Nombre: 'ONG' },
    { id: 8, tipo: 'Rechazado', Nombre: 'Empresa' },
    { id: 9, tipo: 'Pendiente', Nombre: 'Empresa' }
  ];

  const filteredCards = allCards.filter(card => filter === '' || card.tipo === filter);

  const handleFilterChange = (filterType) => {
    setFilter(prevFilter => prevFilter === filterType ? '' : filterType);
  };

  return (
    <div className="mt-20 flex flex-col items-center dark:bg-gray-800">
      <main className="admlg:-ml-10 adms:-ml-8 sticky top-[80px] flex items-center bg-gray-100 p-4 w-[90%] rounded-t-3xl dark:bg-gray-600 flex-col sm:flex-row justify-center">
        <div className="flex items-center justify-center">
          <LogoSolicitudes />
          <h2 className="mx-4 text-lg font-semibold text-gray-700 dark:text-white">Solicitudes</h2>
          <LogoSolicitudes />
        </div>
      </main>

      {/* Botones de filtro */}
      <section className="mt-8 flex justify-center sm:justify-end w-full px-4 sm:pl-44 adms:pl-8">
        <div className="flex flex-wrap justify-center space-x-2 sm:space-x-2 adms:space-x-1">
          <ButtonOngEmpresa nombre="Pendiente" filterType="Pendiente" currentFilter={filter} onClick={() => handleFilterChange('Pendiente')} />
          <ButtonOngEmpresa nombre="Aprobado" filterType="Aprobado" currentFilter={filter} onClick={() => handleFilterChange('Aprobado')} />
          <ButtonOngEmpresa nombre="Rechazado" filterType="Rechazado" currentFilter={filter} onClick={() => handleFilterChange('Rechazado')} />
        </div>
      </section>

      {/* Contenedor principal de columnas */}
      <section className="flex flex-col sm:flex-row w-full mt-8 adms:mr-8 adms:mt-14 admlg:ml-20 admlg:mt-10">
      <div className="sm:w-[160px] adms:w-[120px] mb-8 ">
      <SidebarOng />
        </div>
      </section>
      <section>
        <div className="admlg:grid adms:pl-40 admlg:grid-cols-3 admlg:pr-44">
        {filteredCards.map(card => (
          <CardsSolicitudes key={card.id} tipo={card.Nombre} />
          ))}
        </div>  
      </section>


    </div>
  );
};
