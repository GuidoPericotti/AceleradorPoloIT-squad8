import { useState } from 'react';
  import { StudentsTable } from '../Students/StudentsTable';
  import EditCourseModal from '../CrearCurso/EditCourseModal';
  import axios from 'axios';


const AcordionCourse = ({ 
  nroItem, 
  id,
  title,
  teacher, 
  description, 
  startDate, 
  endDate, 
  darkMode, 
  organizacion_id, // Añade organizacion_id aquí
  onEdit, 
  onDelete 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [courseData, setCourseData] = useState('')
  const handleCardClick = () => {
    setIsOpen(!isOpen);
  };

  const handleEdit = async (e) => {
    e.stopPropagation();
    const id = localStorage.getItem('curso_id');
    console.log(id);
    
    try {
      const response = await axios.get(`http://localhost:3000/api/ong/${organizacion_id}/curso/${id}`);
      setCourseData(response.data);
      setShowEditModal(true);
      const fetchedCurso = response.data.curso;
      console.log(response)
      localStorage.setItem('curso_id', JSON.stringify(fetchedCurso)); // Almacenamos en localStorage

    } catch (error) {
      console.error("Error al obtener los datos del curso:", error);
    }
  };

  return (
    <div className={`w-full ${darkMode ? 'bg-gray-700 text-white' : 'bg-[#A8D8BF] text-black'}`}>
      <div className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-[#A8D8BF]'}`}>
        <table onClick={handleCardClick} className="cursor-pointer w-full text-left table-fixed">
          <tbody>
            <tr>
              <td className="px-6 text-xl font-bold">{nroItem}</td>
              <td className="px-6">{teacher}</td>
              <td className='px-4 text-sm'>{description}</td>
              <td className="px-6 text-sm ">{startDate}</td>
              <td className="px-6 text-sm ">{endDate}</td>
              <td className="px-6 text-right">
                <div className="flex justify-end space-x-4">
                  <button onClick={handleEdit} className="text-blue-500">
                    Editar
                  </button>
                  <button 
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      onDelete(id); 
                    }} 
                    className="text-red-500"
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {isOpen && (
        <div className="w-full">
          <StudentsTable darkMode={darkMode} />
        </div>
      )}

      {showEditModal && (
        <EditCourseModal
          onClose={() => setShowEditModal(false)}
          onEditCourse={handleEdit}
          courseData={{
            id,
            nroItem,
            teacher,
            description,
            startDate,
            endDate
          }}
        />
      )}
    </div>
  );
}; 

export default AcordionCourse;