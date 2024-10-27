// EditCourseModal.jsx
import Modal from './Modal';
import CourseForm from './CourseForm';
import { useState, useEffect } from 'react';
//axio.
const EditCourseModal = ({ onClose, onEditCourse, courseData }) => {
  const [nroItem, setNroItem] = useState('');
  const [courseTeacher, setCourseTeacher] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Cargar los datos del curso cuando el modal se abre
  useEffect(() => {
    if (courseData) {
      setNroItem(courseData.title || '');
      setCourseTeacher(courseData.teacher || '');
      setDescription(courseData.description || '');
      setStartDate(courseData.startDate || '');
      setEndDate(courseData.endDate || '');
    }
  }, [courseData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditCourse({
      id: courseData.id, // Mantener el ID original del curso
      title: nroItem,
      teacher: courseTeacher,
      description,
      startDate,
      endDate
    });
    onClose();
  };

  return (
    <Modal onClose={onClose} title="Editar Curso">
      <CourseForm
        onSubmit={handleSubmit}
        onCancel={onClose}
        courseTitle={nroItem}
        setCourseTitle={setNroItem}
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
};

export default EditCourseModal;