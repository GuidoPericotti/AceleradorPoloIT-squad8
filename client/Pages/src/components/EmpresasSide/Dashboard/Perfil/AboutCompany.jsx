import React from 'react';

const AboutCompany = ({ darkMode }) => {
  return (
    <section className={`
      w-[959px] mx-auto mt-[450px] text-center
      transition-colors duration-300
    `}>
      <h3 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-[#1e1e1e]'}`}>
        Sobre Globant
      </h3>
      <p className={`mt-4 text-base ${darkMode ? 'text-gray-300' : 'text-[#1e1e1e]'}`}>
        Somos una compañía nativa digital, fundada en 2003, enfocada en reinventar negocios a través de la tecnología. <br/>
        En Globant, combinamos ingeniería, diseño e innovación para ayudar a las organizaciones a adaptarse y prosperar en un mundo digital en constante evolución.
      </p>
    </section>
  );
};

export default AboutCompany;
