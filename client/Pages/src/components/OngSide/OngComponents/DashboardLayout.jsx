import React, { useState } from 'react';
import DashboardCard from './Dashboard/DashboardCard';
import DashboardModal from './Dashboard/DashboardModal';
import PersonalCourses from './PersonalCourses';
import axios from 'axios';
import PerfilOng from './Students/PerfilOng';
import {Navigate, useNavigate} from 'react-router-dom';
import { TableAcordionPersonalCourses } from './TableAcordionPersonalCourses';

const DashboardLayout = ({ darkMode }) => {
  const [activeSection, setActiveSection] = useState('default');
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla la apertura del modal
  const [courses, setCourses] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [showCursos, setShowCursos] = useState(false);
  const navigate = useNavigate();
  const handleCardCursosClick = () => {
    const organizacion_id = localStorage.getItem('organizacion_id')
    console.log(localStorage.getItem('organizacion_id'))
    
    try {
      if (organizacion_id) {
        axios.get(`http://localhost:3000/api/ong/${organizacion_id}/curso`) // Hacer la petición
      .then((response) =>{
        console.log(response.data);//Acceso al objeto cursos
        console.log(response.data.cursos);//Acceso al array
        console.log(response.data.cursos[0]);//Acceso al primer objeto
        console.log(response.data.cursos[0].curso_id);//Acceso a un elemento del primer objeto
        const fetchedCursos = response.data.cursos;
        setCursos(fetchedCursos);
        localStorage.setItem('cursos', JSON.stringify(fetchedCursos)); // Almacenamos en localStorage
        localStorage.setItem('curso_id', response.data.cursos[0].curso_id);
        setShowCursos(true);
        navigate('/personal-courses');
      })} else {
        console.error('No se encontraron cursos en la respuesta.');
      }
    } catch (error) {
        console.error('Error fetching courses:', error);
    } 
  };

  // Función para manejar clic en la tarjeta de perfil (abre/cierra PerfilOng)
  const handleCardPerfilClick = () => {
    setActiveSection((prevSection) => (prevSection === 'perfilOng' ? 'default' : 'perfilOng'));
  };

  // Función para añadir un nuevo curso
  const handleAddCourse = (title) => {
    setCourses((prevCourses) => [...prevCourses, title]); // Añadir el nuevo curso a la lista
    setIsModalOpen(false); // Cerrar el modal
    setActiveSection('personalCourses'); // Cambiar a la sección de cursos personales después de añadir
  };

  return (
    <div className={`relative min-h-screen pt-[87px] ${darkMode ? 'bg-gray-600' : 'bg-[#D8EEE3]'}`}>
  {isModalOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsModalOpen(false)} />
  )}
  <div className={`mt-5 relative ${isModalOpen ? 'filter blur-sm' : ''}`}>
    <section className="grid place-items-center z-10">
      <div className="grid grid-cols-1 admlg:grid-cols-2 gap-6 w-full max-w-[800px] h-28">
        <DashboardCard title="Perfil" bgColor="bg-[#034AA6]" onClick={handleCardPerfilClick} darkMode={darkMode} />
        <DashboardCard title="Mis Cursos" bgColor="bg-green-500" onClick={handleCardCursosClick} darkMode={darkMode} />
      </div>
    </section>
    <div className="-mt-14 ml-20 max-w-[1400px] min-h-[400px]">
      {activeSection === 'perfilOng' && <PerfilOng darkMode={darkMode} />}
      
    </div>
  </div>
  <section className="z-50 pl-[100px] -pt-[150px]">

    <DashboardModal 
      isOpen={isModalOpen} 
      onClose={() => setIsModalOpen(false)} 
      darkMode={darkMode} 
      onAddCourse={handleAddCourse} 
      />
  </section>
</div>

  );
};

export default DashboardLayout;