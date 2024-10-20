// import React, { useState } from 'react';
// import { Login } from '../components/NavbarComponents/Login';
// import { NavLink } from 'react-router-dom';
// import { ToggleSwitch } from '../components/NavbarComponents/ToggleSwitch';

// export const Navbar = ({ darkMode, setDarkMode }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleToggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <header className="fixed top-0 w-full z-50 bg-[#C6E5D6] dark:bg-dark-primary shadow rounded-md">
//       <nav className="mt-2 ml-3 mr-3 text-black dark:text-white">
//         <div className="flex items-center justify-between w-full h-16">
//           <NavLink to='/' className="flex-shrink-0 w-16 h-16 bg-transparent">
//             <img src="https://media.licdn.com/dms/image/v2/C4E0BAQF7uvigqKkweg/company-logo_200_200/company-logo_200_200/0/1630570162567/polo_it_de_buenos_aires_logo?e=2147483647&v=beta&t=s4wtzh9g-uMs5Lv1h-dmdvXytqhqCMkh1L314tzUc4Q" alt="Polo-it icon" />
//           </NavLink>
//           <div className="flex-grow"></div>
//           <ul className="hidden admlg:flex space-x-6">
//             <li><NavLink to='/ong'>Ong</NavLink></li>
//             <li><NavLink to='/empresa'>Empresas</NavLink></li>
//             <li><NavLink to='/proyectos'>Proyectos</NavLink></li>
//             <li><NavLink to='/participantes'>Participantes</NavLink></li>
//             <li><NavLink to='/mentores'>Mentores</NavLink></li>
//             <li><NavLink to='/contact'>Contacto</NavLink></li>
//           </ul>
//           <div className="flex-grow"></div>
//           <div className="p-2 bg-[#C6E5D6] dark:bg-dark-primary mr-5">
//             <ToggleSwitch
//               isChecked={darkMode}
//               onChange={handleToggleDarkMode}
//             />
//           </div>
//           <div className="hidden admlg:flex items-center">
//             <NavLink to='/crear-cuenta'><Login /></NavLink>
//           </div>
//           <button
//             onClick={toggleMenu}
//             className="block admlg:hidden text-black dark:text-white focus:outline-none"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
//               <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
//             </svg>
//           </button>
//         </div>
//         {/* Responsive navbar */}
//         {isOpen && (
//           <div className="admlg:hidden">
//             <ul className="flex flex-col items-start space-y-4 mt-2">
//               <li><NavLink to='/empresas'>Ong</NavLink></li>
//               <li><NavLink to='/empresas'>Empresas</NavLink></li>
//               <li><NavLink to='/proyectos'>Proyectos</NavLink></li>
//               <li><NavLink to='/participantes'>Participantes</NavLink></li>
//               <li><NavLink to='/mentores'>Mentores</NavLink></li>
//               <li><NavLink to='/contact'>Contacto</NavLink></li>
//             </ul>
//             <div className="mt-4">
//               <NavLink to='/crear-cuenta'><Login /></NavLink>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };
// import React, { useState } from 'react'; 
// import { Login } from '../components/NavbarComponents/Login';
// import { NavLink } from 'react-router-dom';
// import { ToggleSwitch } from '../components/NavbarComponents/ToggleSwitch';
// import LogoPolo from '../assets/logo_polo_it.jpg'

// export const Navbar = ({ darkMode, setDarkMode }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleToggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <header className="fixed top-0 w-full z-50 bg-[#C6E5D6] dark:bg-dark-primary shadow rounded-md">
//       <nav className="mt-2 ml-3 mr-3 text-black dark:text-white ">
//         <div className="flex items-center justify-between w-full h-16">
//           <NavLink to='/' className="flex-shrink-0 w-16 h-16 bg-transparent">
//             <img src={LogoPolo} alt="Polo-it icon" />
//           </NavLink>
//           <div className="flex-grow"></div>

//           {/* En pantallas grandes */}
//           <ul className="hidden admlg:flex space-x-6">
//             <li><NavLink to='/ong'>Ong</NavLink></li>
//             <li><NavLink to='/empresa'>Empresas</NavLink></li>
//             <li><NavLink to='/proyectos'>Proyectos</NavLink></li>
//             <li><NavLink to='/participantes'>Participantes</NavLink></li>
//             <li><NavLink to='/mentores'>Mentores</NavLink></li>
//             <li><NavLink to='/contact'>Contacto</NavLink></li>
//           </ul>
          
//           <div className="flex-grow"></div>

//           {/* Dark mode toggle */}
//           <div className="p-2 bg-[#C6E5D6] dark:bg-dark-primary mr-5">
//             <ToggleSwitch
//               isChecked={darkMode}
//               onChange={handleToggleDarkMode}
//             />
//           </div>

