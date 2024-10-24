import React, { useState } from 'react'; 
import { LogoSolicitudes } from './LogoSolicitudes';
import { ButtonOngEmpresa } from './ButtonOngEmpresa';
import { CardsSolicitudes } from './CardsSolicitudes';
import { SidebarOng } from '../OngSide/OngComponents/Navbar/SidebarOng';
import SquadManagement from './SquadManagement';

export const CardPrincipal = ({ darkMode }) => {
  // const [filter, setFilter] = useState('');
  const [currentView, setCurrentView] = useState('solicitudes');

  // const allCards = [
  //   { id: 1, tipo: 'Pendiente', Nombre: 'ONG' },
  //   { id: 2, tipo: 'Rechazado', Nombre: 'ONG' },
  //   { id: 3, tipo: 'Pendiente', Nombre: 'ONG' },
  //   { id: 4, tipo: 'Aprobado', Nombre: 'Empresa' },
  //   { id: 5, tipo: 'Rechazado', Nombre: 'Empresa' },
  //   { id: 6, tipo: 'Pendiente', Nombre: 'Empresa' },
  //   { id: 7, tipo: 'Aprobado', Nombre: 'ONG' },
  //   { id: 8, tipo: 'Rechazado', Nombre: 'Empresa' },
  //   { id: 9, tipo: 'Pendiente', Nombre: 'Empresa' }
  // ];

  // const filteredCards = allCards.filter(card => filter === '' || card.tipo === filter);

  // const handleFilterChange = (filterType) => {
  //   setFilter(prevFilter => prevFilter === filterType ? '' : filterType);
  // };

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const renderMainContent = () => {
    if (currentView === 'squads') {
      return <SquadManagement darkMode={darkMode} />;
    } else {
      return (
        <div className="admlg:grid adms:pl-24 admlg:grid-cols-2 admlg:ml-32 adms:grid adms:grid-cols-2  adms:space-x-1">
         
            <CardsSolicitudes  darkMode={darkMode} />
         
        </div>
      );
    }
  };

  return (
   
    <div className="relative min-h-screen dark:bg-gray-800 adms:right-5">
      {/* Sidebar fijo */}
     
        <div className="fixed h-full adms:mr-[190px]">
          <SidebarOng 
            darkMode={darkMode} 
            onViewChange={handleViewChange}
            currentView={currentView}
          />
        
      </div>

      {/* Contenido principal con margen izquierdo para el sidebar */}
      <div className="ml-[10px] pt-20 ">
        {/* Header */}
        <main className="sticky top-[80px] z-0 flex items-center bg-gradient-to-r from-[#76B596] via-[#41849D] to-[#034AA6] p-4 w-[90%] rounded-t-3xl dark:bg-gray-600 flex-col sm:flex-row justify-center mx-auto">
          <div className="flex items-center justify-center">
            <LogoSolicitudes />
            <h2 className="mx-4 text-lg font-semibold text-gray-700 dark:text-white">Solicitudes</h2>
            <LogoSolicitudes />
          </div>
        </main>

        {/* Botones de filtro */}
        {/* {currentView !== 'squads' && (
          <section className="mt-8 flex justify-center sm:justify-end w-full px-4">
            <div className="flex flex-wrap justify-center space-x-2 adms:space-x-1">
              <ButtonOngEmpresa 
                nombre="Pendiente" 
                filterType="Pendiente" 
                currentFilter={filter} 
                onClick={() => handleFilterChange('Pendiente')} 
              />
              <ButtonOngEmpresa 
                nombre="Aprobado" 
                filterType="Aprobado" 
                currentFilter={filter} 
                onClick={() => handleFilterChange('Aprobado')} 
              />
              <ButtonOngEmpresa 
                nombre="Rechazado" 
                filterType="Rechazado" 
                currentFilter={filter} 
                onClick={() => handleFilterChange('Rechazado')} 
              />
            </div>
          </section>
        )} */}

        {/* Contenido principal */}
        <section className="mt-8 px-8 dark:dark:bg-gray-800">
          {renderMainContent()}
        </section>
      </div>
    </div>
  );
};