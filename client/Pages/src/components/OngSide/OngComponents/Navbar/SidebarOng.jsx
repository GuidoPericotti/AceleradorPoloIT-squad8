import React, { useState } from 'react';
import SquadManagement from '../../../AdminComponents/SquadManagement';

export const SidebarOng = ({ onViewChange, currentView }) => {
  const [showSquads, setShowSquads] = useState(false);

  const handleSquadsClick = () => {
    // Si ya estamos en la vista de squads, volvemos a 'empresa' (o la vista principal que prefieras)
    if (currentView === 'squads') {
      onViewChange('empresa');
      setShowSquads(false);
    } else {
      // Si no estamos en squads, cambiamos a la vista de squads
      onViewChange('squads');
      setShowSquads(true);
    }
  };

  const sidebarClasses = `
    admlg:w-48
    admlg:ml-[95px]
    mt-24
    adms:-left-[25px]
    admlg:-left-10
    sm:ml-1 
    adms:w-[90px] 
    adms:ml-14 
    bg-[#C6E5D6] 
    dark:bg-gray-600 
    h-full 
    fixed 
    ${currentView === 'squads' ? 'pt-40 ' : 'pt-16 sm:pt-20 adms:pt-48'} 
    adms:bg-[#C6E5D6] 
    dark:adms:bg-gray-700
  `;

  const buttonClasses = `
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
    adms:w-[66px] 
    ${currentView === 'squads' ? 'bg-gray-200 hover:bg-gray-400' : ''}
  `;

  return (
    <>
      <section className={sidebarClasses}>
        <div className="p-2 sm:p-4 adms:p-1">
          {currentView !== 'squads' && (
            <>
              <div className="flex-grow p-4 overflow-y-auto admlg:ml-2">
                <button
                  onClick={() => onViewChange('empresa')}
                  className={buttonClasses}
                >
                  <span className="text-lg font-medium adms:text-xs">EMPRESA</span>
                </button>
              </div>

              <div className="flex-grow p-4 overflow-y-auto admlg:ml-2">
                <button
                  onClick={() => onViewChange('ong')}
                  className={buttonClasses}
                >
                  <span className="text-lg font-medium adms:text-xs">ONG</span>
                </button>
              </div>
            </>
          )}

          <div className="flex-grow p-4 overflow-y-auto admlg:ml-2">
            <button
              onClick={handleSquadsClick}
              className={buttonClasses}
            >
              <span className="text-lg font-medium adms:text-xs">SQUADS</span>
            </button>
          </div>
        </div>
      </section>

      {/* Render SquadManagement conditionally */}
      {showSquads && (
        <div className="fixed inset-0 z-0 overflow-hidden">
          <div 
            className="absolute inset-0" 
            onClick={handleSquadsClick} 
          />
          <div className="admlg:-mt-22 absolute right-0 top-0 h-full w-1 bg-white shadow-xl ">
            <SquadManagement onClose={handleSquadsClick} />
          </div>
        </div>
      )}
    </>
  );
};