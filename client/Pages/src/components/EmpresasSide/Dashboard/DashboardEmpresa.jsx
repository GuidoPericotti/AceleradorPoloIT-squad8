

import React from 'react';
import { EmpresaCard } from './EmpresaCard';
import { BienvenidaEmpresa } from './CardInfoEmpresa/BienvenidaEmpresa';

export const DashboardEmpresa = ({ showProfileCard, darkMode }) => {
  return (
    <div className="mt-20 p-2">
      {/* Mostrar el saludo o la card de perfil dependiendo del estado */}
      {showProfileCard ? (
        <EmpresaCard className='admlg:pl-40 adms:-pl-24' darkMode={darkMode}/>
      ) : (
        <div className="text-3xl font-bold pt-28 admlg:pl-40 adms:pl-10">
          <BienvenidaEmpresa />
        </div>
      )}
    </div>
  );
};
