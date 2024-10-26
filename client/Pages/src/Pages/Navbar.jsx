import React, { useState } from 'react';
import { Login } from '../components/NavbarComponents/Login';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToggleSwitch } from '../components/NavbarComponents/ToggleSwitch';
import LogoPolo from '../assets/logo_polo_it.png';

export const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLoginChange = (event) => {
    const value = event.target.value;
    switch(value) {
      case 'administrador':
        navigate('/admin-login');
        break;
      case 'empresa':
        navigate('/empresa-login');
        break;
      case 'ong':
        navigate('/ong-login');
        break;
      default:
        break;
    }
  };

  return (
    <header className="adms:max-w-[645px] admlg:max-w-full fixed top-0 w-full z-50 bg-[#C6E5D6] dark:bg-dark-primary shadow rounded-md">
      <nav className="max-w-7xl mx-auto px-4 text-black dark:text-white">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to='/' className="flex-shrink-0 w-12 h-12 admlg:w-32 admlg:h-32 bg-transparent">
            <img src={LogoPolo} alt="Polo-it icon" className="w-full h-full object-contain" />
          </NavLink>

          {/* Menú de navegación para pantallas grandes */}
          {/* <div className="hidden admlg:flex flex-1 justify-center">
            <ul className="flex space-x-4 admlg:space-x-6">
              <li><NavLink to='/ong'>Ong</NavLink></li>
              <li><NavLink to='/empresa'>Empresas</NavLink></li>
            </ul>
          </div> */}

          {/* Contenedor derecho */}
          <div className="flex items-center gap-2">
            {/* Dark mode toggle */}
            <div className="p-2 bg-[#C6E5D6] dark:bg-dark-primary">
              <ToggleSwitch
                isChecked={darkMode}
                onChange={handleToggleDarkMode}
              />
            </div>  
            {/* Select de inicio de sesión para pantallas grandes */}
            <div className="hidden admlg:block">
              <select 
                onChange={handleLoginChange}
                className="px-4 py-2 rounded-md bg-[#A5CCBA] dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600"
                defaultValue=""
              >
                <option value="" disabled>Iniciar sesión</option>
                <option value="administrador">Administrador</option>
                <option value="empresa">Empresas</option>
                <option value="ong">ONG</option>
              </select>
            </div>
            <div className=" px-3 adms:-mr-10 admlg:mr-3">
                <NavLink to='/crear-cuenta' onClick={toggleMenu}><Login /></NavLink>
              </div>

            {/* Botón del menú hamburguesa - visible en móvil */}
            <button
              onClick={toggleMenu}
              className="adms:ml-10 admlg:hidden inline-flex items-center justify-center p-2 rounded-md text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                className="h-6 w-6"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isOpen && (
          <div className="admlg:hidden mt-2 pb-4">
            <ul className="flex flex-col space-y-2">
              <li><NavLink to='/ong' onClick={toggleMenu} className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">Ong</NavLink></li>
              <li><NavLink to='/empresa' onClick={toggleMenu} className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">Empresas</NavLink></li>
            </ul>
            {/* Select de inicio de sesión para móvil */}
            <div className="mt-4 px-3">
              <select 
                onChange={handleLoginChange}
                className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600"
                defaultValue=""
              >
                <option value="" disabled>Iniciar sesión</option>
                <option value="administrador">Administrador</option>
                <option value="empresa">Empresas</option>
                <option value="ong">ONG</option>
              </select>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};