// import React from 'react';
// import { FooterComponent } from '../components/Footer/FooterComponent';
// import { IconFooter } from '../components/Footer/IconFooter';

// export const Footer = ({darkMode}) => {
//   return (
//     <footer className={`flex justify-around items-start p-6 pt-28 dark:bg-dark-primary ${darkMode ? 'bg-gray-800 text-white' : 'bg-[#C6E5D6] text-black'}`}>
//       <div className="flex-none mt-4">
//         <IconFooter darkMode={darkMode}/>
//       </div>
//       <div className={`flex-1 ${darkMode ? 'bg-gray-800 text-white' : 'bg-[#C6E5D6] text-black'}`}>
//         <FooterComponent darkMode={darkMode}/>
//       </div>
//     </footer>
//   );
// };


import React from 'react';
import { FooterComponent } from '../components/Footer/FooterComponent';
import { IconFooter } from '../components/Footer/IconFooter';

export const Footer = ({darkMode}) => {
  return (
    <footer className={`
      flex flex-col md:flex-row
      justify-between
      items-center md:items-start
      p-4 md:p-6 
      pt-16 md:pt-28
      ${darkMode ? 'bg-gray-800 text-white' : 'bg-[#C6E5D6] text-black'}
    `}>
      <div className="w-full md:w-auto mb-8 md:mb-0 flex justify-center md:justify-start">
        <IconFooter darkMode={darkMode}/>
      </div>
      <div className={`w-full md:flex-1 ${darkMode ? 'bg-gray-800 text-white' : 'bg-[#C6E5D6] text-black'}`}>
        <FooterComponent darkMode={darkMode}/>
      </div>
    </footer>
  );
};