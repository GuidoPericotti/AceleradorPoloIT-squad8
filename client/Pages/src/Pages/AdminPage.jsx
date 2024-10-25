import React, { useEffect, useState } from 'react'
import  CardPrincipal  from '../components/AdminComponents/CardPrincipal'
// import { Footer } from './Footer'
import { NavbarAdmin } from '../components/AdminComponents/NavbarAdmin'


export const AdminPage = () => {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const savedMode = localStorage.getItem('darkMode');
      return savedMode !== null ? JSON.parse(savedMode) : false;
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return false;
    }
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <>
        <NavbarAdmin darkMode={darkMode} setDarkMode={setDarkMode}/>
        <CardPrincipal darkMode={darkMode} setDarkMode={setDarkMode}/>
        {/* <Footer darkMode={darkMode} setDarkMode={setDarkMode} /> */}
    </>
  )
}