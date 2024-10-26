import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavLinks = () => {
  return (
    <ul className="flex items-center space-x-3">
      <li>
        <NavLink
          className="text-black/60 text-xs hover:text-black/80 dark:text-white/60 dark:hover:text-white/80"
          to="/#"
        >
          ONG
        </NavLink>
      </li>
    </ul>
  );
};