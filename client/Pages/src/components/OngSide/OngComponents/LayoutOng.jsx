 import React, { useState, useEffect } from 'react';
 import { NavbarOng } from './Navbar/NavbarOng';
 import DashboardLayout from './DashboardLayout';


export const LayoutOng = () => {
  const [darkMode, setDarkMode] = useState(false); // Inicia en modo claro
  const [isModalOpen, setIsModalOpen] = useState(false); // inicia el menu de ociones en foto de perfil
   

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={`relative ${darkMode ? 'dark' : ''}`}>
      <NavbarOng isModalOpen={isModalOpen}  darkMode={darkMode} setDarkMode={setDarkMode} />
      <DashboardLayout darkMode={darkMode} />
    </div>
  );
};
