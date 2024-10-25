import React from 'react';

const AboutCompany = ({ darkMode, nombre_empresa, descripcion_empresa }) => {
  return (
    <section className={` adms:left-10
      w-[959px] mx-auto mt-[450px] text-center
      transition-colors duration-300
    `}>
      <h3 className={`adms:mr-[494px] adms:-mt-20 text-2xl font-semibold ${darkMode ? 'text-white' : 'text-[#1e1e1e]'}`} id='nombre_empresa'>
        {`Sobre ${nombre_empresa}`}
      </h3>
      <p className={`adms:mr-[494px] adms:-mt-18 mt-4 text-base ${darkMode ? 'text-gray-300' : 'text-[#1e1e1e]'}`} id='descripcion_empresa'>
        {descripcion_empresa}
      </p>
    </section>
  );
};

export default AboutCompany;


