// EditCourseModal.jsx
import Modal from './Modal';
import CourseForm from './CourseForm';
import { useState, useEffect } from 'react';
import axios from 'axios';

//axio.
const EditCourseModal = ({ onClose, onEditCourse, courseData }) => {
  const [curso_id, setCurso_id] = useState('');
  const [nroItem, setNroItem] = useState('');
  const [courseTeacher, setCourseTeacher] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Cargar los datos del curso cuando el modal se abre
  useEffect(() => {
    if (courseData) {
      setCurso_id(courseData.curso_id);
      setNroItem(courseData.nroItem || '');
      setCourseTeacher(courseData.teacher || '');
      setDescription(courseData.description || '');
      setStartDate(courseData.startDate || '');
      setEndDate(courseData.endDate || '');
    }
  }, [courseData]);
  
  console.log(courseData)
  const handleSubmit = async (e) => {
    e.preventDefault();
    onEditCourse({
      curso_id, // Mantener el ID original del curso
      nroItem,
      teacher: courseTeacher,
      description,
      startDate,
      endDate
    })
    try {
      // Realizar la solicitud PUT a la API
      const response = await axios.put(`http://localhost:3000/api/ong/${organizacion_id}/curso/${id}}`, {
        curso_id,
        nroItem,
        teacher: courseTeacher,
        description,
        startDate,
        endDate
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
        nroItem={nroItem}
        setNroItem={setNroItem}
        courseTeacher={courseTeacher}
        setCourseTeacher={setCourseTeacher}
        description={description}
        setDescription={setDescription}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
    </Modal>
  );
}
export default EditCourseModal;