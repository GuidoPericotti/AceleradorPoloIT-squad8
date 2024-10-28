
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
    navigate('/ong-client');
  };

  const openEditStudentModal = (student) => {
    console.log('Editar estudiante:', student);
    // Lógica para abrir el modal de edición
  };

  const openDeleteModal = (student) => {
    console.log('Eliminar estudiante:', student);
    // Lógica para abrir el modal de eliminación
  };

  const handleEditClick = (e, curso) => {
    e.stopPropagation(); // Previene la propagación del evento
    openEditStudentModal(curso);
  };

  const handleDeleteClick = (e, curso) => {
    e.stopPropagation(); // Previene la propagación del evento
    openDeleteModal(curso);
  };

  return (
    <div className={`overflow-x-auto ${darkMode ? 'bg-gray-800' : 'bg-[#C2E3D4]'} min-h-screen`}>
      {(!cursosDesdeStorage || cursosDesdeStorage.length === 0) ? (
        <p className={`${darkMode ? 'text-gray-300' : 'text-black'}`}>No hay cursos agregados.</p>
      ) : (
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-[#C2E3D4]'}`}>
          {/* Botón con flecha y animación */}
          <div className="pt-4 my-1 flex justify-between items-center w-full">
            {/* Botón "Para atras" alineado a la izquierda */}
            <button 
              onClick={handleBtn} 
              className={`ml-10 w-40 h-16 flex items-center ${darkMode ? 'bg-blue-700' : 'bg-blue-600'} text-white px-4 py-2 rounded-md`}>
              <span className="mr-3 text-3xl transform animate-pulse">←</span>
              Para atras
            </button>
    
            {/* Contenedor centrado para el botón "Agregar Curso" */}
            <div className="flex justify-center w-full">
              <button 
                onClick={() => setShowModal(true)}
                className={`w-40 h-16 flex items-center justify-center ${darkMode ? 'bg-blue-700' : 'bg-blue-600'} text-white px-4 py-2 rounded-md`}>
                Agregar Curso
              </button>
            </div>
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
            <table className="min-w-full divide-y divide-gray-200 table-fixed">
              <thead className={`${darkMode ? 'bg-gray-800' : 'bg-gray-200'} mb-5`}>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Título del curso</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Docente</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción del curso</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de inicio</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de finalización</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className={`${darkMode ? 'bg-gray-800' : 'bg-[#D8EEE3]'} divide-y divide-gray-200`}>
  {cursosDesdeStorage.map((curso) => {
    // Función para formatear las fechas
    const formatDate = (date) => {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      
      return `${year}/${month}/${day}`; // Cambiamos el formato aquí
    };
    
    const fechaInicio = formatDate(new Date(curso.fechaInicio_curso));
    const fechaCierre = formatDate(new Date(curso.fechaCierre_curso));

    return (
      <React.Fragment key={curso.curso_id}>
        {/* Acordeón siempre visible */}
        <tr>
          <td colSpan={6} className="py-4">
            <AcordionCourse
              key={curso.curso_id}
              curso_id={curso.curso_id}
              organizacion_id={curso.organizacion_id}
              nombre_curso={curso.nombre_curso}
              docente_curso={curso.docente_curso}
              descripcion_curso={curso.descripcion_curso}
              fechaInicio_curso={fechaInicio}
              fechaCierre_curso={fechaCierre}
              darkMode={darkMode}
              onEdit={(e) => handleEditClick(e, curso)} // Prop para manejar la edición
              onDelete={(e) => handleDeleteClick(e, curso)} // Prop para manejar la eliminación
            />
          </td>
        </tr>
      </React.Fragment>
    );
  })}
</tbody>
            </table>
          </div>
          <div className={`w-full h-16 ${darkMode ? 'bg-gray-800' : 'bg-[#D8EEE3]'}`}></div>
        </div>
      )}
    </div>
  
  );
};

export default PersonalCourses;