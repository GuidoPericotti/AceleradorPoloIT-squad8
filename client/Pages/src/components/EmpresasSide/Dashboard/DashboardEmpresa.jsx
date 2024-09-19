import React from 'react';
import { EmpresaCard } from './EmpresaCard';

export const DashboardEmpresa = ({ showProfileCard }) => {
  return (
    <div className="mt-20 p-2 -pl-32">
      {/* Mostrar el saludo o la card de perfil dependiendo del estado */}
      {showProfileCard ? (
        <EmpresaCard />
      ) : (
        <h1 className="text-3xl font-bold">¡Bienvenido al Polo IT! <br/> 
            Para continuar con esta aventura <br />
            presiona en la seccion Perfil
        </h1>
      )}
    </div>
  );
};
