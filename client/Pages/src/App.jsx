import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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

function App() {

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
      {/* <OngUserSide /> */}
      <EmpresaSide />
      <Routes>
      <Route path="/estudiantes" element={<TableEstudiantes />} />
          {/* Puedes agregar la ruta para mentores también */}
          <Route path="/mentores" element={<div>Vista de mentores</div>} />
          <Route path="/" element={<SidebarEmpresa />} />
      </Routes>
    </>
  );
}

export default App;
