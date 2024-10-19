// import React, { useState } from 'react';
// import { LogoSolicitudes } from './LogoSolicitudes';
// import { ButtonOngEmpresa } from './ButtonOngEmpresa';
// import { CardsSolicitudes } from './CardsSolicitudes';
// import { SidebarOng } from '../OngSide/OngComponents/Navbar/SidebarOng';
// import SquadManagement from './SquadManagement';

// export const CardPrincipal = ({darkMode}) => {
//   const [filter, setFilter] = useState('');
//   const [currentView, setCurrentView] = useState('solicitudes'); // Nuevo estado para controlar la vista

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
//    // Función para cambiar la vista
//    const handleViewChange = (view) => {
//     setCurrentView(view);
//   };
//   // Función para renderizar el contenido principal
//   const renderMainContent = () => {
//     if (currentView === 'squads') {
//       return <SquadManagement darkMode={darkMode} />;
//     } else {
//       return (
//         <div className="grid-cols-2">
//           {filteredCards.map(card => (
//             <CardsSolicitudes key={card.id} tipo={card.Nombre} darkMode={darkMode} />
//           ))}
//         </div>
//       );
//     }
//   };

//   return (
//     <div className="pt-20 flex flex-col items-center dark:bg-gray-800">
//       <main className="admlg:-ml-10 adms:-ml-8 sticky top-[80px] flex items-center bg-gradient-to-r from-[#76B596] via-[#41849D] to-[#034AA6] p-4 w-[90%] rounded-t-3xl dark:bg-gray-600 flex-col sm:flex-row justify-center">
//         <div className="flex items-center justify-center">
//           <LogoSolicitudes />
//           <h2 className="mx-4 text-lg font-semibold text-gray-700 dark:text-white">Solicitudes</h2>
//           <LogoSolicitudes />
//         </div>
//       </main>

//       {/* Botones de filtro */}
//       <section className="mt-8 flex justify-center sm:justify-end w-full px-4 sm:pl-44 adms:pl-8">
//         <div className="flex flex-wrap justify-center space-x-2 sm:space-x-2 adms:space-x-1">
//           <ButtonOngEmpresa nombre="Pendiente" filterType="Pendiente" currentFilter={filter} onClick={() => handleFilterChange('Pendiente')} />
//           <ButtonOngEmpresa nombre="Aprobado" filterType="Aprobado" currentFilter={filter} onClick={() => handleFilterChange('Aprobado')} />
//           <ButtonOngEmpresa nombre="Rechazado" filterType="Rechazado" currentFilter={filter} onClick={() => handleFilterChange('Rechazado')} />
//         </div>
//       </section>

//       {/* Contenedor principal de columnas */}
//       {/* <section className="flex flex-col sm:flex-row w-full mt-8 adms:mr-8 adms:mt-14 admlg:ml-20 admlg:mt-[46px]">
//       <div className="adms:ml-3 adms:mt-3 sm:w-[160px] adms:w-[120px] mb-8 z-0">
//       <SidebarOng darkMode={darkMode}/>
//         </div>
//       </section> */}
//       <section className="flex flex-col sm:flex-row w-full mt-8 adms:mr-8 adms:mt-14 admlg:ml-20 admlg:mt-[46px]">
//         <div className="adms:ml-3 adms:mt-3 sm:w-[160px] adms:w-[120px] mb-8 z-0">
//           <SidebarOng 
//             darkMode={darkMode} 
//             onViewChange={handleViewChange}
//             currentView={currentView}
//           />
//         </div>
//       </section>
//       <section>
//         {renderMainContent()}
//       </section>
//       <section>
//         <div className="admlg:grid adms:pl-40 admlg:grid-cols-2 admlg:pr-32 adms:grid adms:grid-cols-2 adms:mr-14 adms:space-x-5 adms:-mt-14">
//         {filteredCards.map(card => (
//           <CardsSolicitudes key={card.id} tipo={card.Nombre}  darkMode={darkMode}/>
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
import SquadManagement from './SquadManagement';

export const CardPrincipal = ({ darkMode }) => {
  const [filter, setFilter] = useState('');
  const [currentView, setCurrentView] = useState('solicitudes'); // Nuevo estado para controlar la vista

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

  // Función para cambiar la vista
  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  // Función para renderizar el contenido principal
  const renderMainContent = () => {
    if (currentView === 'squads') {
      return <SquadManagement darkMode={darkMode} />;
    } else {
      return (
        <div className="admlg:grid adms:pl-40 admlg:grid-cols-2 admlg:pr-32 adms:grid adms:grid-cols-2 adms:mr-14 adms:space-x-5 adms:-mt-14">
          {filteredCards.map(card => (
            <CardsSolicitudes key={card.id} tipo={card.Nombre} darkMode={darkMode} />
          ))}
        </div>
      );
    }
  };

  return (
    <div className="pt-20 flex flex-col items-center dark:bg-gray-800">
      <main className="admlg:-ml-10 adms:-ml-8 sticky top-[80px] flex items-center bg-gradient-to-r from-[#76B596] via-[#41849D] to-[#034AA6] p-4 w-[90%] rounded-t-3xl dark:bg-gray-600 flex-col sm:flex-row justify-center">
        <div className="flex items-center justify-center">
          <LogoSolicitudes />
          <h2 className="mx-4 text-lg font-semibold text-gray-700 dark:text-white">Solicitudes</h2>
          <LogoSolicitudes />
        </div>
      </main>

      {/* Botones de filtro, mostrar solo si la vista no es 'squads' */}
      {currentView !== 'squads' && (
        <section className="mt-8 flex justify-center sm:justify-end w-full px-4 sm:pl-44 adms:pl-8">
          <div className="flex flex-wrap justify-center space-x-2 sm:space-x-2 adms:space-x-1">
            <ButtonOngEmpresa nombre="Pendiente" filterType="Pendiente" currentFilter={filter} onClick={() => handleFilterChange('Pendiente')} />
            <ButtonOngEmpresa nombre="Aprobado" filterType="Aprobado" currentFilter={filter} onClick={() => handleFilterChange('Aprobado')} />
            <ButtonOngEmpresa nombre="Rechazado" filterType="Rechazado" currentFilter={filter} onClick={() => handleFilterChange('Rechazado')} />
          </div>
        </section>
      )}

      {/* Contenedor principal de columnas y sidebar */}
      <section className="flex flex-col sm:flex-row w-full mt-8 adms:mr-8 adms:mt-14 admlg:ml-20 admlg:mt-[46px]">
        <div className="adms:ml-3 adms:mt-3 sm:w-[160px] adms:w-[120px] mb-8 z-0">
          <SidebarOng 
            darkMode={darkMode} 
            onViewChange={handleViewChange}
            currentView={currentView}
          />
        </div>
      </section>

      {/* Mostrar contenido principal basado en la vista */}
      <section>
        {renderMainContent()}
      </section>

      {/* Cards de solicitudes, mostrar solo si la vista no es 'squads' */}
      {/* {currentView !== 'squads' && (
        <section>
          <div className="admlg:grid adms:pl-40 admlg:grid-cols-2 admlg:pr-32 adms:grid adms:grid-cols-2 adms:mr-14 adms:space-x-5 adms:-mt-14">
            {filteredCards.map(card => (
              <CardsSolicitudes key={card.id} tipo={card.Nombre} darkMode={darkMode} />
            ))}
          </div>  
        </section>
      )} */}
    </div>
  );
};
