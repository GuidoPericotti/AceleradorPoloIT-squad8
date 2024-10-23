
import React, { useState } from 'react';
import SquadManagement from '../../../AdminComponents/SquadManagement';

export const SidebarOng = ({ onViewChange, currentView }) => {
  const [showSquads, setShowSquads] = useState(false);

  const handleShowSquads = () => {
    setShowSquads(!showSquads);
  };

  // Ajustar las clases de padding-top según la vista actual
  const sidebarClasses = `
    admlg:w-48
    ml-[90px]
    mt-24
    adms:-left-[35px]
    sm:ml-1 
    adms:w-[100px] 
    adms:ml-14 
    bg-[#C6E5D6] 
    dark:bg-gray-600 
    h-full 
    fixed 
    ${currentView === 'squads' ? 'pt-40' : 'pt-16 sm:pt-20 adms:pt-48'} 
    adms:bg-[#C6E5D6] 
    dark:adms:bg-gray-700
  `;

  return (
    <>
      <section className={sidebarClasses}>
        <div className="p-2 sm:p-4 adms:p-1 ">
          <div>
            <div className="flex-grow p-4 overflow-y-auto admlg:ml-2 ">
              <button
                onClick={() => onViewChange(currentView === 'squads' ? 'solicitudes' : 'squads')}
                className={`
                  bg-white 
                  adms:-ml-4
                  hover:bg-gray-400
                  flex 
                  items-center 
                  admlg:w-40
                  admlg:h-12
                  w-full 
                  z-0
                  p-2 
                  mb-4 
                  rounded-lg 
                  shadow
                  transition-colors 
                  duration-200 
                  adms:w-[78px] 
                  
                  ${currentView === 'squads' ? 'active' : ''}
                `}
              >
                <span className="text-lg font-medium adms:text-xs">SQUADS</span>
              </button>
            </div>
          </div>

          {/* Input de filtrado */}
          <div className="mb-3 sm:mb-4 adms:mb-2">
            <label
              htmlFor="search"
              className="block text-xs sm:text-sm adms:text-2xs text-gray-700 dark:text-gray-200 font-bold"
            >
              Filtrar por nombre
            </label>
            <input
              type="text"
              id="search"
              className="w-full px-1 sm:px-2 adms:px-1 py-1 mt-1 border rounded text-xs sm:text-sm adms:text-2xs bg-white dark:bg-gray-600 dark:text-white border-gray-300 dark:border-gray-600"
              placeholder="Buscar por nombre"
            />
          </div>
        </div>
      </section>

      {/* Render SquadManagement conditionally */}
      {showSquads && (
        <div className="fixed inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleShowSquads} />
          <div className="admlg:-mt-22 absolute right-0 top-0 h-full w-[calc(100%-16rem)] bg-white shadow-xl">
            <SquadManagement onClose={handleShowSquads} />
          </div>
        </div>
      )}
    </>
  );
};