import Modal from './Modal';
import CourseForm from './CourseForm';
import { useState } from 'react';

const CreateCourseModal = ({ onClose }) => {
  const [courseTitle, setCourseTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para guardar el curso
    onClose();
  };

  return (
    <Modal onClose={onClose} title="Crear Curso">
      <CourseForm
        onSubmit={handleSubmit}
        onCancel={onClose}
        courseTitle={courseTitle}
        setCourseTitle={setCourseTitle}
        description={description}
        setDescription={setDescription}
      />
    </Modal>
  );
};

export default CreateCourseModal;