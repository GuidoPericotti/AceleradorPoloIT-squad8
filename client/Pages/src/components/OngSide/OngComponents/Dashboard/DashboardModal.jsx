import React from 'react';
import CreateCourseModal from '../CrearCurso/CreateCourseModal';

const DashboardModal = ({ isOpen, onClose, onAddCourse, darkMode }) => {
  if (!isOpen) return null;

  return (
    <CreateCourseModal 
      onClose={onClose}
      onAddCourse={onAddCourse}
      darkMode={darkMode}
    />
  )
};

export default DashboardModal;
