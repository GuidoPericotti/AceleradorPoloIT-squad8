import { useState } from 'react';
import { StudentsTable } from '../Students/StudentsTable';

const AcordionCourse = ({ nroItem, teacher, description, startDate, endDate, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-[#A8D8BF] text-black'} my-4 p-4 rounded-md`}>
      <table onClick={handleCardClick} className="cursor-pointer w-full text-left table-fixed">
        
        <tbody>
          <tr>
            <td className="text-xl font-bold">{nroItem}</td>
            <td className="italic">{teacher}</td>
            <td>{description}</td>
            <td className="text-sm text-black">Inicio: {startDate}</td>
            <td className="text-sm text-black">Fin: {endDate}</td>
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