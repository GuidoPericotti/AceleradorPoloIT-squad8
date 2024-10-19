import React, { useState } from 'react';

// SVG Icons como componentes
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SquadManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [squads, setSquads] = useState([]);
  const [currentSquad, setCurrentSquad] = useState({
    dev1: '',
    dev2: '',
    dev3: '',
    tester: '',
    designer: ''
  });
  const [nextId, setNextId] = useState(1); // Controla el siguiente ID

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentSquad(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (currentSquad.id) {
        setSquads(squads.map(squad => 
          squad.id === currentSquad.id ? currentSquad : squad
        ));
      } else {
        setSquads([...squads, { ...currentSquad, id: nextId }]);
        setNextId(nextId + 1); // Incrementa el ID para el siguiente squad
      }
      handleCloseModal();;
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentSquad({
      dev1: '',
      dev2: '',
      dev3: '',
      tester: '',
      designer: ''
    });
  };

  const handleEdit = (squad) => {
    setCurrentSquad(squad);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setSquads(squads.filter(squad => squad.id !== id));
  };

  const filteredSquads = squads.filter(squad => 
    Object.values(squad).some(value => 
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="mb-4">
        <button 
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          <PlusIcon />
          Nuevo Squad
        </button>
      </div>


      {/* Content Area */}
      <div className="flex-1 p-6 overflow-auto bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSquads.map((squad) => (
            <div key={squad.id} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Squad #{squad.id}</h3>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleEdit(squad)}
                      className="p-2 text-gray-600 hover:text-blue-500 rounded-full hover:bg-gray-100"
                    >
                      <EditIcon />
                    </button>
                    <button 
                      onClick={() => handleDelete(squad.id)}
                      className="p-2 text-gray-600 hover:text-red-500 rounded-full hover:bg-gray-100"
                    >
                      <TrashIcon />
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Dev 1: {squad.dev1}</p>
                  <p className="text-sm text-gray-600">Dev 2: {squad.dev2}</p>
                  <p className="text-sm text-gray-600">Dev 3: {squad.dev3}</p>
                  <p className="text-sm text-gray-600">Tester: {squad.tester}</p>
                  <p className="text-sm text-gray-600">Diseñador: {squad.designer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-96 max-w-[90%]">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold">
                {currentSquad.id ? 'Editar Squad' : 'Nuevo Squad'}
              </h2>
              <button 
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <input
                type="text"
                name="dev1"
                placeholder="Desarrollador 1"
                value={currentSquad.dev1}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                name="dev2"
                placeholder="Desarrollador 2"
                value={currentSquad.dev2}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                name="dev3"
                placeholder="Desarrollador 3"
                value={currentSquad.dev3}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                name="tester"
                placeholder="Tester"
                value={currentSquad.tester}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                name="designer"
                placeholder="Diseñador"
                value={currentSquad.designer}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex justify-end gap-2 p-4 border-t border-gray-200">
              <button 
                onClick={handleCloseModal}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button 
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                {currentSquad.id ? 'Guardar cambios' : 'Crear Squad'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SquadManagement;