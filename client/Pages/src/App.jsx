// // // El App comentado va a ser el deinitivo, mientras tanto, para visualizar el EmpresaSide se usa el que no esta comentado

// import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import "./App.css";
// import { Home } from "./Pages/Home";
// import { OngPage } from "./Pages/OngPage";
// import  ONGEmpresaLogin  from "./components/Login/LoginComponents/ONGEmpresaLogin";
// import { CompanyBtn } from "./components/NavbarComponents/CompanyBtn";
// import { ContactBtn } from "./components/NavbarComponents/ContactBtn";
// import { MentoresBtn } from "./components/NavbarComponents/MentoresBtn";
// import { ParticipantesBtn } from "./components/NavbarComponents/ParticipantesBtn";
// import { ProyectsBtn } from "./components/NavbarComponents/ProyectsBtn";
// import { LoginIniciado } from "./components/Login/LoginIniciado";
// import { OngClient } from "./Pages/OngClient";
// import { AdminPage } from "./Pages/AdminPage";
// import { OngUserSide } from "./Pages/OngUserSide";
// import { EmpresaSide } from "./Pages/EmpresaSide";
// import { TableEstudiantes } from "./components/EmpresasSide/Dashboard/TableEstudiantes";
// import { SidebarEmpresa } from "./components/EmpresasSide/Sidebar/SidebarEmpresa";
// import { EmpresaCard } from "./components/EmpresasSide/Dashboard/EmpresaCard";
// //  import { EmpresaBody } from "./components/EmpresasSide/EmpresaBody";
// import { DashboardEmpresa } from './components/EmpresasSide/Dashboard/DashboardEmpresa';
//  //import {EmpresaBody} from  './components/EmpresasSide/Dashboard/'
//    function App() {
//      const [view, setView] = useState('');  //Estado para controlar qué vista se muestra

//      // Función para manejar clic en "Perfil"
//   const handleProfileClick = () => {
//     setView('profile');  //Cambia la vista a "perfil"
//      };

//       //Función para manejar el cambio de participantes
//      const handleParticipantsChange = (event) => {
//        const selectedValue = event.target.value;
//        if (selectedValue === 'participante2') {
//          setView('estudiantes');  //Muestra la vista de estudiantes
//        } else if (selectedValue === 'participante1') {
//          setView('mentores');  //Muestra la vista de mentores
//        }
//      };

//      return (
//        <>
//         {/* <Routes>
//            <Route path="/" element={<Home />} />
//            <Route path="/ongempresa" element={<ONGEmpresaLogin />} />
//            <Route path="/LoginIniciado" element={<LoginIniciado />} />
//            <Route path="/login" element={<OngPage />} />
//            <Route path="/empresas" element={<CompanyBtn />} />
//            <Route path="/proyectos" element={<ProyectsBtn />} />
//            <Route path="/participantes" element={<ParticipantesBtn />} />
//            <Route path="/mentores" element={<MentoresBtn />} />
//            <Route path="/contact" element={<ContactBtn />} />
//            <Route path="/OngClient" element={<OngClient />} /> 
//             <Route path="/Admin" element={<AdminPage />} />   
//            <Route path="/*" element={<Navigate to="/" />} /> 
//          </Routes>    */}
//           <OngUserSide /> 
//           {/* <EmpresaSide />  */}
//           {/* <Routes> 
//           <Route path="/estudiantes" element={<TableEstudiantes />} /> 
//               Puedes agregar la ruta para mentores también 
//               <Route path="/mentores" element={<div>Vista de mentores</div>} /> 
//               <Route path="/" element={<SidebarEmpresa />} /> 
//           </Routes> 
//          <div className="flex">
//          <EmpresaSide
//            onProfileClick={handleProfileClick}
//            handleParticipantsChange={handleParticipantsChange}
//            selectedParticipant={view === 'estudiantes' ? 'participante2' : view === 'mentores' ? 'participante1' : ''}
//          />
      
//          <div className="flex-grow">
//            {/* Renderiza diferentes vistas dependiendo del estado 
//            {view === 'profile' && <div>Vista del Perfil</div>}
//            {view === 'estudiantes' && <TableEstudiantes />}
//            {view === 'mentores' && <div>Vista de Mentores</div>}
//          </div>
//        </div> */}
//        </>
//      );
//    }

//    export default App;

