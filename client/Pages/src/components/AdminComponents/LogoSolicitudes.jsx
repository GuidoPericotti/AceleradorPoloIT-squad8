import React from 'react';
import IconSolicitud from '../../assets/Iconlogosolicitudes.svg'; // Ajusta la extensión según tu archivo

export const LogoSolicitudes = () => {
  return (
    <div>
      <a href="">
        <img
          src={IconSolicitud}
          alt="Figma Logo"
          className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
        />
      </a>
    </div>
  );
};
