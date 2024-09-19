// import React from 'react';
// import { SidebarEmpresa } from './Sidebar/SidebarEmpresa';
// import { DashboardEmpresa } from './Dashboard/DashboardEmpresa';

// export const EmpresaBody = () => {
//   return (
//     <main className="flex h-screen">
//       {/* Sidebar que ocupa 1/3 del ancho */}
//       <section className="w-1/3">
//         <SidebarEmpresa />
//       </section>

//       {/* Dashboard que ocupa los 2/3 restantes */}
//       <section className="w-2/3">
//         <DashboardEmpresa />
//       </section>
//     </main>
//   );
// };

import React, { useState } from 'react';
import { SidebarEmpresa } from './Sidebar/SidebarEmpresa';
import { DashboardEmpresa } from './Dashboard/DashboardEmpresa';

export const EmpresaBody = () => {
  // Estado para controlar si se muestra el saludo o la card de perfil
  const [showProfileCard, setShowProfileCard] = useState(false);

  // Función para manejar el clic en el botón "Perfil"
  const handleProfileClick = () => {
    setShowProfileCard(true); // Mostrar la card de perfil
  };

  return (
    <main className="flex h-screen">
      {/* Sidebar que ocupa 1/3 del ancho */}
      <section className="w-1/3">
        <SidebarEmpresa onProfileClick={handleProfileClick} />
      </section>

      {/* Dashboard que ocupa los 2/3 restantes */}
      <section className="w-2/3">
        <DashboardEmpresa showProfileCard={showProfileCard} />
      </section>
    </main>
  );
};