// //  import React, { useState } from 'react';
// //  import { Routes, Route } from 'react-router-dom';
// //  import { TableEstudiantes } from './components/EmpresasSide/Dashboard/TableEstudiantes';
// //  import { DashboardEmpresa } from './components/EmpresasSide/Dashboard/DashboardEmpresa';
// //  import { EmpresaSide } from './Pages/EmpresaSide';
// //  import { MentoresEmpresa } from './components/EmpresasSide/Dashboard/Mentores/MentoresEmpresa';
// //  import { PerfilDashboard } from './components/EmpresasSide/Dashboard/Perfil/PerfilDashboard';

// //  const App = () => {
// //    const [showProfile, setShowProfile] = useState(false);
// //    const [selectedOption, setSelectedOption] = useState('');
// //    const [darkMode, setDarkMode] = useState(false);  // Estado para dark mode
  

// //    const handleProfileClick = () => {
// //      setShowProfile(!showProfile);
// //      setSelectedOption('');
// //    };

// //    const handleParticipantsChange = (option) => {
// //      setSelectedOption(option);
// //      setShowProfile(false);
// //    };

// //    return (
// //      <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} flex`}>
// //        <EmpresaSide
// //          onProfileClick={handleProfileClick}
// //          onParticipantsChange={handleParticipantsChange}
// //          darkMode={darkMode}
// //          setDarkMode={setDarkMode}
// //        />
// //        <div className="flex-1">
// //          {!selectedOption 
// //          && <DashboardEmpresa showProfileCard={showProfile} darkMode={darkMode} />
// //          && <PerfilDashboard darkMode={darkMode} />
// //          }
// //        </div>
// //      </div>
// //    );
// //  };

// //  export default App;
// // import React, { useState } from 'react';
// // import { Routes, Route } from 'react-router-dom';
// // import { TableEstudiantes } from './components/EmpresasSide/Dashboard/TableEstudiantes';
// // import { DashboardEmpresa } from './components/EmpresasSide/Dashboard/DashboardEmpresa';
// // import { EmpresaSide } from './Pages/EmpresaSide';
// // import { MentoresEmpresa } from './components/EmpresasSide/Dashboard/Mentores/MentoresEmpresa';
// // import { PerfilDashboard } from './components/EmpresasSide/Dashboard/Perfil/PerfilDashboard';
// // import { AdminPage } from './Pages/AdminPage';

// // const App = () => {
// //   const [showProfile, setShowProfile] = useState(false);
// //   const [selectedOption, setSelectedOption] = useState('');
// //   const [darkMode, setDarkMode] = useState(false);

// //   const handleProfileClick = () => {
// //     setShowProfile(!showProfile);
// //     setSelectedOption('');
// //   };

// //   const handleParticipantsChange = (option) => {
// //     setSelectedOption(option);
// //     setShowProfile(false);
// //   };

// //   return (
// //     <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} flex`}>
// //       <EmpresaSide
// //         onProfileClick={handleProfileClick}
// //         onParticipantsChange={handleParticipantsChange}
// //         darkMode={darkMode}
// //         setDarkMode={setDarkMode}
// //       />
// //       <div className="flex-1">
// //         <Routes>
// //           <Route 
// //             path="/" 
// //             element={
// //               showProfile ? 
// //               <PerfilDashboard darkMode={darkMode} /> : 
// //               <DashboardEmpresa showProfileCard={showProfile} darkMode={darkMode} />
// //             } 
// //           />
// //           <Route 
// //             path="/estudiantes" 
// //             element={<TableEstudiantes darkMode={darkMode} />} 
// //           />
// //           <Route 
// //             path="/mentores" 
// //             element={<MentoresEmpresa darkMode={darkMode} />} 
// //           />
// //         </Routes>
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;

// import React, { useState, useEffect } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import "./App.css";

// // Componentes de páginas principales
// import { Home } from "./Pages/Home";
// import { OngPage } from "./Pages/OngPage";
// import { OngClient } from "./Pages/OngClient";
// import { AdminPage } from "./Pages/AdminPage";
// import { OngUserSide } from "./Pages/OngUserSide";
// import { EmpresaSide } from "./Pages/EmpresaSide";

// // Componentes de autenticación
// import ONGEmpresaLogin from "./components/Login/LoginComponents/ONGEmpresaLogin";
// import { LoginIniciado } from "./components/Login/LoginIniciado";

