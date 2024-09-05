import React, { useState } from 'react';
import { NavbarOng } from './Navbar/NavbarOng';
import { SidebarOng } from './Navbar/SidebarOng';
import  DashboardLayout  from './DashboardLayout';
//import { DashboardHome } from './CreateCourseModal';

export const LayoutOng = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavbarOng isOpen={isOpen} setIsOpen={setIsOpen} />
      <SidebarOng isOpen={isOpen} setIsOpen={setIsOpen} />
      <DashboardLayout />

    </>
  );
};
