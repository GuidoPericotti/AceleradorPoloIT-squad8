
import React, { useState } from 'react';
import { NavbarOng } from '../components/OngSide/OngComponents/Navbar/NavbarOng';
import { SidebarEmpresa } from '../components/EmpresasSide/Sidebar/SidebarEmpresa';
import { DashboardEmpresa } from '../components/EmpresasSide/Dashboard/DashboardEmpresa';
import { MentoresEmpresa } from '../components/EmpresasSide/Dashboard/Mentores/MentoresEmpresa'; // Ajusta la ruta según tu estructura

export const EmpresaSide = ({
  onParticipantsChange,
  darkMode,
  setDarkMode,
}) => {
  const [showProfileCard, setShowProfileCard] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');

  // Manejador para el clic en el botón de perfil
  const handleProfileClick = () => {
    setShowProfileCard(prevState => !prevState);
    setCurrentView('dashboard');
  };

  // Manejador para cambio de participantes
  const handleParticipantsChange = (value) => {
    setShowProfileCard(false);
    setCurrentView(value);
    if (onParticipantsChange) {
      onParticipantsChange(value);
    }
  };

  // Función para renderizar el contenido correcto
  const renderContent = () => {
    switch (currentView) {
      case 'mentores':
        return <MentoresEmpresa />;
      case 'estudiantes':
        return <div>Componente de Estudiantes</div>; // Reemplaza con tu componente real
      default:
        return <DashboardEmpresa showProfileCard={showProfileCard} />;
    }
  };

  return (
    <div className={`flex flex-col h-screen`}>
      <NavbarOng 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar */}
        <div className="fixed left-0">
          <SidebarEmpresa
            onProfileClick={handleProfileClick}
            onParticipantsChange={handleParticipantsChange}
            darkMode={darkMode}
            showProfileCard={showProfileCard}
            currentView={currentView} // Pasamos la vista actual al sidebar
          />
        </div>
        
        {/* Content Area */}
        <div className="ml-64 flex-grow overflow-auto p-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};