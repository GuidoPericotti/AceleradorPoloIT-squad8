

import "./App.css"
import { CompanyBtn } from "./components/NavbarComponents/CompanyBtn";
import { ContactBtn } from "./components/NavbarComponents/ContactBtn";
import { MentoresBtn } from "./components/NavbarComponents/MentoresBtn";
import { ParticipantesBtn } from "./components/NavbarComponents/ParticipantesBtn";
import { ProyectsBtn } from "./components/NavbarComponents/ProyectsBtn";
import { Home } from "./Pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { LogOng } from "./components/Login/LogOng";



function App() {

 

  return (
    <>
      
      <Routes>
        <Route path="/" element={ <Home />}></Route>
        <Route path="/login" element={ <LogOng />}></Route>
        <Route path="/signin" element={<LogOng showNameField={false} />}></Route>
        <Route path="/empresas" element={<CompanyBtn/>}></Route>
        <Route path="/proyectos" element={<ProyectsBtn/>}></Route>
        <Route path="/participantes" element={<ParticipantesBtn/>}></Route>
        <Route path="/mentores" element={<MentoresBtn/>}></Route>
        <Route path="/contact" element={<ContactBtn/>}></Route>
        <Route path="/*" element={<Navigate to='/'/>}></Route>
      </Routes> 
    </>
  )
}

export default App
