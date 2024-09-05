import React, { useState } from 'react';
import CreateCourseModal from './CreateCourseModal';
import PersonalCourses from './PersonalCourses';
import Students from './Students/Students';

const DashboardLayout = () => {
  const [activeSection, setActiveSection] = useState('default');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (section) => {
    if (section === 'createCourse') {
      setIsModalOpen(true);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className="p-6 pt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[120] h-28">
        <div
          className="bg-blue-500 text-white p-4 rounded-lg cursor-pointer text-center pt-10"
          onClick={() => handleCardClick('createCourse')}
        >
          Crear Curso
        </div>
        <div
          className="bg-green-500 text-white p-4 rounded-lg cursor-pointer text-center pt-10"
          onClick={() => handleCardClick('personalCourses')}
        >
          Cursos Personales
        </div>
        <div
          className="bg-purple-500 text-white p-4 rounded-lg cursor-pointer text-center pt-10"
          onClick={() => handleCardClick('students')}
        > 
          Estudiantes
        </div>
      </div>

      {isModalOpen && <CreateCourseModal onClose={() => setIsModalOpen(false)} />}

      <div className="mt-6">
        {activeSection === 'personalCourses' && <PersonalCourses />}
        {activeSection === 'students' && <Students />}
      </div>
    </div>
  );
};

export default DashboardLayout;
