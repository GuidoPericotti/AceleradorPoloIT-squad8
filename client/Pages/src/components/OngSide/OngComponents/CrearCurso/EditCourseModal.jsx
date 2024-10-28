// EditCourseModal.jsx
import Modal from './Modal';
import CourseForm from './CourseForm';
import { useState, useEffect } from 'react';
import axios from 'axios';

//axio.
const EditCourseModal = ({ onClose, onEditCourse, fetchedCurso }) => {
  const [curso_id, setCurso_id] = useState('');
  const [nombre_curso, setNombre_curso] = useState('');
  const [docente_curso, setDocente_curso] = useState('');
  const [descripcion_curso, setDescripcion_curso] = useState('');
  const [fechaInicio_curso, setFechaInicio_curso] = useState('');
  const [fechaCierre_curso, setFechaCierre_curso] = useState('');
  const [organizacion_id, setOrganizacion_id] = useState('');

  // Cargar los datos del curso cuando el modal se abre
  useEffect(() => {
    if (fetchedCurso) {
      
      setCurso_id(fetchedCurso.curso_id);
      setNombre_curso(fetchedCurso.nombre_curso || '');
      setDocente_curso(fetchedCurso.docente_curso || '');
      setDescripcion_curso(fetchedCurso.descripcion_curso || '');
      setFechaInicio_curso(fetchedCurso.fechaInicio_curso || '');
      setFechaCierre_curso(fetchedCurso.fechaCierre_curso || '');
      setOrganizacion_id(fetchedCurso.organizacion_id);
    }
  }, [fetchedCurso]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    onEditCourse({
      curso_id, // Mantener el ID original del curso
      nombre_curso,
      docente_curso,
      descripcion_curso,
      fechaInicio_curso,
      fechaCierre_curso,
      organizacion_id
    })
    try {
      // Realizar la solicitud PUT a la API
      console.log(curso_id)
      const response = await axios.put(`http://localhost:3000/api/ong/${organizacion_id}/curso/${fetchedCurso.curso_id}`, {
        curso_id,
        nombre_curso,
        docente_curso,
        descripcion_curso,
        fechaInicio_curso,
        fechaCierre_curso,
        organizacion_id,
      });

      console.log('Curso actualizado:', response.data); // Maneja la respuesta de éxito

    } catch (error) {
      console.error('Error al actualizar el curso:', error); // Manejo de errores
    }

    onClose(); // Cerrar el modal después de guardar
  };

  return (
    <Modal onClose={onClose} title="Editar Curso">
      <CourseForm
        onSubmit={handleSubmit}
        onCancel={onClose}
        nombre_curso={nombre_curso}
        setNombre_curso={setNombre_curso}
        docente_curso={docente_curso}
        setDocente_curso={setDocente_curso}
        descripcion_curso={descripcion_curso}
        setDescripcion_curso={setDescripcion_curso}
        fechaInicio_curso={fechaInicio_curso}
        setFechaInicio_curso={setFechaInicio_curso}
        fechaCierre_curso={fechaCierre_curso}
        setFechaCierre_curso={setFechaCierre_curso}
        curso_id={curso_id}
        setCurso_id={setCurso_id}
        organizacion_id={organizacion_id}
        setOrganizacion_id={setOrganizacion_id}
      />
    </Modal>
  );
}
export default EditCourseModal;