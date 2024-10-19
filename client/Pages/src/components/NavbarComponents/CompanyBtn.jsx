
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
        <div>
          <section>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode}  className='adms:max-w-[640px]'/> 
          </section>
          <section>
            <EmpresasClient />
          </section>
          <section>
            <UneteEmpresa  />
          </section>
          <section>
            <Mentorias className="py-24" />
          </section>
          <section>
            <div className='py-24 grid grid-cols gap-56 dark:bg-dark-primary bg-[#D8EEE3]'>
              <CardEmpresas titulo="Titulo 1" />
              <CardEmpresas titulo="Titulo 2" />
              <CardEmpresas titulo="Titulo 3" />
              <CardEmpresas titulo="Titulo 4" />
            </div>
          </section>
          <section>
                <CompanySupport Company="Confían en nosotros"/>
          </section>
          <section>
            <TestimonyEmpresaClient />
          </section>
          <section>
            <Footer />
          </section>
        </div>    
      {/* Separación superior entre UneteEmpresa y Mentorias */}

      {/* Separación superior entre Mentorias y el siguiente CardEmpresas */}
    </>
  );
}
