import React, { useState } from 'react';
import DashboardCard from './Dashboard/DashboardCard';
import DashboardModal from './Dashboard/DashboardModal';
import PersonalCourses from './PersonalCourses';
import axios from 'axios';
import PerfilOng from './Students/PerfilOng';

const DashboardLayout = ({ darkMode }) => {
  const [activeSection, setActiveSection] = useState('default');
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla la apertura del modal
  const [courses, setCourses] = useState([]);

  // Función para manejar clic en la tarjeta de perfil (abre/cierra PerfilOng)
  const handleCardPerfilClick = () => {
    setActiveSection((prevSection) => (prevSection === 'perfilOng' ? 'default' : 'perfilOng'));
  };
  const OngClient = () => {
    const [cursos, setCursos] = useState([]);
    const [showCursos, setShowCursos] = useState(false);
  }
  // Función para manejar clic en la tarjeta de cursos (abre el modal para añadir curso)
  const handleCardCursosClick = () => {
    const organizacion_id = localStorage.getItem('organizacion_id') 
    try {
      if (organizacion_id) {
       axios.get('http://localhost:3000/api/ong/${organizacion_id}/curso') // Hacer la petición
      .then((response) =>{
        setCursos(response.data.cursos);
        setShowCursos(true);
      }) 
      }
      } catch (error) {
        console.error('Error fetching courses:', error);
       //setCourses(response.data); // Asigna los cursos obtenidos a la lista de cursos
      //setIsModalOpen(true); // Abrir el modal para añadir curso
    } 
  };

  // Función para añadir un nuevo curso
  const handleAddCourse = (title) => {
    setCourses((prevCourses) => [...prevCourses, title]); // Añadir el nuevo curso a la lista
    setIsModalOpen(false); // Cerrar el modal
    setActiveSection('personalCourses'); // Cambiar a la sección de cursos personales después de añadir
  };

  return (
    <div className={`relative pt-[87px] ${darkMode ? 'bg-gray-600' : 'bg-[#D8EEE3]'}`}>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsModalOpen(false)} />
      )}

      <div className={`relative ${isModalOpen ? 'filter blur-sm' : ''} ${darkMode ? 'bg-gray-600' : 'bg-[#D8EEE3]'}`}>
        <section className="grid place-items-center z-10">
          <div className={`grid grid-cols-1 admlg:grid-cols-2 gap-6 w-full max-w-[800px] h-28 ${darkMode ? 'bg-gray-600' : 'bg-[#D8EEE3]'}`}>
            <DashboardCard
              title="Perfil"
              bgColor="bg-[#034AA6]"
              onClick={handleCardPerfilClick} // Alterna entre abrir y cerrar PerfilOng
              darkMode={darkMode}
            />
            <DashboardCard
              title="Mis Cursos"
              bgColor="bg-green-500"
              onClick={handleCardCursosClick} // Abrir el modal para añadir curso
              darkMode={darkMode}
            
            />
           
          </div>
        </section>

        <div className={`mt-8 max-w-[1400px] ${darkMode ? 'bg-gray-600 text-white' : 'bg-[#D8EEE3] text-black'} min-h-[400px]`}>
          {activeSection === 'personalCourses' && <PersonalCourses darkMode={darkMode} cursos={cursos} />}
          {activeSection === 'perfilOng' && <PerfilOng darkMode={darkMode} />}
          {activeSection === 'default' && (
            <p className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Seleccione una opción</p>
          )}
        </div>
      </div>

      <div className="relative z-50">
        <DashboardModal
          isOpen={isModalOpen} // Mostrar el modal si isModalOpen es true
          onClose={() => setIsModalOpen(false)} // Cerrar el modal
          darkMode={darkMode}
          onAddCourse={handleAddCourse} // Añadir curso
        />
      </div>
    </div>
  );
};

export default DashboardLayout;
