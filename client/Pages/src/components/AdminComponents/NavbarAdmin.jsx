import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ToggleSwitch } from '../NavbarComponents/ToggleSwitch';
import LogoPolo from '../../assets/logo_polo_it.png'

export const NavbarAdmin = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  return (
    <header className="fixed top-0 w-full z-50 bg-[#C6E5D6] dark:bg-gray-900 shadow rounded-md">
      <nav className="mt-2 ml-3 mr-3 text-black dark:text-white">
        <div className="flex items-center justify-between w-full h-16">
          <NavLink to='/' className="flex-shrink-0 w-20 h-20 bg-transparent">
            <img src={LogoPolo} alt="Polo-it icon" />
          </NavLink>
          <div className="flex-grow"></div>
          {/* <ul className="hidden admlg:flex space-x-6">
            <li><NavLink to='/ong'>Ong</NavLink></li>
            <li><NavLink to='/empresa'>Empresas</NavLink></li>
            <li><NavLink to='/proyectos'>Proyectos</NavLink></li>
            <li><NavLink to='/participantes'>Participantes</NavLink></li>
            <li><NavLink to='/mentores'>Mentores</NavLink></li>
            {/* <li><NavLink to='/admin' >Admin</NavLink></li>  se añade vista admin temporal para ver la creacion 
          </ul> */}
          <div className="flex-grow"></div>
          <div className="p-2 bg-[#C6E5D6] mr-5 dark:bg-gray-900">
            <ToggleSwitch
              isChecked={darkMode}
              onChange={handleToggleDarkMode}
            />
          </div>
          <button
            onClick={toggleMenu}
            className="block admlg:hidden text-black dark:text-white focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        {/* Responsive navbar */}
        {isOpen && (
          {/* <div className="admlg:hidden">
            <ul className="flex flex-col items-start space-y-4 mt-2">
              <li><NavLink to='/empresas'>Ong</NavLink></li>
              <li><NavLink to='/empresas'>Empresas</NavLink></li>
              <li><NavLink to='/proyectos'>Proyectos</NavLink></li>
              <li><NavLink to='/participantes'>Participantes</NavLink></li>
              <li><NavLink to='/mentores'>Mentores</NavLink></li>
              <li><NavLink to='/contact'>Contacto</NavLink></li>
             {/* <li><NavLink to='/admin'>Admin</NavLink></li> 
            </ul>
          </div> */}
        )}
      </nav>
    </header>
  );
};