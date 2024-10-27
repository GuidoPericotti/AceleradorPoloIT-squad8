import { useState } from 'react';
import { StudentsTable } from '../Students/StudentsTable';

const AcordionCourse = ({ nroItem, teacher, description, startDate, endDate, darkMode, onEdit, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-[#A8D8BF] text-black'} my-4 p-4 rounded-md`}>
      <div className={` rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-[#A8D8BF]'}`}>
      <table onClick={handleCardClick} className="cursor-pointer w-full text-left table-fixed">
        <tbody>
          <tr>
            <td className="text-xl font-bold">{nroItem}</td>
            <td className="">{teacher}</td>
            <td className='text-sm'>{description}</td>
            <td className="text-sm text-black">Inicio: {startDate}</td>
            <td className="text-sm text-black">Fin: {endDate}</td>
            <td className="flex justify-end text-center mt-3 pr-20 p-1">
              <button onClick={onEdit} className="mr-2 text-blue-500">Editar</button>
              <button onClick={onDelete} className="text-red-500">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
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