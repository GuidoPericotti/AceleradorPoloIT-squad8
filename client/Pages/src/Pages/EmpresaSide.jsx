import React from 'react';
import { NavbarOng } from '../components/OngSide/OngComponents/Navbar/NavbarOng';
import { SidebarEmpresa } from '../components/EmpresasSide/Sidebar/SidebarEmpresa';

export const EmpresaSide = ({ onProfileClick, onParticipantsChange }) => {
  return (
    <div className="flex flex-col h-screen">
      <NavbarOng />
      <div className="flex flex-grow overflow-hidden">
        <SidebarEmpresa
          onProfileClick={onProfileClick}
          onParticipantsChange={onParticipantsChange}
        />
        
      </div>
    </div>
  );
};