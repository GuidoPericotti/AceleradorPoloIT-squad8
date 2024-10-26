import { useState } from 'react';
import { StudentsTable } from '../Students/StudentsTable';

const AcordionCourse = ({ nroItem, teacher, description, startDate, endDate, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-[#82C7A5] text-black'} my-4 p-4 rounded-md`}>
      <table onClick={handleCardClick} className="cursor-pointer w-full text-left table-fixed">
        <thead>
          <tr>
            <th className="text-xl font-bold w-1/6">#</th>
            <th className="italic w-1/6">Docente</th>
            <th className="w-2/6">Descripción</th>
            <th className="text-sm text-gray-500 w-1/6">Inicio</th>
            <th className="text-sm text-gray-500 w-1/6">Fin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-xl font-bold">{nroItem}</td>
            <td className="italic">{teacher}</td>
            <td>{description}</td>
            <td className="text-sm text-gray-500">Inicio: {startDate}</td>
            <td className="text-sm text-gray-500">Fin: {endDate}</td>
          </tr>
        </tbody>
      </table>

      {isOpen && (
        <div className="mt-4">
          <StudentsTable />
        </div>
      )}
    </div>
  );
};

export default AcordionCourse;