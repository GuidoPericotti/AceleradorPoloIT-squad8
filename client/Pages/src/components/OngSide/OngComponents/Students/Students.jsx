import React from 'react';
import { StudentsTable } from './StudentsTable';

const Students = () => {
  return (
    <>
      
        <section>
          <h2 className="text-xl font-bold text-center">Estudiantes</h2>
        </section>
        <section>
          <StudentsTable />
        </section>
        {/* Aquí puedes añadir la lógica para listar los estudiantes */}
      
    </>
  );
};

export default Students;
