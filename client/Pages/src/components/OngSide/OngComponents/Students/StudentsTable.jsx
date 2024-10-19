import React, { useState } from 'react';
import ModalAddStudent from '../Course/ModalAddStudent'; // Cambiar el modal

export const StudentsTable = ({darkMode}) => {
  // Estado para los estudiantes
  const [students, setStudents] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Función para agregar un nuevo estudiante
  const addStudent = (newStudent) => {
    if (selectedStudent) {
      // Si hay un estudiante seleccionado, estamos en modo edición
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student === selectedStudent ? newStudent : student
        )
      );
    } else {
      // Si no, estamos agregando un nuevo estudiante
      setStudents((prevStudents) => [...prevStudents, newStudent]);
    }
    closeAddStudentModal();
  };

  const openAddStudentModal = () => {
    setSelectedStudent(null); // Para que sea un nuevo estudiante
    setModalOpen(true);
  };

  const closeAddStudentModal = () => {
    setModalOpen(false);
    setEditModalOpen(false);
    setSelectedStudent(null); // Limpiar el estudiante seleccionado
  };

  const openEditStudentModal = (student) => {
    setSelectedStudent(student); // Cargar el estudiante a editar
    setEditModalOpen(true);
  };

  const openDeleteModal = (student) => {
    setSelectedStudent(student); // Cargar el estudiante a eliminar
    setDeleteModalOpen(true);
  };

  const deleteStudent = () => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student !== selectedStudent)
    );
    closeDeleteModal();
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedStudent(null); // Limpiar el estudiante seleccionado
  };

  return (
    <section className={`bg-[#82C7A5] mb-5 dark:bg-gray-700  ${darkMode ? 'bg-gray-600 text-white' : 'bg-[#D8EEE3] text-black'}`}>
      <div className="overflow-x-auto dark:bg-gray-700 bg-[#A4D7BC]">
        <div className="flex justify-around items-center mb-4">
          <div className="relative m-[2px] mb-3">
            <label htmlFor="inputSearch" className="sr-only">Search</label>
            <input
              id="inputSearch"
              type="text"
              placeholder="Search..."
              className="block w-64 rounded-lg border dark:border-none dark:bg-gray-600 dark:text-white py-2 pl-10 pr-4 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 text-neutral-500 dark:text-neutral-200">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </span>
          </div>

          <button
            className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={openAddStudentModal}
          >
            Agregar Estudiante
          </button>
        </div>

        <table className="min-w-full text-left text-sm whitespace-nowrap">
          <thead className="uppercase tracking-wider border-b-2 dark:bg-gray-700 dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-4">Apellido</th>
              <th scope="col" className="px-6 py-4">Nombre</th>
              <th scope="col" className="px-6 py-4">Perfil</th>
              <th scope="col" className="px-6 py-4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="border-b dark:bg-gray-600 dark:hover:bg-neutral-600">
                <th scope="row" className="px-6 py-4 dark:text-white">{student.surname}</th>
                <td className="px-6 py-4 dark:text-white">{student.name}</td>
                <td className="px-6 py-4 dark:text-white">{student.perfil}</td>
                <td className="px-6 py-4 dark:text-white flex">
                  <button className="text-blue-500 hover:text-blue-700" onClick={() => openEditStudentModal(student)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.72 7.76L19.04 10.08M10.5 12l-1.72 1.72a2.5 2.5 0 0 1-.9.53l-4 1.5 1.5-4a2.5 2.5 0 0 1 .53-.9L12 10.5m0 0l7.76-7.76a2 2 0 1 1 2.83 2.83L12 10.5z" />
                    </svg>
                  </button>
                  <button className="ml-4 text-red-500 hover:text-red-700" onClick={() => openDeleteModal(student)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal para agregar o editar estudiantes */}
      <ModalAddStudent
        isOpen={modalOpen || editModalOpen}
        closeModal={closeAddStudentModal}
        addStudent={addStudent}
        initialData={selectedStudent}
      />

      {/* Modal para eliminar estudiantes */}
      {deleteModalOpen && (
        <div className="fixed left-0 top-0 z-[1055] h-full w-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative flex w-full max-w-md flex-col rounded-md bg-white shadow-lg">
            <div className="p-4">
              <h5 className="text-xl font-medium">
                ¿Seguro que quieres eliminar a {selectedStudent?.name} {selectedStudent?.surname} de la lista de estudiantes?
              </h5>
              <div className="flex justify-end mt-4">
                <button
                  className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 hover:bg-gray-400"
                  onClick={closeDeleteModal}
                >
                  Cancelar
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white hover:bg-red-600"
                  onClick={deleteStudent}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
