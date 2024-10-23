

import Modal from './Modal';
import CourseForm from './CourseForm';
import { useState } from 'react';

const CreateCourseModal = ({ onClose, onAddCourse }) => {
  const [localCourseTitle, setLocalCourseTitle] = useState('');
  const [courseTeacher, setCourseTeacher] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pasamos todos los campos del curso al padre
    onAddCourse({ 
      title: localCourseTitle, 
      teacher: courseTeacher, 
      description, 
      startDate, 
      endDate 
    });
    onClose();
  };

  return (
    <Modal onClose={onClose} title="Crear Curso">
      <CourseForm
        onSubmit={handleSubmit}
        onCancel={onClose}
        courseTitle={localCourseTitle}
        setCourseTitle={setLocalCourseTitle}
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

export default CreateCourseModal;
