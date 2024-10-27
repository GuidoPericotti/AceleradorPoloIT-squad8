import React from 'react';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { SearchInput } from './SearchInput';
import { UserMenu } from './UserMenu';
import { ToggleSwitch } from '../../../NavbarComponents/ToggleSwitch';

export const NavbarOng = ({ isModalOpen, darkMode, setDarkMode }) => {
  return (
    <header className={`fixed top-0 w-full z-50 ${darkMode ? 'bg-gray-900' : 'bg-[#C6E5D6]'} shadow`}>
      <nav className={`flex items-center justify-between w-full h-20 px-4 ${isModalOpen ? 'filter blur-sm' : ''}`}>
        <div className="flex items-center justify-between w-full gap-4">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* <div className="flex-grow max-w-xs">
            <SearchInput />
          </div> */}

          <div className="flex items-center gap-4">
            <ToggleSwitch 
              checked={darkMode} 
              onChange={() => setDarkMode(!darkMode)}
            />
            {/* <NavLinks /> */}
            {/* <UserMenu /> */}
          </div>
        </div>
      </nav>
    </header>
  );
};