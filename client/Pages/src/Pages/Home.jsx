import React, { useState, useEffect } from "react";
import { CardsLogin } from "./CardsLogin";
import { HeroSection } from "./HeroSection";
import { Navbar } from "./Navbar";
import '../App.css'
import { Testimony } from "./Testimony";
import { Footer } from "./Footer";
import { CompanySupport } from "../components/CompanySupport/CompanySupport";

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
      <span>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeroSection darkMode={darkMode} setDarkMode={setDarkMode} />
      <CardsLogin darkMode={darkMode} setDarkMode={setDarkMode} />
      <Testimony darkMode={darkMode} setDarkMode={setDarkMode} />
      <CompanySupport darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      </span>
    </>
  );
};
