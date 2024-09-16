import React, { useState } from 'react';
import { LogoSolicitudes } from './LogoSolicitudes';
import { ButtonOngEmpresa } from './ButtonOngEmpresa';
import { CardsSolicitudes } from './CardsSolicitudes';
import { SidebarOng } from '../OngSide/OngComponents/Navbar/SidebarOng';

export const CardPrincipal = () => {
  const [filter, setFilter] = useState('');

  const allCards = [
    { id: 1, tipo: 'Aprobado', Nombre: 'ONG' },
    { id: 2, tipo: 'Rechazado', Nombre: 'ONG' },
    { id: 3, tipo: 'Pendiente', Nombre: 'ONG' },
    { id: 4, tipo: 'Aprobado', Nombre: 'Empresa' },
    { id: 5, tipo: 'Rechazado', Nombre: 'Empresa' },
    { id: 6, tipo: 'Pendiente', Nombre: 'Empresa' },
    { id: 7, tipo: 'Aprobado', Nombre: 'ONG' },
    { id: 8, tipo: 'Rechazado', Nombre: 'Empresa' },
    { id: 9, tipo: 'Pendiente', Nombre: 'Empresa' }
  ];

  const filteredCards = allCards.filter(card => filter === '' || card.tipo === filter);

  const handleFilterChange = (filterType) => {
    setFilter(prevFilter => prevFilter === filterType ? '' : filterType);
  };

  return (
    <div className="mt-20 flex flex-col items-center mr-10">
      {/* Cabecera principal */}
      <main className="sticky top-[80px] flex items-center bg-gray-100 p-4 w-11/12 rounded-t-3xl flex-row flex-nowrap justify-center">
        <div className="flex items-center justify-center">
          <LogoSolicitudes />
          <h2 className="mx-4 text-lg font-semibold text-gray-700">Solicitudes</h2>
          <LogoSolicitudes />
        </div>
      </main>
      
      {/* Botones de filtro */}
      <section className="mt-8 flex justify-center w-full pl-32">
        <div className="flex space-x-4">
          <ButtonOngEmpresa 
            nombre="Pendiente" 
            filterType="Pendiente" 
            currentFilter={filter} 
            onClick={() => handleFilterChange('Pendiente')} 
          />
          <ButtonOngEmpresa 
            nombre="Aprobado" 
            filterType="Aprobado" 
            currentFilter={filter} 
            onClick={() => handleFilterChange('Aprobado')} 
          />
          <ButtonOngEmpresa 
            nombre="Rechazado" 
            filterType="Rechazado" 
            currentFilter={filter} 
            onClick={() => handleFilterChange('Rechazado')} 
          />
        </div>
      </section>
      
      {/* Contenedor principal de 3 columnas */}
      <section className="flex w-full pl-[52px]">
        {/* Sidebar en la primera columna */}
        <div className="flex-shrink-0 -mt-24">
          <SidebarOng /> {/* Sidebar estático */}
        </div>

        {/* Columna para las tarjetas */}
        <div className="grid grid-cols-2 gap-1 flex-grow ml-56 mt-4">
          {filteredCards.map(card => (
            <CardsSolicitudes key={card.id} tipo={card.Nombre} /> // Pasa el tipo como prop
          ))}
        </div>
      </section>
    </div>
  );
};
