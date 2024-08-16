import React, { useState, useEffect } from "react";
import { CardsLogin } from "./CardsLogin";
import { HeroSection } from "./HeroSection";
import { Navbar } from "./Navbar";
import '../App.css'
export const Home = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeroSection darkMode={darkMode} />
      <CardsLogin darkMode={darkMode} />
    </>
  );
};
