import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const SidebarEmpresa = ({ 
  onProfileClick, 
  onParticipantsChange, 
  darkMode, 
  showProfileCard, 
  currentView 
}) => {
  const location = useLocation();
  const [selectedParticipant, setSelectedParticipant] = useState('');

  useEffect(() => {
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

  return (
    <aside className={`
      fixed left-0 top-0 
      w-64 
      min-h-screen
      ${darkMode ? 'bg-gray-800 text-white' : 'bg-[#C6E5D6] text-black'}
      z-10
    `}>
      <div className="h-full flex flex-col pt-12">
        <div className="h-16"></div>
        
        <div className="flex-grow p-4 overflow-y-auto">
          <button
            className={`
              flex items-center w-full p-2 mb-4 rounded-lg shadow
              transition-colors duration-200
              ${darkMode 
                ? `bg-gray-700 ${showProfileCard && currentView === 'dashboard' ? 'ring-2 ring-blue-500' : ''} hover:bg-gray-600` 
                : `bg-white ${showProfileCard && currentView === 'dashboard' ? 'ring-2 ring-blue-500' : ''} hover:bg-gray-300`}
            `}
            onClick={handleProfileClick}
          >
            <img
              src="https://via.placeholder.com/40"
              alt="ConfPerfil"
              className="w-10 h-10 rounded-full mr-3"
            />
            <span className="text-lg font-medium">Configurar Perfil</span>
          </button>
          <button
            className={`
              flex items-center w-full p-2 mb-4 rounded-lg shadow
              transition-colors duration-200
              ${darkMode 
                ? `bg-gray-700 ${currentView === 'perfil' ? 'ring-2 ring-blue-500' : ''} hover:bg-gray-600` 
                : `bg-white ${currentView === 'perfil' ? 'ring-2 ring-blue-500' : ''} hover:bg-gray-300`}
            `}
            onClick={() => onParticipantsChange('perfil')}
          >
            <img
              src="https://via.placeholder.com/40"
              alt="VerPerfil"
              className="w-10 h-10 rounded-full mr-3"
            />
            <span className="text-lg font-medium">Ver Perfil</span>
          </button>
          
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
                focus:outline-none focus:ring 
                ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}
              `}
              onChange={handleParticipantsChange}
            >
              <option value=" ">Selecciona</option>
              <option value="mentores">Estudiantes</option>
              {/* <option value="estudiantes">Estudiantes</option> */}
            </select>
          </div>
        </div>
      </div>
    </aside>
  );
};