import React from 'react';
import AcordionCourse from './Course/AcordionCourse'


const PersonalCourses = ({ darkMode, courseTitle }) => {
  return (
    <div>
      <h2 className="text-xl font-bold">Cursos Personales</h2>
      {courseTitle && <AcordionCourse nroItem={courseTitle} />}
    </div>
  );
};

export default PersonalCourses;
