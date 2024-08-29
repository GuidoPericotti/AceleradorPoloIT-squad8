import React from 'react';
import { TestimonyOng } from '../components/Testimony/TestimonyOng';
// import { TestimonyStudent } from '../components/Testimony/TestimonyStudent';
export const Testimony = ({ darkMode }) => {
  return (
    <>
      <span className={`block w-full pt-40 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <TestimonyOng darkMode={darkMode} Title="Testimonio Ong" />
      </span>
      {/* <span className={`block w-full ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <TestimonyStudent darkMode={darkMode} Title="Testimonio de estudiantes"/>
      </span> */}

    </>
  );
};
