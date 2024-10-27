import React, { useState } from 'react';
import MentorRow from './MentorRow';
import SearchBarMentores from './SearchBarMentores';
import AddMentorWithModal from './AddMentorWithModal';
import ModalAddMentor from './ModalAddMentor';
import ConfirmDeleteModal from './ConfirmDeleteModal';

export const MentoresTable = ({ darkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [mentors, setMentors] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [mentorToDelete, setMentorToDelete] = useState(null);

  const addMentor = (mentor) => {
    const birthDate = new Date(mentor.birthDate);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    setMentors([...mentors, { ...mentor, age }]);
  };

  const editMentor = (updatedMentor) => {
    setMentors(
      mentors.map((mentor) =>
        mentor.dni === updatedMentor.dni ? { ...updatedMentor } : mentor
      )
    );
  };

  const openDeleteModal = (mentor) => {
    setMentorToDelete(mentor);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setMentorToDelete(null);
  };

  const confirmDelete = () => {
    if (mentorToDelete) {
      setMentors(mentors.filter((mentor) => mentor.dni !== mentorToDelete.dni));
      closeDeleteModal();
    }
  };

  const filteredMentors = mentors
    .filter((mentor) => mentor.name || mentor.mainTech || mentor.email)
    .filter((mentor) =>
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const openEditModal = (mentor) => {
    setSelectedMentor(mentor);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedMentor(null);
  };

  return (
    <div className={` overflow-x-auto ${darkMode ? 'bg-gray-800 text-white' : 'bg-[#C6E5D6] text-black'}`}>
      <div className="relative m-[2px] mb-3 mr-5 float-left">
        <SearchBarMentores value={searchTerm} onChange={setSearchTerm} darkMode={darkMode} />
      </div>
      <div className="relative float-end mr-1 m-[2px] mb-3">
        <AddMentorWithModal addMentor={addMentor}  darkMode={darkMode} />
      </div>

      <table className="min-w-full text-left text-sm whitespace-nowrap">
        <thead className={`uppercase tracking-wider border-b-2 ${darkMode ? 'border-gray-600' : 'border-black'}`}>
          <tr>
            <th className="px-3 py-4">Estudiantes</th>
            <th className="px-3 py-4">Tec. <br /> principal</th>
            <th className="px-3 py-4">Tec. <br /> secundaria</th>
            <th className="px-3 py-4">Email</th>
            <th className="px-3 py-4">Dni</th>
            <th className="px-3 py-4">Edad</th>
            <th className="px-3 py-4">Teléfono</th>
            <th className="px-3 py-4">Editar</th>
          </tr>
        </thead>
        <tbody>
          {filteredMentors.length > 0 ? (
            filteredMentors.map((mentor, index) => (
              <MentorRow
                darkMode={darkMode}
                key={index}
                mentor={mentor}
                onEdit={openEditModal}
                openDeleteModal={openDeleteModal}
              />
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center py-4">
                No hay estudiantes disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal para añadir o editar mentores */}
      {isModalOpen && (
        <ModalAddMentor
          darkMode={darkMode} 
          isOpen={isModalOpen}
          closeModal={closeModal}
          addMentor={selectedMentor ? editMentor : addMentor}
          initialData={selectedMentor}
        />
      )}

      {/* Modal de eliminación */}
      {isDeleteModalOpen && (
        <ConfirmDeleteModal
          isOpen={isDeleteModalOpen}
          closeModal={closeDeleteModal}
          mentor={mentorToDelete}
          confirmDelete={confirmDelete}
        />
      )}
    </div>
  );
};