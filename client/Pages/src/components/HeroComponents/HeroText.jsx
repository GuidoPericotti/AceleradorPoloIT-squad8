import React from 'react';

export const HeroText = ({ darkMode }) => {
  return (
    <div className={`mt-20 text-xl font-bold ${darkMode ? 'text-white' : 'text-violet-950'}`}>
      <h2 className='text-2xl sm:text-xl md:text-lg lg:text-2xl uppercase font-bold'>
        ¡Bienvenidos a nuestra plataforma!
      </h2>
      <p className='text-2xl sm:text-xl md:text-lg lg:text-2xl'>
        Nos complace darles la bienvenida tanto a empresas como a <br />
        organizaciones sin fines de lucro que deseen formar parte de <br />
        nuestros proyectos colaborativos.
      </p>
    </div>
  );
};
