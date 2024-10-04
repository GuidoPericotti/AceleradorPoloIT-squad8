
import React from 'react';
import { NavbarOng } from '../components/OngSide/OngComponents/Navbar/NavbarOng';
import { SidebarEmpresa } from '../components/EmpresasSide/Sidebar/SidebarEmpresa';

export const EmpresaSide = ({ 
  onProfileClick, 
  onParticipantsChange, 
  darkMode, 
  setDarkMode 
}) => {
  return (
    <div className={`flex flex-col h-screen`}>
      <NavbarOng 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />
      <div className="flex flex-grow overflow-hidden ml-64">
        <SidebarEmpresa
          onProfileClick={onProfileClick}
          onParticipantsChange={onParticipantsChange}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
};