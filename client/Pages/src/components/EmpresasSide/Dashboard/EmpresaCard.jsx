import React from 'react';
import { InformacionPersonalEmpresa } from '../Dashboard/CardInfoEmpresa/InformacionPersonalEmpresa';
import { SubirFoto } from './SubirFoto';
import { TitleEmpresaCard } from './TitleEmpresaCard';

export const EmpresaCard = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 shadow-2xl">

      {/* Contenedor del título */}
      <div className="h-16 col-span-2 bg-slate-300 rounded-lg flex items-center justify-center">
        <TitleEmpresaCard className="text-center"/>
      </div>
      
      {/* Componente de información personal a la izquierda */}
      <div className="col-start-1 bg-slate-200 p-4 -mt-[270px]">
        <InformacionPersonalEmpresa />
      </div>
  
      {/* Componente de subir foto a la derecha */}
      <div className="col-start-2 bg-slate-200 p-4 -mt-[270px]">
        <SubirFoto/>
      </div>
    </div>
  );
};
