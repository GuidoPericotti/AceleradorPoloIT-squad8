

import React from 'react';
import AcordionCourse from './Course/AcordionCourse';
const PersonalCourses = ({ darkMode }) => {
  const cursosDesdeStorage = JSON.parse(localStorage.getItem('cursos'));
  console.log(cursosDesdeStorage)
  return (
    <div>
      {/* Verifica si hay cursos */}
      {(!cursosDesdeStorage || cursosDesdeStorage.length === 0) ? (
        <p>No hay cursos agregados.</p>
      ) : (
        cursosDesdeStorage.map((curso) => {
          // Fechas a objeto Date
          const fechaInicio = new Date(curso.fechaInicio_curso);
          const fechaCierre = new Date(curso.fechaCierre_curso);
          // Formatear las fechas
          const opciones = { year: 'numeric', month: 'short', day: 'numeric' };
          const fechaInicioFormateada = fechaInicio.toLocaleDateString('es-ES', opciones);
          const fechaCierreFormateada = fechaCierre.toLocaleDateString('es-ES', opciones);
          
          return ( // Asegúrate de usar return aquí para devolver el componente
            <AcordionCourse           
              key={curso.curso_id}
              name={curso.nombre_curso} // Título del curso
              teacher={curso.docente_curso} // Docente
              description={curso.descripcion_curso} // Descripción del curso
              startDate={fechaInicioFormateada} // Fecha de inicio
              endDate={fechaCierreFormateada} // Fecha de finalización
              darkMode={darkMode}
            />
          );
        })
      )}
    </div>
  );
};

export default PersonalCourses;
