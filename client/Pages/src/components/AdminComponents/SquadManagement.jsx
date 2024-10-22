<<<<<<< HEAD

=======
>>>>>>> 5a137cb01eca0888e0d6ce679718f3f342374f2c
import React, { useState, useEffect } from 'react';

// SVG Icons como componentes
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SquadManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [squads, setSquads] = useState([]);
  const [currentSquad, setCurrentSquad] = useState({
    mentor: '',
    dev1: '',
    dev2: '',
    dev3: '',
    tester: '',
    designer: ''
  });
  const [nextId, setNextId] = useState(1);

  // Datos simulados de la base de datos
  const [mentors, setMentors] = useState([]);
  const [devs, setDevs] = useState([]);
  const [testers, setTesters] = useState([]);
  const [designers, setDesigners] = useState([]);

  useEffect(() => {
    // Simular la recuperación de datos de la base de datos
    setMentors([{ id: 1, name: 'Juan' }, { id: 2, name: 'Maria' }]);
    setDevs([{ id: 3, name: 'Andres' }, { id: 4, name: 'Gonza' }, { id: 7, name: 'Guido' }]);
    setTesters([{ id: 5, name: 'Erica' }]);
    setDesigners([{ id: 6, name: 'Sergio' }]);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentSquad((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (currentSquad.id) {
      setSquads(squads.map((squad) => (squad.id === currentSquad.id ? currentSquad : squad)));
    } else {
      setSquads([...squads, { ...currentSquad, id: nextId }]);
      setNextId(nextId + 1);
    }
    handleCloseModal();
  };

  const handleEdit = (squad) => {
    setCurrentSquad(squad);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setSquads(squads.filter((squad) => squad.id !== id));
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentSquad({
      mentor: '',
      dev1: '',
      dev2: '',
      dev3: '',
      tester: '',
      designer: ''
    });
  };

  return (
    <div className="w-full min-h-screen">
      {/* Sidebar */}
      <div className="fixed top-40 left-96 z-0">
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          <PlusIcon />
          Nuevo Squad
        </button>
      </div>

      {/* Lista de Squads */}
      <div className="w-[884px] grid grid-cols-1 adms:grid-cols-2 admlg:grid-cols-3 gap-6 mt-24 ml-60">
      {squads.map((squad) => (
          <div key={squad.id} className="bg-gray-100 p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">Squad {squad.id}</h3>
            <p className='mb-2' id='mentor_id'><strong>Mentor:</strong> {squad.mentor}</p>
            <p className='mb-2' id='desarrollador1_id'><strong>Desarrollador 1:</strong> {squad.dev1}</p>
            <p className='mb-2' id='desarrollador2_id'><strong>Desarrollador 2:</strong> {squad.dev2}</p>
            <p className='mb-2' id='desarrollador3_id'><strong>Desarrollador 3:</strong> {squad.dev3}</p>
            <p className='mb-2' id='tester_id'><strong>Tester:</strong> {squad.tester}</p>
            <p className='mb-2' id='uxui_id'><strong>Diseñador:</strong> {squad.designer}</p>
            <div className="flex space-x-2 mt-2">
              <button
                onClick={() => handleEdit(squad)}
                className="flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition-colors"
              >
                <EditIcon />
                Editar
              </button>
              <button
                onClick={() => handleDelete(squad.id)}
                className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
              >
                <TrashIcon />
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center top-16">
          <div className="bg-white rounded-lg w-96 max-w-[90%]">
            <div className="flex justify-between items-center p-1 border-b border-gray-200">
              <h2 className="text-xl font-semibold">{currentSquad.id ? 'Editar Squad' : 'Nuevo Squad'}</h2>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                <CloseIcon />
              </button>
            </div>
            <div className="p-4 space-y-1">
              {/* Mentor */}
              <label className='mb-3'>Mentor</label>
              <select name="mentor" value={currentSquad.mentor} onChange={handleInputChange} className="w-full px-3 py-2 border">
                <option value="" id='mentor_id'>Seleccionar Mentor</option>
                {mentors.map((mentor) => (
                  <option key={mentor.id} value={mentor.name}>
                    {mentor.name}
                  </option>
                ))}
              </select>

              {/* Desarrolladores */}
              <label>Desarrollador 1</label>
              <select name="dev1" value={currentSquad.dev1} onChange={handleInputChange} className="w-full px-3 py-2 border">
                <option value="" id='estudiantes_id'>Seleccionar Dev 1</option>
                {devs.map((dev) => (
                  <option key={dev.id} value={dev.name}>
                    {dev.name}
                  </option>
                ))}
              </select>

              <label>Desarrollador 2</label>
              <select name="dev2" value={currentSquad.dev2} onChange={handleInputChange} className="w-full px-3 py-2 border">
                <option value="" id='estudiantes_id'>Seleccionar Dev 2</option>
                {devs.map((dev) => (
                  <option key={dev.id} value={dev.name}>
                    {dev.name}
                  </option>
                ))}
              </select>

              <label>Desarrollador 3</label>
              <select name="dev3" value={currentSquad.dev3} onChange={handleInputChange} className="w-full px-3 py-2 border">
                <option value="" id='estudiantes_id'>Seleccionar Dev 3</option>
                {devs.map((dev) => (
                  <option key={dev.id} value={dev.name}>
                    {dev.name}
                  </option>
                ))}
              </select>

              {/* Tester */}
              <label>Tester</label>
              <select name="tester" value={currentSquad.tester} onChange={handleInputChange} className="w-full px-3 py-2 border">
                <option value=""  id='estudiantes_id'>Seleccionar Tester</option>
                {testers.map((tester) => (
                  <option key={tester.id} value={tester.name}>
                    {tester.name}
                  </option>
                ))}
              </select>

              {/* Diseñador */}
              <label>Diseñador</label>
              <select name="designer" value={currentSquad.designer} onChange={handleInputChange} className="w-full px-3 py-2 border">
                <option value="" id='estudiantes_id'>Seleccionar Diseñador</option>
                {designers.map((designer) => (
                  <option key={designer.id} value={designer.name}>
                    {designer.name}
                  </option>
                ))}
              </select>

              {/* Botones */}
              <div className="flex justify-end space-x-2">
                <button onClick={handleCloseModal} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400">
                  Cancelar
                </button>
                <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SquadManagement;