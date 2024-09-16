import React from 'react';
import AcordionCourse from './Course/AcordionCourse'


const PersonalCourses = () => {
  return (
    <div>
      <h2 className="text-xl font-bold">Cursos Personales</h2>
      {/* Aquí puedes añadir la lógica para listar los cursos personales */}
      <AcordionCourse nroItem="Diseño UI/UX" />
      <AcordionCourse nroItem="Desarrollo Web" className='mt-20 mb-20'/>
      <AcordionCourse nroItem="Tester QA" />
    </div>
  );
};

export default PersonalCourses;
