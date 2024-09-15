
import React, { useState, useEffect } from 'react';
import { Navbar } from '../../Pages/Navbar';
import { EmpresasClient } from '../EmpresasClient/EmpresasClient';
import { CompanySupport } from '../CompanySupport/CompanySupport';
import { Footer } from '../../Pages/Footer';
import { UneteEmpresa } from '../EmpresasClient/UneteEmpresa';
import { Mentorias } from '../EmpresasClient/Mentorias';
import { CardEmpresas } from '../EmpresasClient/CardEmpresas';
import { TestimonyEmpresaClient } from '../EmpresasClient/TestimonyEmpresaClient';

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
      {/* Separación superior entre UneteEmpresa y Mentorias */}
      <UneteEmpresa  />

      {/* Separación superior entre Mentorias y el siguiente CardEmpresas */}
      <Mentorias className="py-24" />
      <div className='py-24 grid grid-cols gap-56 dark:bg-dark-primary'>
        <CardEmpresas titulo="Titulo 1" />
        <CardEmpresas titulo="Titulo 2" />
        <CardEmpresas titulo="Titulo 3" />
        <CardEmpresas titulo="Titulo 4" />
      </div>
      <CompanySupport Company="Confían en nosotros"/>
      <TestimonyEmpresaClient />
      <Footer />
    </>
  );
}
