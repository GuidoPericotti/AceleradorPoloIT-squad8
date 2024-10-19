import React from 'react'
import { CardsLogHome } from '../components/CardsComponentsHome/CardsLogHome';
import Company from '../assets/company.jpg';
import Ong from '../assets/ong.jpg';

export const CardsLogin = ({ darkMode, onLoginClick }) => {
  return (
    <>
      <section className={`flex flex-col adms:flex-row items-end justify-center content-start ${darkMode ? 'bg-gray-900 text-white' : 'bg-[#F3F9F6]'} pt-32`}>
        <CardsLogHome onClick={onLoginClick}  src={Company} description="ONGS" darkMode={darkMode} className="gap-4 block flex-grow-0 flex-shrink flex-auto self-auto order-none"/>
        <CardsLogHome onClick={onLoginClick}  src={Ong} description="Empresas" darkMode={darkMode} className="gap-4 block flex-grow-0 flex-shrink flex-auto self-auto order-none"/>
      </section>
    </>
  )
}
