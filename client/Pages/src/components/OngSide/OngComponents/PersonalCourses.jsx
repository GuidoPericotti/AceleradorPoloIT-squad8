

import React from 'react';
import AcordionCourse from './Course/AcordionCourse';

const PersonalCourses = ({ darkMode, cursos }) => {
  return (
    <div>
      {cursos.length === 0 ? (
        <p>No hay cursos agregados.</p>
      ) : (
        cursos.map((cursos, organizacion_id) => (
          <AcordionCourse
            key={organizacion_id}
            nroItem={cursos.nombre_curso} // Título del curso
            teacher={cursos.docente_curso} // Docente
            description={cursos.descripcion_curso} // Descripción del curso
            startDate={cursos.fechaInicio_curso} // Fecha de inicio
            endDate={cursos.fechaCierre_curso} // Fecha de finalización
            darkMode={darkMode}
          />
        ))
      )}
    </div>
  );
};

export default PersonalCourses;
