import React from 'react'
import { TitlePerfil } from './TitlePerfil'
import ProfilePicture from './ProfilePicture'
import EditButton from './EditButton'
import CompanyInfo from './CompanyInfo'
import AboutCompany from './AboutCompany'
import SocialMediaLinks from './SocialMediaLinks'


export const PerfilDashboard = () => {
  return (
    <div className="w-[1000px] h-[872px] rounded-tl-3xl rounded-tr-3xl shadow relative bg-[#D8EEE3]">
       <TitlePerfil /> 
      <EditButton />
       <ProfilePicture />
      <CompanyInfo />
      <AboutCompany />
      <SocialMediaLinks />
    </div>
  )
}

