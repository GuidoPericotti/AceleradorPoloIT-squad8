// import React, { useState } from 'react';
// import { Logo } from './Logo';
// import { NavLinks } from './NavLinks';
// import { SearchInput } from './SearchInput';
// import { UserMenu } from './UserMenu';
// import { ToggleSwitch } from '../../../NavbarComponents/ToggleSwitch';

// export const NavbarOng = ({ isModalOpen, darkMode, setDarkMode }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   // const toggleMenu = () => {
//   //   setIsOpen(!isOpen);
//   // };

//   // const toggleDarkMode = () => {
//   //   setDarkMode(!darkMode);
//   // };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className={`fixed top-0 w-full z-50 ${darkMode ? 'bg-gray-900' : 'bg-[#C6E5D6]'} shadow`}>
//       <nav className={`flex items-center justify-between w-full h-16 px-4 ${isModalOpen ? 'filter blur-sm' : ''}`}>
//         <div className="flex items-center justify-between w-full">
//           {/* Logo */}
//           <Logo />

//           {/* Search input for medium to large screens */}
//           <div className="hidden adms:flex flex-grow justify-center">
//             <SearchInput />
//           </div>

//           {/* Toggle switch for dark mode */}
//           <div className="hidden adms:flex items-center justify-center">
//             <ToggleSwitch 
//               checked={darkMode} 
//               onChange={() => setDarkMode(!darkMode)} 
//             />
//           </div>

//           {/* Navigation links for medium to large screens */}
//           <div className="hidden adms:flex items-center pl-10">
//             <NavLinks />
//           </div>
//           <button
//             onClick={toggleMenu}
//             className="block admlg:hidden text-black dark:text-white focus:outline-none"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
//               <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
//             </svg>
//           </button>

//           {/* User menu for medium to large screens */}
//           <div className="hidden adms:flex items-center">
//             <UserMenu />
//           </div>

//           {/* Hamburger menu button for small screens */}
//           <button
//             onClick={toggleMenu}
//             className="block adms:hidden text-black dark:text-white focus:outline-none"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
//               <path
//                 fillRule="evenodd"
//                 d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Responsive menu for small screens */}
//         {isMenuOpen && (
//           <div className="admlg:hidden pt-44">
//             <div className="flex flex-col items-center space-y-4">
//               <SearchInput />
//               <ToggleSwitch checked={darkMode} onChange={toggleDarkMode} />
//               <NavLinks />
//               <UserMenu />
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

import React, { useState } from 'react';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { SearchInput } from './SearchInput';
import { UserMenu } from './UserMenu';
import { ToggleSwitch } from '../../../NavbarComponents/ToggleSwitch';

export const NavbarOng = ({ isModalOpen, darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 w-full z-50 ${darkMode ? 'bg-gray-900' : 'bg-[#C6E5D6]'} shadow`}>
      <nav className={`flex items-center justify-between w-full h-16 px-4 ${isModalOpen ? 'filter blur-sm' : ''}`}>
        <div className="flex items-center justify-between w-full">
          <Logo />

          <div className="hidden adms:flex flex-grow justify-center">
            <SearchInput />
          </div>

          <div className="hidden adms:flex items-center justify-center">
            <ToggleSwitch 
              checked={darkMode} 
              onChange={() => setDarkMode(!darkMode)} // Cambia el modo oscuro
            />
          </div>

          <div className="hidden adms:flex items-center pl-10">
            <NavLinks />
          </div>
          
          <button
            onClick={toggleMenu}
            className="block admlg:hidden text-black dark:text-white focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          </button>

          <div className="hidden adms:flex items-center">
            <UserMenu />
          </div>
        </div>

        {isMenuOpen && (
          <div className="admlg:hidden pt-44">
            <div className="flex flex-col items-center space-y-4">
              <SearchInput />
              <ToggleSwitch 
                checked={darkMode} 
                onChange={() => setDarkMode(!darkMode)} // Cambia el modo oscuro
              />
              <NavLinks />
              <UserMenu />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
