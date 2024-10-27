
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
          <table className="min-w-full divide-y divide-gray-200 table-fixed">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Título del curso</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Docente</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción del curso</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de inicio</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de finalización</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    {cursosDesdeStorage.map((curso) => {
      const fechaInicio = new Date(curso.fechaInicio_curso).toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: 'numeric' });
      const fechaCierre = new Date(curso.fechaCierre_curso).toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: 'numeric' });

      return (
        <React.Fragment key={curso.curso_id}>
          {/* Acordeón siempre visible */}
          <tr>
            <td colSpan={6} className="py-4">
              <AcordionCourse
                key={curso.curso_id}
                nroItem={curso.nombre_curso}
                teacher={curso.docente_curso}
                description={curso.descripcion_curso}
                startDate={fechaInicio}
                endDate={fechaCierre}
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
        </div>
      )}
    </div>
  );
};

export default PersonalCourses;
