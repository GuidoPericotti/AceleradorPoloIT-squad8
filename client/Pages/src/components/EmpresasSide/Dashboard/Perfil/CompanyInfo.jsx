
import React from 'react';

const CompanyInfo = ({ darkMode }) => {
  return (
    <section className={`
      absolute top-80 left-80
      transition-colors duration-300
      ${darkMode ? 'text-white' : 'text-[#1e1e1e]'}
    `}>
      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-[#757575]'}`}>
        Nombre Empresa
      </div>
      <h2 className="text-4xl font-bold">Globant</h2>
    </section>
  );
};


export default CompanyInfo;
