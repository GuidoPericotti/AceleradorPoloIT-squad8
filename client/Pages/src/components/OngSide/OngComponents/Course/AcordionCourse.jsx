import { useState } from 'react';
import { StudentsTable } from '../Students/StudentsTable';

const AcordionCourse = ({ nroItem, teacher, description, startDate, endDate, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-[#82C7A5] text-black'} my-4 p-4 rounded-md`}>
      <div onClick={handleCardClick} className="cursor-pointer flex items-center space-x-4"> {/* Flexbox aplicado aquí */}
        <h2 className="text-xl font-bold">{nroItem}</h2> {/* Título del curso */}
        <p className="italic">{teacher}</p> {/* Nombre del docente */}
        <p>{description}</p> {/* Descripción del curso */}
        <p className="text-sm text-gray-500">Inicio: {startDate}</p> {/* Fecha de inicio */}
        <p className="text-sm text-gray-500">Fin: {endDate}</p> {/* Fecha de finalización */}
      </div>
      
      {isOpen && (
        <div className="mt-4">
          <StudentsTable />
        </div>
      )}
    </div>
  );
};

export default AcordionCourse;
