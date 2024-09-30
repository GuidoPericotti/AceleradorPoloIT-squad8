import React from 'react';

export const StudentsTable = () => {
  return (
    <section className="px-4 sm:px-0">
      <div className="overflow-x-auto dark:bg-gray-700">
        <div className="relative m-[2px] mb-3 mr-5 float-left">
          <label htmlFor="inputSearch" className="sr-only">Search</label>
          <input
            id="inputSearch"
            type="text"
            placeholder="Search..."
            className="block w-64 rounded-lg border dark:border-none dark:bg-gray-600 dark:text-white py-2 pl-10 pr-4 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 text-neutral-500 dark:text-neutral-200">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </span>
        </div>

        <div className="relative m-[2px] mb-3 float-right hidden sm:block">
          <label htmlFor="inputFilter" className="sr-only">Filter</label>
          <select
            id="inputFilter"
            className="block w-40 rounded-lg border dark:border-none dark:bg-gray-600 dark:text-white p-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
            defaultValue="1"
          >
            <option value="1">Last week</option>
            <option value="2">Last month</option>
            <option value="3">Yesterday</option>
            <option value="4">Last 7 days</option>
            <option value="5">Last 30 days</option>
          </select>
        </div>

        <table className="min-w-full text-left text-sm whitespace-nowrap">
          <thead className="uppercase tracking-wider border-b-2 dark:bg-gray-700 dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-4">Apellido</th>
              <th scope="col" className="px-6 py-4">Nombre</th>
              <th scope="col" className="px-6 py-4">Status</th>
              <th scope="col" className="px-6 py-4">Edición</th>
            </tr>
          </thead>
          <tbody>
            {[
              { apellido: "Vallejos", nombre: "Sergio", status: "Mentor" },
              { apellido: "Liporace", nombre: "Andres", status: "Desarrollador" },
              { apellido: "Gonzalez", nombre: "Rocio", status: "QA" },
              { apellido: "Lo celso", nombre: "Gio", status: "Diseñador" },
              { apellido: "Martinez", nombre: "Lautaro", status: "Desarrolllador" },
            ].map((student, index) => (
              <tr key={index} className="border-b dark:bg-gray-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
                <th scope="row" className="px-6 py-4 dark:text-white">{student.apellido}</th>
                <td className="px-6 py-4 dark:text-white">{student.nombre}</td>
                <td className="px-6 py-4 dark:text-white">{student.status}</td>
                <td className="px-6 py-4 dark:text-white">
                  <button className="text-blue-500 hover:text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.72 7.76L19.04 10.08M10.5 12l-1.72 1.72a2.5 2.5 0 0 1-.9.53l-4 1.5 1.5-4a2.5 2.5 0 0 1 .53-.9L12 10.5m0 0l7.76-7.76a2 2 0 1 1 2.83 2.83L12 10.5z" />
                    </svg>
                  </button>
                  <button className="ml-4 text-red-500 hover:text-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
