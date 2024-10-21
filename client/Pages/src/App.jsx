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
import { OngUserSide } from './Pages/OngUserSide';
import {OngLogin} from './components/OngSide/OngComponents/LoginOng/OngLogin'
import { EmpresaLogin } from './components/EmpresasSide/LoginEmpresa/EmpresaLogin';
import { AdminLogin } from './components/AdminComponents/AdminLogin/AdminLogin';

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
          <Route path="/ong-login" element={<OngLogin />} />
          <Route path="/empresa-login" element={<EmpresaLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* Ruta de Login desde Home */}
          {/* <Route path="/login" element={<LogInConCuenta />} /> */}

          {/* Rutas Protegidas */}
          <Route 
            path="/ong-client" 
            element={
              // <PrivateRoute roles={['ONG']}>
                <OngUserSide />
              // </PrivateRoute>
            } 
          />
          <Route 
            path="/admin" 
            element={
              // <PrivateRoute roles={['Admin']}>
                <AdminPage />
              // </PrivateRoute>
            } 
          />
          <Route 
            path="/empresa-side" 
            element={
              //<PrivateRoute roles={['Empresa']}>
                <EmpresaSide />
              //</PrivateRoute>
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
