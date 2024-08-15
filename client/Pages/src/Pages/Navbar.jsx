
import React, { useState } from 'react';
import Logo from '../../src/assets/logo.svg';
import { ButtonOng } from '../components/NavbarComponents/ButtonOng';
import { Login } from '../components/NavbarComponents/Login';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow rounded-md">
      <nav className="mt-2 ml-3 mr-3 text-black">
      <div className="flex items-center justify-between w-full h-16 ">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img src={Logo} alt="logo image" />
          </a>

          {/* Espacio flexible que empuja el menú al centro */}
          <div className="flex-grow"></div>

          {/* Menú en pantallas grandes, centrado, se usa react-router-dom para redireccion*/}
          <ul className="hidden md:flex space-x-6">
            <li><NavLink to='/'><ButtonOng /></NavLink></li>
            <li><NavLink to='/empresas'>Empresas</NavLink></li>
            <li><NavLink to='/proyectos'>Proyectos</NavLink></li>
            <li><NavLink to='/participantes'>Participantes</NavLink></li>
            <li><NavLink to='/mentores'>Mentores</NavLink></li>
            <li><NavLink to='/contact'>Contacto</NavLink></li>
          </ul>

          {/* Espacio flexible que empuja el login al final */}
          <div className="flex-grow"></div>

          {/* Login al final */}
          <div className="hidden md:flex items-center">
            <Login />
          </div>

          {/* Menú Hamburguesa */}
          <button
            onClick={toggleMenu}
            className="block md:hidden text-black focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Menú desplegable en pantallas pequeñas, se usa react-router-dom para redireccion */}
        {isOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col items-start space-y-4 mt-2">
              <li><NavLink><ButtonOng /></NavLink></li>
              <li><NavLink  to='/empresas'>Empresas</NavLink></li>
              <li><NavLink to='/proyectos'>Proyectos</NavLink></li>
              <li><NavLink to='/participantes'>Participantes</NavLink></li>
              <li><NavLink to='/mentores'>Mentores</NavLink></li>
              <li><NavLink to='/contact'>Contacto</NavLink></li>
            </ul>
            <div className="mt-4">
              <Login />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
