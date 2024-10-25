import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './Pages/Home';
import { OngPage } from './Pages/OngPage';
import { CompanyBtn } from './components/NavbarComponents/CompanyBtn';

import {OngClient} from './Pages/OngClient';
import {AdminPage} from './Pages/AdminPage';
import {EmpresaSide} from './Pages/EmpresaSide';


// Contexto de Autenticación
import { AuthProvider } from './components/Context/AuthContext';
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
          <Route path="/ong-client" element={<OngUserSide />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/empresa-side" element={<EmpresaSide />} />
          {/* Redireccionar rutas no encontradas */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      {/* </Router> */}
    </AuthProvider>
  );
};

export default App;