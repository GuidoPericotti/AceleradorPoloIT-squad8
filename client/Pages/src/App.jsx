

// import "./App.css"
// import { CompanyBtn } from "./components/NavbarComponents/CompanyBtn";
// import { ContactBtn } from "./components/NavbarComponents/ContactBtn";
// import { MentoresBtn } from "./components/NavbarComponents/MentoresBtn";
// import { ParticipantesBtn } from "./components/NavbarComponents/ParticipantesBtn";
// import { ProyectsBtn } from "./components/NavbarComponents/ProyectsBtn";
// import { Home } from "./Pages/Home";
// import { Routes, Route, Navigate } from "react-router-dom";
// import LogOng from "./components/Login/LogOng";
// import { OngPage } from "./Pages/OngPage";


// function App() {

 

//   return (
//     <>
      
//       <Routes>
//         <Route path="/" element={ <Home />}></Route>
//         <Route path="/signin" element={ <LogOng showNameField={false}/>}></Route>
//         <Route path="/login" element={<OngPage />}></Route>
//         <Route path="/empresas" element={<CompanyBtn/>}></Route>
//         <Route path="/proyectos" element={<ProyectsBtn/>}></Route>
//         <Route path="/participantes" element={<ParticipantesBtn/>}></Route>
//         <Route path="/mentores" element={<MentoresBtn/>}></Route>
//         <Route path="/contact" element={<ContactBtn/>}></Route>
//         <Route path="/*" element={<Navigate to='/'/>}></Route>
//       </Routes> 
//     </>
//   )
// }

// export default App

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import LogOng from "./components/Login/LogOng";
import { OngPage } from "./Pages/OngPage";
import  ONGEmpresaLogin  from "./components/Login/ONGEmpresaLogin";
import { CompanyBtn } from "./components/NavbarComponents/CompanyBtn";
import { ContactBtn } from "./components/NavbarComponents/ContactBtn";
import { MentoresBtn } from "./components/NavbarComponents/MentoresBtn";
import { ParticipantesBtn } from "./components/NavbarComponents/ParticipantesBtn";
import { ProyectsBtn } from "./components/NavbarComponents/ProyectsBtn";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ongempresa" element={<ONGEmpresaLogin />} />
        <Route path="/logong" element={<LogOng />} />
        <Route path="/login" element={<OngPage />} />
        <Route path="/empresas" element={<CompanyBtn />} />
        <Route path="/proyectos" element={<ProyectsBtn />} />
        <Route path="/participantes" element={<ParticipantesBtn />} />
        <Route path="/mentores" element={<MentoresBtn />} />
        <Route path="/contact" element={<ContactBtn />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
