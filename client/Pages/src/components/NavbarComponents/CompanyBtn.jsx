import React, { useState, useEffect } from 'react'
import { Navbar } from '../../Pages/Navbar'
import { EmpresasClient } from '../EmpresasClient/EmpresasClient';
import { CompanySupport } from '../CompanySupport/CompanySupport';
import { Footer } from '../../Pages/Footer';

export const CompanyBtn = () => {
  
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
      <EmpresasClient />
      <CompanySupport Company="Confían en nosotros"/>
      <Footer />
    </>
  )
}
