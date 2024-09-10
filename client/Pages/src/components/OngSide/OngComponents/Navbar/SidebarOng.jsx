import React, { useState } from 'react';

export const SidebarOng = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [organization, setOrganization] = useState('');
  const [date, setDate] = useState('');

  return (
    <section className="bg-gray-100 w-[200px] h-full fixed pt-20">
      <div className="p-4">
        {/* Input de filtro por nombre */}
        <div className="mb-4">
          <label htmlFor="search" className="block text-sm text-gray-700 font-bold">Filtrar por nombre</label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-2 py-1 mt-1 border rounded"
            placeholder="Buscar por nombre"
          />
        </div>

        {/* Formulario con select de Organización y Fecha */}
        <form>
          {/* Select de organización */}
          <div className="mb-4">
            <label htmlFor="organization" className="block text-sm text-gray-700"></label>
            <select
              id="organization"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              className="w-full px-2 py-1 mt-1 border rounded"
            >
              <option value="">Organización</option>
              <option value="Empresa">Empresa</option>
              <option value="ONG">ONG</option>
            </select>
          </div>

          {/* Input de fecha */}
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm text-gray-700">Fecha</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-2 py-1 mt-1 border rounded"
            />
          </div>
        </form>
      </div>
    </section>
  );
};
