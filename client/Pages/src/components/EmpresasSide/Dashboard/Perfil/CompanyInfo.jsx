
import React from 'react';

const CompanyInfo = ({ darkMode, nombre_empresa }) => {
  return (
    <section className={` adms:left-5 adms:top-80
      absolute admlg:top-80 admlg:left-80 
      transition-colors duration-300
      ${darkMode ? 'text-white' : 'text-[#1e1e1e]'}
    `}>
      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-[#757575]'}`}>
        Nombre Empresa
      </div>
      <h2 className="text-4xl font-bold" id='nombre_empresa'>
      {` ${nombre_empresa}`}
      </h2>
    </section>
  );
};


export default CompanyInfo;