// // Layout y componentes auxiliares
// import { TableEstudiantes } from "./components/EmpresasSide/Dashboard/TableEstudiantes";
// import { DashboardEmpresa } from './components/EmpresasSide/Dashboard/DashboardEmpresa';
// import { MentoresEmpresa } from './components/EmpresasSide/Dashboard/Mentores/MentoresEmpresa';
// import { PerfilDashboard } from './components/EmpresasSide/Dashboard/Perfil/PerfilDashboard';

// // Componente de ruta protegida
// const ProtectedRoute = ({ children, isAuthenticated, userRole, requiredRole }) => {
//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }
  
//   if (requiredRole && userRole !== requiredRole) {
//     return <Navigate to="/" replace />;
//   }
  
//   return children;
// };

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userRole, setUserRole] = useState(null); // 'admin', 'ong', 'empresa'
//   const [darkMode, setDarkMode] = useState(false);
  
//   useEffect(() => {
//     // Aquí puedes verificar el estado de autenticación al cargar la aplicación
//     // Por ejemplo, checkear un token en localStorage
//     const checkAuth = () => {
//       const token = localStorage.getItem('token');
//       const savedRole = localStorage.getItem('userRole');
//       if (token) {
//         setIsAuthenticated(true);
//         setUserRole(savedRole);
//       }
//     };
    
//     checkAuth();
//   }, []);

//   return (
//     <div className={darkMode ? 'dark' : ''}>
//       <Routes>
//         {/* Rutas públicas */}
//         <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
//         <Route path="/login" element={<LoginIniciado />} />

//         {/* Rutas protegidas para ONG */}
//         <Route
//           path="/ong/*"
//           element={
//             <ProtectedRoute isAuthenticated={isAuthenticated} userRole={userRole} requiredRole="ong">
//               <Routes>
//                 <Route path="/" element={<OngClient />} />
//                 <Route path="dashboard" element={<OngClient />} />
//                 {/* Añade más rutas específicas de ONG aquí */}
//               </Routes>
//             </ProtectedRoute>
//           }
//         />

//         {/* Rutas protegidas para Empresa */}
//         <Route
//           path="/empresa/*"
//           element={
//             <ProtectedRoute isAuthenticated={isAuthenticated} userRole={userRole} requiredRole="empresa">
//               <Routes>
//                 <Route path="/" element={
//                   <EmpresaSide darkMode={darkMode} setDarkMode={setDarkMode} />
//                 } />
//                 <Route path="dashboard" element={<DashboardEmpresa />} />
//                 <Route path="estudiantes" element={<TableEstudiantes />} />
//                 <Route path="mentores" element={<MentoresEmpresa />} />
//                 <Route path="perfil" element={<PerfilDashboard />} />
//               </Routes>
//             </ProtectedRoute>
//           }
//         />

//         {/* Ruta protegida para Admin */}
//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute isAuthenticated={isAuthenticated} userRole={userRole} requiredRole="admin">
//               <AdminPage />
//             </ProtectedRoute>
//           }
//         />

//         {/* Ruta de fallback */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
// App.jsx
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import {Home} from './Pages/Home';
// import {OngPage} from './Pages/OngPage';
// import {CompanyBtn} from './components/NavbarComponents/CompanyBtn';
// // import AuthPage from './Pages/AuthPage';
// import {LoginIniciado} from './components/Login/LoginIniciado';
// import {OngClient} from './Pages/OngClient';
// import {AdminPage} from './Pages/AdminPage';
// import {EmpresaSide} from './Pages/EmpresaSide';
// import AuthPage from './components/Login/AuthPage';

// // Importa otros componentes según sea necesario

// // Contexto de Autenticación (opcional pero recomendado)
// import { AuthProvider, useAuth } from './components/Context/AuthContext'
// import PrivateRoute from './components/PrivateRoute';
// import { OngClientSide } from './components/OngClient/OngClientSide';

// const App = () => {
//   return (
//      <AuthProvider>
      
//         <Routes>
//           {/* Ruta Principal */}
//           <Route path="/" element={<Home />} />

//           {/* Rutas del Navbar */}
//           <Route path="/ong" element={<OngClient />} />
//           <Route path="/empresa" element={<CompanyBtn />} />
//           <Route path="/crear-cuenta" element={<OngPage />} />

//           {/* Ruta de Login desde Home */}
//           <Route path="/login" element={<LoginIniciado />} />

