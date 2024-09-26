import React, { useState } from 'react';
import { SidebarEmpresa } from './Sidebar/SidebarEmpresa';
import { DashboardEmpresa } from './Dashboard/DashboardEmpresa';

export const EmpresaBody = () => {
  // Estado para controlar si se muestra o no la card de perfil
  const [showProfileCard, setShowProfileCard] = useState(false);

  // Función para manejar el clic en el botón "Perfil"
  const handleProfileClick = () => {
    setShowProfileCard(prevState => !prevState); // Cambiar entre mostrar y ocultar la card de perfil
  };

  return (
    <main className="flex h-screen">
      {/* Sidebar que ocupa 1/4 del ancho */}
      <section className="w-1/4">
        <SidebarEmpresa onProfileClick={handleProfileClick} />
      </section>

      {/* Dashboard que ocupa los 2/3 restantes */}
      <section className="w-2/3">
        {/* Aquí aseguramos que el Dashboard se muestre siempre */}
        <DashboardEmpresa showProfileCard={showProfileCard} />
      </section>
    </main>
  );
};
