// // El App comentado va a ser el deinitivo, mientras tanto, para visualizar el EmpresaSide se usa el que no esta comentado

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import { Home } from "./Pages/Home";
import { OngPage } from "./Pages/OngPage";
import  ONGEmpresaLogin  from "./components/Login/LoginComponents/ONGEmpresaLogin";
import { CompanyBtn } from "./components/NavbarComponents/CompanyBtn";
import { ContactBtn } from "./components/NavbarComponents/ContactBtn";
import { MentoresBtn } from "./components/NavbarComponents/MentoresBtn";
import { ParticipantesBtn } from "./components/NavbarComponents/ParticipantesBtn";
import { ProyectsBtn } from "./components/NavbarComponents/ProyectsBtn";
import { LoginIniciado } from "./components/Login/LoginIniciado";
import { OngClient } from "./Pages/OngClient";
import { AdminPage } from "./Pages/AdminPage";
import { OngUserSide } from "./Pages/OngUserSide";
import { EmpresaSide } from "./Pages/EmpresaSide";
import { TableEstudiantes } from "./components/EmpresasSide/Dashboard/TableEstudiantes";
import { SidebarEmpresa } from "./components/EmpresasSide/Sidebar/SidebarEmpresa";
import { EmpresaCard } from "./components/EmpresasSide/Dashboard/EmpresaCard";
//  import { EmpresaBody } from "./components/EmpresasSide/EmpresaBody";
import { DashboardEmpresa } from './components/EmpresasSide/Dashboard/DashboardEmpresa';
 //import {EmpresaBody} from  './components/EmpresasSide/Dashboard/'
   function App() {
     const [view, setView] = useState('');  //Estado para controlar qué vista se muestra

     // Función para manejar clic en "Perfil"
  const handleProfileClick = () => {
    setView('profile');  //Cambia la vista a "perfil"
     };

      //Función para manejar el cambio de participantes
     const handleParticipantsChange = (event) => {
       const selectedValue = event.target.value;
       if (selectedValue === 'participante2') {
         setView('estudiantes');  //Muestra la vista de estudiantes
       } else if (selectedValue === 'participante1') {
         setView('mentores');  //Muestra la vista de mentores
       }
     };

     return (
       <>
        {/* <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/ongempresa" element={<ONGEmpresaLogin />} />
           <Route path="/LoginIniciado" element={<LoginIniciado />} />
           <Route path="/login" element={<OngPage />} />
           <Route path="/empresas" element={<CompanyBtn />} />
           <Route path="/proyectos" element={<ProyectsBtn />} />
           <Route path="/participantes" element={<ParticipantesBtn />} />
           <Route path="/mentores" element={<MentoresBtn />} />
           <Route path="/contact" element={<ContactBtn />} />
           <Route path="/OngClient" element={<OngClient />} /> 
            <Route path="/Admin" element={<AdminPage />} />   
           <Route path="/*" element={<Navigate to="/" />} /> 
         </Routes>    */}
          <OngUserSide /> 
          {/* <EmpresaSide />  */}
          {/* <Routes> 
          <Route path="/estudiantes" element={<TableEstudiantes />} /> 
              Puedes agregar la ruta para mentores también 
              <Route path="/mentores" element={<div>Vista de mentores</div>} /> 
              <Route path="/" element={<SidebarEmpresa />} /> 
          </Routes> 
         <div className="flex">
         <EmpresaSide
           onProfileClick={handleProfileClick}
           handleParticipantsChange={handleParticipantsChange}
           selectedParticipant={view === 'estudiantes' ? 'participante2' : view === 'mentores' ? 'participante1' : ''}
         />
      
         <div className="flex-grow">
           {/* Renderiza diferentes vistas dependiendo del estado 
           {view === 'profile' && <div>Vista del Perfil</div>}
           {view === 'estudiantes' && <TableEstudiantes />}
           {view === 'mentores' && <div>Vista de Mentores</div>}
         </div>
       </div> */}
       </>
     );
   }

   export default App;

//  import React, { useState } from 'react';
//  import { Routes, Route } from 'react-router-dom';
//  import { TableEstudiantes } from './components/EmpresasSide/Dashboard/TableEstudiantes';
//  import { DashboardEmpresa } from './components/EmpresasSide/Dashboard/DashboardEmpresa';
//  import { EmpresaSide } from './Pages/EmpresaSide';
//  import { MentoresEmpresa } from './components/EmpresasSide/Dashboard/Mentores/MentoresEmpresa';
//  import { PerfilDashboard } from './components/EmpresasSide/Dashboard/Perfil/PerfilDashboard';

//  const App = () => {
//    const [showProfile, setShowProfile] = useState(false);
//    const [selectedOption, setSelectedOption] = useState('');
//    const [darkMode, setDarkMode] = useState(false);  // Estado para dark mode
  

//    const handleProfileClick = () => {
//      setShowProfile(!showProfile);
//      setSelectedOption('');
//    };

//    const handleParticipantsChange = (option) => {
//      setSelectedOption(option);
//      setShowProfile(false);
//    };

//    return (
//      <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} flex`}>
//        <EmpresaSide
//          onProfileClick={handleProfileClick}
//          onParticipantsChange={handleParticipantsChange}
//          darkMode={darkMode}
//          setDarkMode={setDarkMode}
//        />
//        <div className="flex-1">
//          {!selectedOption 
//          && <DashboardEmpresa showProfileCard={showProfile} darkMode={darkMode} />
//          && <PerfilDashboard darkMode={darkMode} />
//          }
//        </div>
//      </div>
//    );
//  };

//  export default App;
// import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { TableEstudiantes } from './components/EmpresasSide/Dashboard/TableEstudiantes';
// import { DashboardEmpresa } from './components/EmpresasSide/Dashboard/DashboardEmpresa';
// import { EmpresaSide } from './Pages/EmpresaSide';
// import { MentoresEmpresa } from './components/EmpresasSide/Dashboard/Mentores/MentoresEmpresa';
// import { PerfilDashboard } from './components/EmpresasSide/Dashboard/Perfil/PerfilDashboard';
// import { AdminPage } from './Pages/AdminPage';

// const App = () => {
//   const [showProfile, setShowProfile] = useState(false);
//   const [selectedOption, setSelectedOption] = useState('');
//   const [darkMode, setDarkMode] = useState(false);

//   const handleProfileClick = () => {
//     setShowProfile(!showProfile);
//     setSelectedOption('');
//   };

//   const handleParticipantsChange = (option) => {
//     setSelectedOption(option);
//     setShowProfile(false);
//   };

//   return (
//     <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} flex`}>
//       <EmpresaSide
//         onProfileClick={handleProfileClick}
//         onParticipantsChange={handleParticipantsChange}
//         darkMode={darkMode}
//         setDarkMode={setDarkMode}
//       />
//       <div className="flex-1">
//         <Routes>
//           <Route 
//             path="/" 
//             element={
//               showProfile ? 
//               <PerfilDashboard darkMode={darkMode} /> : 
//               <DashboardEmpresa showProfileCard={showProfile} darkMode={darkMode} />
//             } 
//           />
//           <Route 
//             path="/estudiantes" 
//             element={<TableEstudiantes darkMode={darkMode} />} 
//           />
//           <Route 
//             path="/mentores" 
//             element={<MentoresEmpresa darkMode={darkMode} />} 
//           />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default App;