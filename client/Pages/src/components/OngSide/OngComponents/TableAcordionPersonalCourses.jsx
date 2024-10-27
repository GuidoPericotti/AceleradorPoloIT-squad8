import React, { useState } from 'react'
import PersonalCourses from './PersonalCourses'
import { NavbarOng } from './Navbar/NavbarOng';

export const TableAcordionPersonalCourses = () => {
    const [darkMode, setDarkMode] = useState(false); // Inicia en modo claro

    return (
    <div className={`relative ${darkMode ? 'dark' : ''}`}>       
        <NavbarOng darkMode={darkMode} setDarkMode={setDarkMode} />
        <section className='mt-32'>
            <PersonalCourses />
        </section>
    </div>
  )
}
