

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// export const SidebarEmpresa = ({ onProfileClick, onParticipantsChange, darkMode }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedParticipant, setSelectedParticipant] = useState('');

//   useEffect(() => {
//     if (location.pathname === '/estudiantes') {
//       setSelectedParticipant('mentores');
//     } else if (location.pathname === '/mentores') {
//       setSelectedParticipant('estudiantes');
//     } else {
//       setSelectedParticipant('');
//     }
//   }, [location.pathname]);

//   const handleParticipantsChange = (event) => {
//     const selectedValue = event.target.value;
//     setSelectedParticipant(selectedValue);
    
//     if (selectedValue === 'mentores') {
//       navigate('/estudiantes');
//       onParticipantsChange('mentores');
//     } else if (selectedValue === 'estudiantes') {
//       navigate('/estudiantes');
//       onParticipantsChange('estudiantes');
//     } else {
//       navigate('/');
//       onParticipantsChange('');
//     }
//   };

//   const handleProfileClick = () => {
//     setSelectedParticipant('');
//     onProfileClick();
//     navigate('/');
//   };

//   const handleProjectChange = () => {
//     setSelectedParticipant('');
//     navigate('/');
//   };

//   return (
//     <aside className={`
//       fixed left-0 top-0 
//       w-64 
//       min-h-screen
//       ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}
//     `}>
//       <div className="h-full flex flex-col">
//         {/* Espaciador para el navbar */}
//         <div className="h-16"></div>
        
//         {/* Contenido principal con scroll */}
//         <div className="flex-grow p-4 overflow-y-auto">
//           <button
//             className={`
//               flex items-center w-full p-2 mb-4 rounded-lg shadow
//               transition-colors duration-200
//               ${darkMode 
//                 ? 'bg-gray-700 hover:bg-gray-600' 
//                 : 'bg-white hover:bg-gray-300'
//               }
//             `}
//             onClick={handleProfileClick}
//           >
//             <img
//               src="https://via.placeholder.com/40"
//               alt="Perfil"
//               className="w-10 h-10 rounded-full mr-3"
//             />
//             <span className="text-lg font-medium">Perfil</span>
//           </button>
          
//           <div className="mb-4">
//             <label 
//               htmlFor="proyectos" 
//               className="block text-sm font-medium mb-2"
//             >
//               Proyectos
//             </label>
//             <select
//               id="proyectos"
//               className={`
//                 w-full p-2 border rounded-lg 
//                 transition-colors duration-200
//                 focus:outline-none focus:ring focus:border-blue-400
//                 ${darkMode 
//                   ? 'bg-gray-700 text-white border-gray-600' 
//                   : 'bg-white text-black border-gray-300'
//                 }
//               `}
//               onChange={handleProjectChange}
//             >
//               <option value="">Seleccione...</option>
//               <option value="proyecto2">Proyecto 2</option>
//               <option value="proyecto3">Proyecto 3</option>
//             </select>
//           </div>

//           <div>
//             <label 
//               htmlFor="participantes" 
//               className="block text-sm font-medium mb-2"
//             >
//               Participantes
//             </label>
//             <select
//               id="participantes"
//               value={selectedParticipant}
//               className={`
//                 w-full p-2 border rounded-lg 
//                 transition-colors duration-200
//                 focus:outline-none focus:ring focus:border-blue-400
//                 ${darkMode 
//                   ? 'bg-gray-700 text-white border-gray-600' 
//                   : 'bg-white text-black border-gray-300'
//                 }
//               `}
//               onChange={handleParticipantsChange}
//             >
//               <option value="">Seleccione...</option>
//               <option value="mentores">Estudiantes</option>
//             </select>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// };
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const SidebarEmpresa = ({ onProfileClick, onParticipantsChange, darkMode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedParticipant, setSelectedParticipant] = useState('');

  useEffect(() => {
    // Actualizar el select basado en la ruta actual
    if (location.pathname === '/estudiantes') {
      setSelectedParticipant('estudiantes');
    } else if (location.pathname === '/mentores') {
      setSelectedParticipant('mentores');
    } else {
      setSelectedParticipant('');
    }
  }, [location.pathname]);

  const handleParticipantsChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedParticipant(selectedValue);
    
    if (selectedValue === 'estudiantes') {
      navigate('/estudiantes');
      onParticipantsChange('estudiantes');
    } else if (selectedValue === 'mentores') {
      navigate('/mentores');
      onParticipantsChange('mentores');
    } else {
      navigate('/');
      onParticipantsChange('');
    }
  };

  const handleProfileClick = () => {
    setSelectedParticipant('');
    onProfileClick();
    navigate('/');
  };

  const handleProjectChange = () => {
    setSelectedParticipant('');
    navigate('/');
  };

  return (
    <aside className={`
      fixed left-0 top-0 
      w-64 
      min-h-screen
      ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}
    `}>
      <div className="h-full flex flex-col">
        {/* Espaciador para el navbar */}
        <div className="h-16"></div>
        
        {/* Contenido principal con scroll */}
        <div className="flex-grow p-4 overflow-y-auto">
          <button
            className={`
              flex items-center w-full p-2 mb-4 rounded-lg shadow
              transition-colors duration-200
              ${darkMode 
                ? 'bg-gray-700 hover:bg-gray-600' 
                : 'bg-white hover:bg-gray-300'
              }
            `}
            onClick={handleProfileClick}
          >
            <img
              src="https://via.placeholder.com/40"
              alt="Perfil"
              className="w-10 h-10 rounded-full mr-3"
            />
            <span className="text-lg font-medium">Perfil</span>
          </button>
          
          <div className="mb-4">
            <label 
              htmlFor="proyectos" 
              className="block text-sm font-medium mb-2"
            >
              Proyectos
            </label>
            <select
              id="proyectos"
              className={`
                w-full p-2 border rounded-lg 
                transition-colors duration-200
                focus:outline-none focus:ring focus:border-blue-400
                ${darkMode 
                  ? 'bg-gray-700 text-white border-gray-600' 
                  : 'bg-white text-black border-gray-300'
                }
              `}
              onChange={handleProjectChange}
            >
              <option value="">Seleccione...</option>
              <option value="proyecto2">Proyecto 2</option>
              <option value="proyecto3">Proyecto 3</option>
            </select>
          </div>

          <div>
            <label 
              htmlFor="participantes" 
              className="block text-sm font-medium mb-2"
            >
              Participantes
            </label>
            <select
              id="participantes"
              value={selectedParticipant}
              className={`
                w-full p-2 border rounded-lg 
                transition-colors duration-200
                focus:outline-none focus:ring focus:border-blue-400
                ${darkMode 
                  ? 'bg-gray-700 text-white border-gray-600' 
                  : 'bg-white text-black border-gray-300'
                }
              `}
              onChange={handleParticipantsChange}
            >
              <option value="">Seleccione...</option>
              <option value="estudiantes">Estudiantes</option>
              <option value="mentores">Mentores</option>
            </select>
          </div>
        </div>
      </div>
    </aside>
  );
};