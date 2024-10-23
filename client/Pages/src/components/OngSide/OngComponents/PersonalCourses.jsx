

import React from 'react';
import AcordionCourse from './Course/AcordionCourse';

const PersonalCourses = ({ darkMode, courses }) => {
  return (
    <div>
      {courses.length === 0 ? (
        <p>No hay cursos agregados.</p>
      ) : (
        courses.map((course, index) => (
          <AcordionCourse
            key={index}
            nroItem={course.title} // Título del curso
            teacher={course.teacher} // Docente
            description={course.description} // Descripción del curso
            startDate={course.startDate} // Fecha de inicio
            endDate={course.endDate} // Fecha de finalización
            darkMode={darkMode}
          />
        ))
      )}
    </div>
  );
};

export default PersonalCourses;
