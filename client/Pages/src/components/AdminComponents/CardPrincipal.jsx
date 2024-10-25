
import React, { useState } from 'react';
import { LogoSolicitudes } from './LogoSolicitudes';
import { CardsSolicitudes } from './CardsSolicitudes';
import { SidebarOng } from '../OngSide/OngComponents/Navbar/SidebarOng';
import SquadManagement from './SquadManagement';

const CardPrincipal = ({ darkMode }) => {
  const [currentView, setCurrentView] = useState('solicitudes');
  const [selectedType, setSelectedType] = useState('empresa'); // 'empresa' | 'ong'

  // Lista de todas las tarjetas
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

  // Filtrar tarjetas según el tipo seleccionado
  const filteredCards = allCards.filter(card => {
    if (selectedType === 'empresa') {
      return card.Nombre === 'Empresa';
    } else if (selectedType === 'ong') {
      return card.Nombre === 'ONG';
    }
    return true;
  });

  // Función para cambiar la vista y el tipo
  const handleViewChange = (view) => {
    setCurrentView(view);
    if (view === 'empresa' || view === 'ong' ) {
      setSelectedType(view);
    }
  };

  // Renderizar el contenido principal
  const renderMainContent = () => {
    if (currentView === 'squads') {
      return <SquadManagement darkMode={darkMode} />;
    } else {
      return (
        <div className="admlg:grid adms:pl-24 admlg:grid-cols-2 admlg:ml-32 adms:grid adms:grid-cols-2 adms:space-x-1">
          {filteredCards.map((card) => (
            <CardsSolicitudes 
              key={card.id} 
              card={card} 
              solicitudes={[card]} 
              darkMode={darkMode} 
            />
          ))}
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
      <div className="ml-[10px] pt-20">
        {/* Header */}
        <main className="sticky top-[80px] z-0 flex items-center bg-gradient-to-r from-[#76B596] via-[#41849D] to-[#034AA6] p-4 w-[90%] rounded-t-3xl dark:bg-gray-600 flex-col sm:flex-row justify-center mx-auto">
          <div className="flex items-center justify-center">
            <LogoSolicitudes />
            <h2 className="mx-4 text-lg font-semibold text-gray-700 dark:text-white">
              {selectedType === 'empresa' ? 'Solicitudes' : 'Solicitudes'}
            </h2>
            <LogoSolicitudes />
          </div>
        </main>

        {/* Contenido principal */}
        <section className="mt-8 px-8 dark:dark:bg-gray-800">
          {renderMainContent()}
        </section>
      </div>
    </div>
  );
};

export default CardPrincipal;