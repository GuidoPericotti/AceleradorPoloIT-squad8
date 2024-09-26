

import React from 'react';
import { EmpresaCard } from './EmpresaCard';

export const DashboardEmpresa = ({ showProfileCard }) => {
  return (
    <div className="mt-20 p-2">
      {/* Mostrar el saludo o la card de perfil dependiendo del estado */}
      {showProfileCard ? (
        <EmpresaCard className='-pl-24' />
      ) : (
        <h1 className="text-3xl font-bold pt-28 -pl-10">
          ¡Bienvenido al Polo IT! <br />
          Para continuar con esta aventura <br />
          presiona en la seccion Perfil
        </h1>
      )}
    </div>
  );
};