//           {/* Login para pantallas grandes */}
//           <div className="hidden admlg:flex items-center">
//             <NavLink to='/crear-cuenta'><Login /></NavLink>
//           </div>

//           {/* Botón del menú hamburguesa para pantallas pequeñas */}
//           <button
//             onClick={toggleMenu}
//             className="block admlg:hidden text-black dark:text-white focus:outline-none"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
//               <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
//             </svg>
//           </button>
//         </div>

//         {/* Menú desplegable para pantallas pequeñas */}
//         {isOpen && (
//           <div className="admlg:hidden">
//             <ul className="flex flex-col items-start space-y-4 mt-2">
//               <li><NavLink to='/empresas'>Ong</NavLink></li>
//               <li><NavLink to='/empresas'>Empresas</NavLink></li>
//               <li><NavLink to='/proyectos'>Proyectos</NavLink></li>
//               <li><NavLink to='/participantes'>Participantes</NavLink></li>
//               <li><NavLink to='/mentores'>Mentores</NavLink></li>
//               <li><NavLink to='/contact'>Contacto</NavLink></li>
//             </ul>
//             <div className="mt-4">
//               <NavLink to='/crear-cuenta'><Login /></NavLink>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };
// import React, { useState } from 'react';
// import { Login } from '../components/NavbarComponents/Login';
// import { NavLink } from 'react-router-dom';
// import { ToggleSwitch } from '../components/NavbarComponents/ToggleSwitch';
// import LogoPolo from '../assets/logo_polo_it.png';

// export const Navbar = ({ darkMode, setDarkMode }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleToggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <header className="adms:max-w-[645px]	admlg:max-w-full fixed top-0 w-full z-50 bg-[#C6E5D6] dark:bg-dark-primary shadow rounded-md">
//       <nav className="max-w-7xl mx-auto px-4 text-black dark:text-white">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <NavLink to='/' className="flex-shrink-0 w-12 h-12 admlg:w-24 admlg:h-24 bg-transparent">
//             <img src={LogoPolo} alt="Polo-it icon" className="w-full h-full object-contain" />
//           </NavLink>

//           {/* Menú de navegación para pantallas grandes */}
//           <div className="hidden admlg:flex flex-1 justify-center">
//             <ul className="flex space-x-4 admlg:space-x-6">
//               <li><NavLink to='/ong'>Ong</NavLink></li>
//               <li><NavLink to='/empresa'>Empresas</NavLink></li>
//             </ul>
//           </div>

//           {/* Contenedor derecho */}
//           <div className="flex items-center gap-2">
//             {/* Dark mode toggle */}
//             <div className="p-2 bg-[#C6E5D6] dark:bg-dark-primary">
//               <ToggleSwitch
//                 isChecked={darkMode}
//                 onChange={handleToggleDarkMode}
//               />
//             </div>

//             {/* Login para pantallas grandes */}
//             <div className="hidden admlg:block">
//               <NavLink to='/crear-cuenta'><Login /></NavLink>
//             </div>

//             {/* Botón del menú hamburguesa - visible en móvil */}
//             <button
//               onClick={toggleMenu}
//               className="adms:ml-20 admlg:hidden inline-flex items-center justify-center p-2 rounded-md text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
//             >
//             <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 fill="none" 
//                 viewBox="0 0 24 24" 
//                 stroke="currentColor" 
//                 className="h-6 w-6"
//               >
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth={2} 
//                   d="M4 6h16M4 12h16M4 18h16" 
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Menú móvil desplegable */}
//         {isOpen && (
//           <div className="admlg:hidden mt-2 pb-4">
//             <ul className="flex flex-col space-y-2">
//               <li><NavLink to='/ong' onClick={toggleMenu} className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">Ong</NavLink></li>
//               <li><NavLink to='/empresa' onClick={toggleMenu} className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">Empresas</NavLink></li> 
//             </ul>
//             <div className="mt-4 px-3">
//               <NavLink to='/crear-cuenta' onClick={toggleMenu}><Login /></NavLink>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };
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
          <NavLink to='/' className="flex-shrink-0 w-12 h-12 admlg:w-24 admlg:h-24 bg-transparent">
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
            <div className=" px-3">
               <NavLink to='/crear-cuenta' onClick={toggleMenu}><Login /></NavLink>
             </div>

            {/* Botón del menú hamburguesa - visible en móvil */}
            <button
              onClick={toggleMenu}
              className="adms:ml-20 admlg:hidden inline-flex items-center justify-center p-2 rounded-md text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
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