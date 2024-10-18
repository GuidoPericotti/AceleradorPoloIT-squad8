import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import { OngClientSide } from '../components/OngClient/OngClientSide'
import { Footer } from './Footer'


export const OngClient = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Aplicar la clase 'dark' al html cuando cambie darkMode
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
        <main>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
            <OngClientSide darkMode={darkMode} setDarkMode={setDarkMode}  />
            <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
        </main>
    
    </>
  )
}
