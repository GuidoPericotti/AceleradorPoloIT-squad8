import React from 'react';
import CreateCourseModal from '../CreateCourseModal';

const DashboardModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return <CreateCourseModal onClose={onClose} />;
};

export default DashboardModal;
