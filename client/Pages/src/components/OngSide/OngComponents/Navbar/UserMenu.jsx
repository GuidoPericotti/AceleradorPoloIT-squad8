import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
const UserIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
    );
  
    const ConfigIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    );
  
    const HelpIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
      </svg>
    );
  
    const LogoutIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
      </svg>
    );

export const UserMenu = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode); // Cambiar el estado cuando se toque el toggle
  };

  return (
    <div className="relative flex items-center">
      {/* Menú de usuario */}
      <img
        src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
        className="rounded-full cursor-pointer"
        style={{ height: '25px', width: '25px' }}
        alt="User avatar"
        loading="lazy"
        aria-expanded={isDropdownOpen ? "false" : "true"}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      />
      {isDropdownOpen && (
        <ul className="absolute z-[1000] mt-44 -ml-32 right-0 min-w-[200px] list-none overflow-hidden rounded-lg border-none bg-white text-left text-base shadow-lg dark:bg-gray-900">
          <li>
            <NavLink
              className="flex items-center w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 dark:bg-gray-900 dark:text-neutral-200"
              to="#"
            >
              <UserIcon />
              Mi usuario
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 dark:bg-gray-900 dark:text-neutral-200"
              to="#"
            >
              <ConfigIcon />
              Configuración
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 dark:bg-gray-900 dark:text-neutral-200"
              to="#"
            >
              <HelpIcon />
              Ayuda
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 dark:bg-gray-900 dark:text-neutral-200"
              to="#"
            >
              <LogoutIcon />
              Cerrar sesión
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};
