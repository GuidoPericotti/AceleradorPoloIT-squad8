import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const SidebarEmpresa = ({ onProfileClick, onParticipantsChange }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedParticipant, setSelectedParticipant] = useState('');

  useEffect(() => {
    // Actualizar el estado basado en la ruta actual
    if (location.pathname === '/estudiantes') {
      setSelectedParticipant('mentores');
    } else if (location.pathname === '/estudiantes') {
      setSelectedParticipant('mentores');
    } else {
      setSelectedParticipant('');
    }
  }, [location.pathname]);

  const handleParticipantsChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedParticipant(selectedValue);
    
    if (selectedValue === 'mentores') {
      navigate('/Estudiantes');
      onParticipantsChange('mentores');
    } else if (selectedValue === 'mentores') {
      navigate('/Estudiantes');
      onParticipantsChange('mentores');
    } else {
      navigate('/');
      onParticipantsChange('');
    }
  };

  const handleProfileClick = () => {
    setSelectedParticipant('');
    onProfileClick();
    navigate('/');
  };

  const handleProjectChange = () => {
    setSelectedParticipant('');
    navigate('/');
  };

  return (
    <div className="w-64 bg-gray-200 flex flex-col h-screen pt-20">
      <div className="flex-grow p-4 overflow-y-auto">
        <button
          className="flex items-center w-full p-2 mb-4 bg-white hover:bg-gray-300 rounded-lg shadow"
          onClick={handleProfileClick}
        >
          <img
            src="https://via.placeholder.com/40"
            alt="Perfil"
            className="w-10 h-10 rounded-full mr-3"
          />
          <span className="text-lg font-medium">Perfil</span>
        </button>
        
        {/* Select para Proyectos */}
        <div className="mb-4">
          <label htmlFor="proyectos" className="block text-sm font-medium mb-2">Proyectos</label>
          <select
            id="proyectos"
            className="w-full p-2 bg-white border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            onChange={handleProjectChange}
          >
            <option value="">Seleccione...</option>
            <option value="proyecto2">Proyecto 2</option>
            <option value="proyecto3">Proyecto 3</option>
          </select>
        </div>

        <div>
          <label htmlFor="participantes" className="block text-sm font-medium mb-2">Participantes</label>
          <select
            id="participantes"
            value={selectedParticipant}
            className="w-full p-2 bg-white border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            onChange={handleParticipantsChange}
          >
            <option value="">Seleccione...</option>
            <option value="mentores">Estudiantes</option>
          </select>
        </div>
      </div>
    </div>
  );
};