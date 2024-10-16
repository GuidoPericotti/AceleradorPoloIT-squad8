
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Removemos useNavigate ya que no lo necesitamos

export const SidebarEmpresa = ({ 
  onProfileClick, 
  onParticipantsChange, 
  darkMode,
  showProfileCard,
  currentView // Recibimos la vista actual como prop
}) => {
  const location = useLocation();
  const [selectedParticipant, setSelectedParticipant] = useState('');

  useEffect(() => {
    // Actualizar el select basado en la vista actual
    setSelectedParticipant(currentView);
  }, [currentView]);

  const handleParticipantsChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedParticipant(selectedValue);
    onParticipantsChange(selectedValue);
  };

  const handleProfileClick = (e) => {
    e.preventDefault();
    onProfileClick();
  };

  const handleProjectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedParticipant('');
    onParticipantsChange('');
  };

  return (
    <aside className={`
      fixed left-0 top-0 
      w-64 
      min-h-screen
      ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}
      z-10
    `}>
      <div className="h-full flex flex-col">
        <div className="h-16"></div>
        
        <div className="flex-grow p-4 overflow-y-auto">
          <button
            className={`
              flex items-center w-full p-2 mb-4 rounded-lg shadow
              transition-colors duration-200
              ${darkMode 
                ? `bg-gray-700 ${showProfileCard ? 'ring-2 ring-blue-500' : ''} hover:bg-gray-600` 
                : `bg-white ${showProfileCard ? 'ring-2 ring-blue-500' : ''} hover:bg-gray-300`
              }
            `}
            onClick={handleProfileClick}
          >
            <img
              src="https://via.placeholder.com/40"
              alt="Perfil"
              className="w-10 h-10 rounded-full mr-3"
            />
            <span className="text-lg font-medium">Perfil</span>
          </button>
          
          <div className="mb-4">
            <label 
              htmlFor="proyectos" 
              className="block text-sm font-medium mb-2"
            >
              Proyectos
            </label>
            <select
              id="proyectos"
              className={`
                w-full p-2 border rounded-lg 
                transition-colors duration-200
                focus:outline-none focus:ring focus:border-blue-400
                ${darkMode 
                  ? 'bg-gray-700 text-white border-gray-600' 
                  : 'bg-white text-black border-gray-300'
                }
              `}
              onChange={handleProjectChange}
            >
              <option value="">Seleccione...</option>
              <option value="proyecto2">Proyecto 2</option>
              <option value="proyecto3">Proyecto 3</option>
            </select>
          </div>

          <div>
            <label 
              htmlFor="participantes" 
              className="block text-sm font-medium mb-2"
            >
              Participantes
            </label>
            <select
              id="participantes"
              value={selectedParticipant}
              className={`
                w-full p-2 border rounded-lg 
                transition-colors duration-200
                focus:outline-none focus:ring focus:border-blue-400
                ${darkMode 
                  ? 'bg-gray-700 text-white border-gray-600' 
                  : 'bg-white text-black border-gray-300'
                }
              `}
              onChange={handleParticipantsChange}
            >
              <option value="">Seleccione...</option>
              <option value="estudiantes">Mentores</option>
              <option value="mentores">Estudiantes</option>
            </select>
          </div>
        </div>
      </div>
    </aside>
  );
};