

import React from 'react';
import { TitlePerfil } from './TitlePerfil';
import ProfilePicture from './ProfilePicture';
import EditButton from './EditButton';
import CompanyInfo from './CompanyInfo';
import AboutCompany from './AboutCompany';
import SocialMediaLinks from './SocialMediaLinks';

export const PerfilDashboard = ({ darkMode }) => {
  return (
    <section className={` adms:w-[480px] admlg:ml-36
      admlg:w-[970px] h-[872px] rounded-tl-3xl rounded-tr-3xl shadow relative
      ${darkMode ? 'bg-gray-800 text-white' : 'bg-[#D8EEE3] text-black'}
      transition-colors duration-300
    `}>
      <TitlePerfil darkMode={darkMode} />
      <EditButton darkMode={darkMode} />
      <ProfilePicture darkMode={darkMode} />
      <CompanyInfo darkMode={darkMode} 
        nombre_empresa="Nombre de la Empresa"
      />
      <AboutCompany darkMode={darkMode} 
        nombre_empresa="Nombre de la Empresa"
        descripcion_empresa="Esta es la descripción de la empresa."
        />
      <SocialMediaLinks darkMode={darkMode} />
    </section>
  );
};