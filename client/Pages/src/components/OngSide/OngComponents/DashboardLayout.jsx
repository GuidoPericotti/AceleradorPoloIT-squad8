 import React, { useState } from 'react';
 import DashboardCard from './Dashboard/DashboardCard';
 import DashboardModal from './Dashboard/DashboardModal';
 import PersonalCourses from './PersonalCourses';
 import Students from './Students/Students';

 const DashboardLayout = ({ darkMode }) => {
  
   const [activeSection, setActiveSection] = useState('default');
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [courseTitle, setCourseTitle] = useState(''); // Añadimos el estado aquí


   const handleCardClick = (section) => {
     if (section === 'createCourse') {
       setIsModalOpen(true);
     } else {
       setActiveSection(section);
     }
   };
   const handleAddCourse = (title) => {
    setCourseTitle(title);
    setIsModalOpen(false);
    setActiveSection('personalCourses'); // Cambiamos a la sección de cursos personales
  };

   return (
     <div className={`relative pt-14 ${darkMode ? 'dark' : ''}`}>
   {isModalOpen && (
     <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsModalOpen(false)} />
   )}

   <div className={`relative ${isModalOpen ? 'filter blur-sm' : ''} ${darkMode ? 'bg-gray-600' : ''}`}>
     <section className="grid place-items-center z-10 pt-24">
       <div className={`grid grid-cols-1 admlg:grid-cols-2 gap-6 w-full max-w-[800px] h-28 ${darkMode ? 'bg-gray-600' : ''}`}>
         <DashboardCard
           title="Crear Curso"
           bgColor="bg-blue-500"
           onClick={() => handleCardClick('createCourse')}
           darkMode={darkMode}
         />
         <DashboardCard
           title="Cursos Personales"
           bgColor="bg-green-500"
           onClick={() => handleCardClick('personalCourses')}
           darkMode={darkMode}
         />
       </div>
     </section>
    <div className={`mt-8 max-w-[1400px] ${darkMode ? 'bg-gray-600 text-white' : 'bg-white text-black'} min-h-[400px]`}>
      {activeSection === 'personalCourses' && <PersonalCourses darkMode={darkMode} courseTitle={courseTitle}/>}
      {activeSection === 'students' && <Students darkMode={darkMode} />}
      
      {activeSection === 'default' && (
        <p className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        </p>
      )}
    </div>
   
   </div>

   <div className="relative z-50">
     <DashboardModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} darkMode={darkMode} onAddCourse={handleAddCourse}
     />
   </div>
 </div>

   );
 };

 export default DashboardLayout;
