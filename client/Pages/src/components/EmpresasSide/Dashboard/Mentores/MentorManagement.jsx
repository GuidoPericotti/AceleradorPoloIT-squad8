import React, { useState } from 'react';
import MentorRow from './MentorRow';
import ConfirmDeleteModal from './ConfirmDeleteModal';

const MentorManagement = () => {
  const [mentors, setMentors] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [mentorToDelete, setMentorToDelete] = useState(null);

  const openDeleteModal = (mentor) => {
    console.log("openDeleteModal called with:", mentor);
    setMentorToDelete(mentor);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setMentorToDelete(null);
  };

  const handleEdit = (mentor) => {
    console.log("Edit mentor:", mentor);
  };

  const confirmDelete = () => {
    if (mentorToDelete) {
      setMentors(mentors.filter(mentor => mentor.id !== mentorToDelete.id));
      closeDeleteModal();
    }
  };

  console.log("Rendering MentorManagement, openDeleteModal:", openDeleteModal);

  return (
    <div>
      <table className="min-w-full bg-white">
        <thead>
          {/* ... encabezados de la tabla ... */}
        </thead>
        <tbody>
  {mentors.map(mentor => (
    <MentorRow
      key={mentor.id}
      mentor={mentor}
      onEdit={handleEdit}
      openDeleteModal={openDeleteModal} // Aquí se pasa el prop correctamente
    />
  ))}
</tbody>


      </table>

      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        closeModal={closeDeleteModal}
        mentor={mentorToDelete}
        confirmDelete={confirmDelete}
      />
    </div>
  );
};

export default MentorManagement;