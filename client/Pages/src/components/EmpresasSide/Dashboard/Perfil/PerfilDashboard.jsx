

import React from 'react';
import { TitlePerfil } from './TitlePerfil';
import ProfilePicture from './ProfilePicture';
import EditButton from './EditButton';
import CompanyInfo from './CompanyInfo';
import AboutCompany from './AboutCompany';
import SocialMediaLinks from './SocialMediaLinks';

export const PerfilDashboard = ({ darkMode }) => {
  return (
    <section className={`
      w-[970px] h-[872px] rounded-tl-3xl rounded-tr-3xl shadow relative
      ${darkMode ? 'bg-gray-800 text-white' : 'bg-[#D8EEE3] text-black'}
      transition-colors duration-300
    `}>
      <TitlePerfil darkMode={darkMode} />
      <EditButton darkMode={darkMode} />
      <ProfilePicture darkMode={darkMode} />
      <CompanyInfo darkMode={darkMode} />
      <AboutCompany darkMode={darkMode} />
      <SocialMediaLinks darkMode={darkMode} />
    </section>
  );
};