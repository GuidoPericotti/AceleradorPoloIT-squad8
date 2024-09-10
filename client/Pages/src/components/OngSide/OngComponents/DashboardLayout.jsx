import React, { useState } from 'react';
import DashboardCard from './Dashboard/DashboardCard';
import DashboardModal from './Dashboard/DashboardModal';
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
    <div className="relative pt-24">
      {/* Adjust z-index and layout to avoid content overlapping the sidebar */}
      <div className={`grid place-items-center ${isModalOpen ? 'z-0' : 'z-10'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[800px] h-28">
          <DashboardCard
            title="Crear Curso"
            bgColor="bg-blue-500"
            onClick={() => handleCardClick('createCourse')}
          />
          <DashboardCard
            title="Cursos Personales"
            bgColor="bg-green-500"
            onClick={() => handleCardClick('personalCourses')}
          />
        </div>
      </div>

      {/* Modal for creating courses */}
      <DashboardModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Active section rendering */}
      <div className="mt-6 w-full max-w-[800px]">
        {activeSection === 'personalCourses' && <PersonalCourses />}
        {activeSection === 'students' && <Students />}
      </div>
    </div>
  );
};

export default DashboardLayout;