//           {/* Rutas Protegidas */}
//           <Route 
//             path="/ong-client" 
//             element={
//               <PrivateRoute roles={['ONG']}>
//                 <OngClientSide />
//               </PrivateRoute>
//             } 
//           />
//           <Route 
//             path="/admin" 
//             element={
//               <PrivateRoute roles={['Admin']}>
//                 <AdminPage />
//               </PrivateRoute>
//             } 
//           />
//           <Route 
//             path="/empresa-side" 
//             element={
//               <PrivateRoute roles={['Empresa']}>
//                 <EmpresaSide />
//               </PrivateRoute>
//             } 
//           />

//           {/* Redireccionar rutas no encontradas */}
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
   
//    </AuthProvider>
//   );
// };

// export default App;

// App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { Home } from './Pages/Home';
// import { OngPage } from './Pages/OngPage';
// import { CompanyBtn } from './components/NavbarComponents/CompanyBtn';
// import LoginIniciado from './components/Login/LoginIniciado';
// import OngClient from './Pages/OngClient';
// import AdminPage from './Pages/AdminPage';
// import EmpresaSide from './Pages/EmpresaSide';
// import AuthPage from './components/Login/AuthPage';

// // Contexto de Autenticación
// import { AuthProvider } from './components/Context/AuthContext';
// import PrivateRoute from './components/PrivateRoute';
// import { OngClientSide } from './components/OngClient/OngClientSide';

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router> {/* <Router> envuelve a <Routes> */}
//         <Routes>
//           {/* Ruta Principal */}
//           <Route path="/" element={<Home />} />

//           {/* Rutas del Navbar */}
//           <Route path="/ong" element={<OngPage />} />
//           <Route path="/empresa" element={<CompanyBtn />} />
//           <Route path="/crear-cuenta" element={<AuthPage />} />

//           {/* Ruta de Login desde Home */}
//           <Route path="/login" element={<LoginIniciado />} />

//           {/* Rutas Protegidas */}
//           <Route 
//             path="/ong-client" 
//             element={
//               <PrivateRoute roles={['ONG']}>
//                 <OngClientSide />
//               </PrivateRoute>
//             } 
//           />
//           <Route 
//             path="/admin" 
//             element={
//               <PrivateRoute roles={['Admin']}>
//                 <AdminPage />
//               </PrivateRoute>
//             } 
//           />
//           <Route 
//             path="/empresa-side" 
//             element={
//               <PrivateRoute roles={['Empresa']}>
//                 <EmpresaSide />
//               </PrivateRoute>
//             } 
//           />

//           {/* Redireccionar rutas no encontradas */}
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;

// ./src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './Pages/Home';
import { OngPage } from './Pages/OngPage';
import { CompanyBtn } from './components/NavbarComponents/CompanyBtn';
import LoginIniciado from './components/Login/LoginIniciado';
import {OngClient} from './Pages/OngClient';
import {AdminPage} from './Pages/AdminPage';
import {EmpresaSide} from './Pages/EmpresaSide';
import AuthPage from './components/Login/AuthPage';

// Contexto de Autenticación
import { AuthProvider } from './components/Context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import { OngClientSide } from './components/OngClient/OngClientSide';
import LogOng from './components/Login/LogOng';
import ONGEmpresaLogin from './components/Login/LoginComponents/ONGEmpresaLogin';
import { LogInConCuenta } from './components/Login/LogInConCuenta';

const App = () => {
  return (
    <AuthProvider>
      {/* <Router> */}
        <Routes>
          {/* Ruta Principal */}
          <Route path="/" element={<Home />} />

          {/* Rutas del Navbar */}
          <Route path="/ong" element={<OngClient />} />
          <Route path="/empresa" element={<CompanyBtn />} />
          <Route path="/crear-cuenta" element={<OngPage />} />

          {/* Ruta de Login desde Home */}
          <Route path="/login" element={<LogInConCuenta />} />

          {/* Rutas Protegidas */}
          <Route 
            path="/ong-client" 
            element={
              <PrivateRoute roles={['ONG']}>
                <OngClientSide />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/admin" 
            element={
              <PrivateRoute roles={['Admin']}>
                <AdminPage />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/empresa-side" 
            element={
              <PrivateRoute roles={['Empresa']}>
                <EmpresaSide />
              </PrivateRoute>
            } 
          />

          {/* Redireccionar rutas no encontradas */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      {/* </Router> */}
    </AuthProvider>
  );
};

export default App;
