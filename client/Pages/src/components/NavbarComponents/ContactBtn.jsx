import React, { useState, useEffect } from 'react'
import { Navbar } from '../../Pages/Navbar'

export const ContactBtn = () => {
  // darkMode function
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
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
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
    </>
  )
}