import React from 'react';
import AcordionCourse from './Course/AcordionCourse'


const PersonalCourses = ({ darkMode, courseTitle }) => {
  return (
    <div>
      <h2 className={`text-xl font-bold bg-[#D8EEE3] ${darkMode ? 'bg-gray-600 text-white' : 'bg-[#D8EEE3] text-black'}`}>Cursos Personales</h2>
      {courseTitle && <AcordionCourse nroItem={courseTitle} />}
    </div>
  );
};

export default PersonalCourses;
