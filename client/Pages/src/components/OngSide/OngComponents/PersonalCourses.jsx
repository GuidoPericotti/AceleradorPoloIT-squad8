

import React from 'react';
import AcordionCourse from './Course/AcordionCourse';

const PersonalCourses = ({ darkMode, cursos }) => {
  return (
    <div>
      {(!cursos || cursos.length === 0)  ? (
        <p>No hay cursos agregados.</p>
      ) : (
        cursos.map((curso, index) => (
          <AcordionCourse
            nroItem={index}
            key={curso.curso_id}
            name={curso.nombre_curso} // Título del curso
            teacher={curso.docente_curso} // Docente
            description={curso.descripcion_curso} // Descripción del curso
            startDate={curso.fechaInicio_curso} // Fecha de inicio
            endDate={curso.fechaCierre_curso} // Fecha de finalización
            darkMode={darkMode}
          />
        ))
      )}
    </div>
  );
};

export default PersonalCourses;
