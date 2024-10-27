

import React, { useState } from 'react';
import AcordionCourse from './Course/AcordionCourse';
import { useNavigate } from 'react-router-dom';
import CreateCourseModal from './CrearCurso/CreateCourseModal';

const PersonalCourses = ({ darkMode }) => {
  const cursosDesdeStorage = JSON.parse(localStorage.getItem('cursos'));
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false); // Cierra el modal
  };

  const handleAddCourse = (courseData) => {
    console.log('Nuevo curso agregado:', courseData);
  };

  const handleBtn = () => {
    navigate('/ong-client')
  };

  return (
    <div className="overflow-x-auto">
      {/* Verifica si hay cursos */}
      {(!cursosDesdeStorage || cursosDesdeStorage.length === 0) ? (
        <p>No hay cursos agregados.</p>
      ) : (
        <div>
          {/* Botón con flecha y animación */}
          <div className="my-1 flex space-x-6">
            {/* Botón "Para atras" */}
            <button 
              onClick={handleBtn} 
              className="w-40 h-16 flex items-center bg-blue-600 text-white px-4 py-2 rounded-md">
              <span className="mr-3 text-3xl transform animate-pulse">←</span>
              Para atras
            </button>

            {/* Botón "Agregar Curso" */}
            <button 
              onClick={() => setShowModal(true)} // Aquí se abre el modal
              className="w-40 h-16 flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md">
              Agregar Curso
            </button>
          </div>

          {/* Modal que se muestra cuando showModal es true */}
          {showModal && (
            <CreateCourseModal 
              onClose={handleCloseModal}
              onAddCourse={handleAddCourse}
            />
          )}

          {/* Tabla de cursos */}
          <div className={`min-w-full mt-16 ${darkMode ? 'bg-gray-700 text-white' : 'bg-[#82C7A5] text-black'} rounded-lg`}>
            <div className="grid grid-cols-5 gap-4 py-3 px-4 font-semibold">
              <span className="text-left">Título del curso</span>
              <span className="text-left -ml-14">Docente</span>
              <span className="text-left -ml-28">Descripción del curso</span>
              <span className="text-left ml-20">Fecha de inicio</span>
              <span className="text-left">Fecha de finalización</span>
            </div>

            {/* Mapea cada curso y lo pasa al acordeón */}
            {cursosDesdeStorage.map((curso) => {
              const fechaInicio = new Date(curso.fechaInicio_curso).toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: 'numeric' });
              const fechaCierre = new Date(curso.fechaCierre_curso).toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: 'numeric' });
              
              return (
                <AcordionCourse
                  key={curso.curso_id}
                  nroItem={curso.nombre_curso}
                  teacher={curso.docente_curso}
                  description={curso.descripcion_curso}
                  startDate={fechaInicio}
                  endDate={fechaCierre}
                  darkMode={darkMode}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalCourses;
