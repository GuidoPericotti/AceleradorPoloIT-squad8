import React from 'react';
import { InformacionPersonalEmpresa } from '../Dashboard/CardInfoEmpresa/InformacionPersonalEmpresa';
import { SubirFoto } from './SubirFoto';
import { TitleEmpresaCard } from './TitleEmpresaCard';

export const EmpresaCard = ({darkMode}) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 shadow-2xl admlg:w-[930px] admlg:ml-32">
      {/* Contenedor del título */}
      <div className={`h-16 col-span-2 rounded-lg flex items-center justify-center ${darkMode ? 'bg-gray-700 text-white' : 'bg-slate-300 text-black'}`}>
        <TitleEmpresaCard />
      </div>
      
      {/* Componente de información personal a la izquierda */}
      <div className={`col-start-1  p-4 -mt-[223px]  ${darkMode ? 'bg-gray-800 text-white' : 'bg-slate-200 text-black'} `}>
        <InformacionPersonalEmpresa darkMode={darkMode}/>
      </div>
  
      {/* Componente de subir foto a la derecha */}
      <div className={`col-start-2  p-4 -mt-[223px] ${darkMode ? 'bg-gray-800 text-white' : 'bg-slate-200 text-black'} `}>
        <SubirFoto darkMode={darkMode}/>
      </div>
    </div>
  );
};
