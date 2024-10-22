import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardsLogHome } from '../components/CardsComponentsHome/CardsLogHome';
import Company from '../assets/company.jpg';
import Ong from '../assets/ong.jpg';

export const CardsLogin = ({ darkMode, descripcion }) => {
  const navigate = useNavigate();

  const handleOngClick = () => {
    navigate('/ong');
  };

  const handleEmpresaClick = () => {
    navigate('/empresa');
  };

  return (
    <section
      className={`min-h-screen ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-[#F3F9F6]'
      }`}
    >
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="flex flex-col adms:flex-row gap-8 admlg:gap-12 justify-center items-center">
          <CardsLogHome
            onClick={handleOngClick}
            src={Company}
            description="ONG"
            darkMode={darkMode}
            descripcion="Únete como ONG"
          />
          <CardsLogHome
            onClick={handleEmpresaClick}
            src={Ong}
            description="Empresas"
            darkMode={darkMode}
            descripcion="Únete como Empresa"
          />
        </div>
      </div>
    </section>
  );
};