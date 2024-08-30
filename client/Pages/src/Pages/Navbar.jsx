import React, { useState } from 'react';
import Logo from '../../src/assets/logo.svg';
//import { ButtonOng } from '../components/NavbarComponents/ButtonOng';
import { Login } from '../components/NavbarComponents/Login';
import { NavLink } from 'react-router-dom';
import { ToggleSwitch } from '../components/NavbarComponents/ToggleSwitch';

export const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-zinc-50 dark:bg-gray-900 shadow rounded-md">
      <nav className="mt-2 ml-3 mr-3 text-black dark:text-white">
        <div className="flex items-center justify-between w-full h-16">
          <NavLink to='/' className="flex-shrink-0 w-16 h-16 bg-transparent">
            <img src="https://media.licdn.com/dms/image/v2/C4E0BAQF7uvigqKkweg/company-logo_200_200/company-logo_200_200/0/1630570162567/polo_it_de_buenos_aires_logo?e=2147483647&v=beta&t=s4wtzh9g-uMs5Lv1h-dmdvXytqhqCMkh1L314tzUc4Q" alt="Polo-it icon" />
          </NavLink>
          <div className="flex-grow"></div>
          <ul className="hidden md:flex space-x-6">
            <li><NavLink to='/OngClient'>Ong</NavLink></li>
            <li><NavLink to='/empresas'>Empresas</NavLink></li>
            <li><NavLink to='/proyectos'>Proyectos</NavLink></li>
            <li><NavLink to='/participantes'>Participantes</NavLink></li>
            <li><NavLink to='/mentores'>Mentores</NavLink></li>
            <li><NavLink to='/contact'>Contacto</NavLink></li>
          </ul>
          <div className="flex-grow"></div>
          <div className="p-2 bg-zinc-50 mr-5 dark:bg-gray-900">
            <ToggleSwitch
              isChecked={darkMode}
              onChange={handleToggleDarkMode}
            />
          </div>
          <div className="hidden md:flex items-center">
            <NavLink to='/Login'><Login /></NavLink>
          </div>
          <button
            onClick={toggleMenu}
            className="block md:hidden text-black dark:text-white focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        {/* Responsive navbar */}
        {isOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col items-start space-y-4 mt-2">
              <li><NavLink to='/empresas'>Ong</NavLink></li>
              <li><NavLink to='/empresas'>Empresas</NavLink></li>
              <li><NavLink to='/proyectos'>Proyectos</NavLink></li>
              <li><NavLink to='/participantes'>Participantes</NavLink></li>
              <li><NavLink to='/mentores'>Mentores</NavLink></li>
              <li><NavLink to='/contact'>Contacto</NavLink></li>
            </ul>
            <div className="mt-4">
            <NavLink to='/Login'><Login /></NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
