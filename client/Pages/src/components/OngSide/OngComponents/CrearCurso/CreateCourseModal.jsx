import Modal from './Modal';
import CourseForm from './CourseForm';
import { useState } from 'react';

const CreateCourseModal = ({ onClose, onAddCourse }) => {
  const [localCourseTitle, setLocalCourseTitle] = useState('');
  const [description, setDescription] = useState('');
  const [courseTeacher, setCourseTeacher] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCourse(localCourseTitle);
    onClose();
  };

  return (
    <Modal onClose={onClose} title="Crear Curso">
      <CourseForm
        onSubmit={handleSubmit}
        onCancel={onClose}
        courseTitle={localCourseTitle}
        setCourseTitle={setLocalCourseTitle}
        description={description}
        setDescription={setDescription}
        courseTeacher={courseTeacher}
        setCourseTeacher={setCourseTeacher}
      />
    </Modal>
  );
};

export default CreateCourseModal;
