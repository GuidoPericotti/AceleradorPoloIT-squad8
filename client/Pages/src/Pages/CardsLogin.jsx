// import React from 'react'
// import { CardsLogHome } from '../components/CardsComponentsHome/CardsLogHome';
// import Company from '../assets/company.jpg';
// import Ong from '../assets/ong.jpg';

// export const CardsLogin = ({ darkMode, onLoginClick }) => {
//   return (
//     <>
//       <section className={`flex flex-col adms:flex-row items-end justify-center content-start ${darkMode ? 'bg-gray-900 text-white' : 'bg-[#F3F9F6]'} pt-32`}>
//         <CardsLogHome onClick={onLoginClick}  src={Company} description="ONGS" darkMode={darkMode} className="gap-4 block flex-grow-0 flex-shrink flex-auto self-auto order-none"/>
//         <CardsLogHome onClick={onLoginClick}  src={Ong} description="Empresas" darkMode={darkMode} className="gap-4 block flex-grow-0 flex-shrink flex-auto self-auto order-none"/>
//       </section>
//     </>
//   )
// }

// CardsLogin.jsx
import React from 'react';
import { CardsLogHome } from '../components/CardsComponentsHome/CardsLogHome';
import Company from '../assets/company.jpg';
import Ong from '../assets/ong.jpg';

export const CardsLogin = ({ darkMode, onLoginClick }) => {
  return (
    <section className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-[#F3F9F6]'}`}>
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="flex flex-col adms:flex-row gap-8 admlg:gap-12 justify-center items-center">
          <CardsLogHome 
            onClick={onLoginClick}  
            src={Company} 
            description="ONGS" 
            darkMode={darkMode}
          />
          <CardsLogHome 
            onClick={onLoginClick}  
            src={Ong} 
            description="Empresas" 
            darkMode={darkMode}
          />
        </div>
      </div>
    </section>
  );
};