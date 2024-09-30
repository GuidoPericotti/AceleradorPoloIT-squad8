

import React from 'react';
import { EmpresaCard } from './EmpresaCard';
import { BienvenidaEmpresa } from './CardInfoEmpresa/BienvenidaEmpresa';

export const DashboardEmpresa = ({ showProfileCard }) => {
  return (
    <div className="mt-20 p-2">
      {/* Mostrar el saludo o la card de perfil dependiendo del estado */}
      {showProfileCard ? (
        <EmpresaCard className='-pl-24' />
      ) : (
        <div className="text-3xl font-bold pt-28 -pl-10">
          <BienvenidaEmpresa />
        </div>
      )}
    </div>
  );
};
