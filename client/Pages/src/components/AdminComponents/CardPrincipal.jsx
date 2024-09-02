import React, { useState } from 'react';
import { LogoSolicitudes } from './LogoSolicitudes';
import { ButtonOngEmpresa } from './ButtonOngEmpresa';
import { CardsSolicitudes } from './CardsSolicitudes';

export const CardPrincipal = () => {
  // Estado para controlar el filtro
  const [filter, setFilter] = useState('');

  // Datos de ejemplo para CardsSolicitudes
  const allCards = [
    { id: 1, tipo: 'ONG' },
    { id: 2, tipo: 'Empresa' },
    { id: 3, tipo: 'ONG' },
    { id: 4, tipo: 'Empresa' },
    { id: 5, tipo: 'ONG' },
    { id: 6, tipo: 'Empresa' },
    { id: 7, tipo: 'ONG' },
    { id: 8, tipo: 'Empresa' },
    { id: 9, tipo: 'ONG' }
  ];

  // Filtrar las tarjetas según el estado del filtro
  const filteredCards = allCards.filter(card => filter === '' || card.tipo === filter);

  const handleFilterChange = (filterType) => {
    setFilter(prevFilter => prevFilter === filterType ? '' : filterType);
  };

  return (
    <div className="mt-32 flex flex-col items-center">
      {/* Cabecera principal */}
      <main className="flex items-center bg-gray-100 p-4 w-11/12 rounded-t-3xl flex-row flex-nowrap justify-center">
        <div className="flex items-center justify-center">
          <LogoSolicitudes />
          <h2 className="mx-4 text-lg font-semibold text-gray-700">Solicitudes</h2>
          <LogoSolicitudes />
        </div>
      </main>
      
      {/* Botones */}
      <section className="mt-8 flex justify-center w-full">
        <div className="flex space-x-4">
          <ButtonOngEmpresa 
            nombre="ONG" 
            filterType="ONG" 
            currentFilter={filter} 
            onClick={() => handleFilterChange('ONG')} 
          />
          <ButtonOngEmpresa 
            nombre="Empresa" 
            filterType="Empresa" 
            currentFilter={filter} 
            onClick={() => handleFilterChange('Empresa')} 
          />
        </div>
      </section>
      
      {/* Tarjetas de solicitudes en una rejilla de 3 columnas */}
      <section className="mt-16 w-full px-12 mb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {filteredCards.map(card => (
            <CardsSolicitudes key={card.id} tipo={card.tipo} /> // Pasa el tipo como prop
          ))}
        </div>
      </section>
    </div>
  );
};
