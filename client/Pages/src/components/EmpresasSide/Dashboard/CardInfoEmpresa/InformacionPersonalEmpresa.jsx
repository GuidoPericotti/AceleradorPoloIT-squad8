// import React from 'react';
// import OngName from '../../Login/LoginComponents/OngName';

// export const InformacionPersonalEmpresa = () => {
//   return (
//     <div>
//       <h2 className="pl-1 text-lg font-semibold text-center uppercase">Informacion Personal</h2>
//       <hr className="pb-[0.5px] bg-black" />
//       <form action="">
//         <div className="mb-4 relative">
//             <OngName />
//         </div>

//       </form>
//     </div>
//   );
// };


import React from 'react';
import InputField from '../../../Login/LoginComponents/InputField';


export const InformacionPersonalEmpresa = () => {
  return (
    <div>
      <h2 className="pl-1 text-lg font-semibold text-center uppercase">Informacion Personal</h2>
      <hr className="pb-[0.5px] bg-black" />
      <form action="">
        <div className="mb-4 mt-1">
            {/* Si no necesitas register, puedes llamarlo así */}
            <p className='mt-2'>Nombre de la empresa</p>
            <InputField 
              className="mb-5 block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1 mt-2 text-gray-700 dark:text-gray-300 focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0"
            />
        </div>
        <div className="mb-4">
            {/* Si no necesitas register, puedes llamarlo así */}
            <p>Location</p>
            <InputField 
              className="mb-5 block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1 mt-2 text-gray-700 dark:text-gray-300 focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0"
            />
        </div>
        <div className="mb-4">
            {/* Si no necesitas register, puedes llamarlo así */}
            <p>Número de teléfono</p>
            <InputField 
              className="mb-5 block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1 mt-2 text-gray-700 dark:text-gray-300 focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0"
            />
        </div>
        <div className="mb-4">
            {/* Si no necesitas register, puedes llamarlo así */}
            <p>Email</p>
            <InputField 
              className="mb-5 block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1 mt-2 text-gray-700 dark:text-gray-300 focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0"
            />
        </div>
        <div className="mb-4">
  <p>Canales digitales oficiales</p>

  {/* Input con icono del globo de web o https */}
  <div className="mb-5">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      {/* SVG del globo de web */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="z-10 mt-[554px] ml-[340px] w-5 h-5 text-gray-500">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 00-3.95 19.32c.62.11.85-.27.85-.61v-2.12c-3.35.73-4.04-1.63-4.04-1.63-.57-1.47-1.39-1.86-1.39-1.86-1.13-.77.09-.75.09-.75 1.25.09 1.9 1.28 1.9 1.28 1.11 1.9 2.91 1.35 3.62 1.03.11-.8.43-1.35.78-1.66-2.67-.3-5.47-1.34-5.47-5.96 0-1.31.47-2.38 1.25-3.22-.13-.31-.54-1.55.12-3.24 0 0 1.01-.32 3.31 1.23a11.48 11.48 0 013.02-.4 11.46 11.46 0 013.02.4c2.3-1.55 3.3-1.23 3.3-1.23.66 1.69.25 2.93.12 3.24.78.84 1.25 1.91 1.25 3.22 0 4.63-2.81 5.66-5.48 5.95.44.37.82 1.1.82 2.22v3.29c0 .35.23.73.86.61A10.02 10.02 0 0012 2z" />
      </svg>
    </span> 
    <InputField
      placeholder="Sitio Web"
      className="z-0 block w-full pl-10 appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1 mt-2 text-gray-700 dark:text-gray-300 focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0"
    />
  </div>

  {/* Input con icono de Instagram */}
  <div className="mb-5">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      {/* SVG de Instagram */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="z-10 mt-[664px] ml-[340px] w-5 h-5 text-gray-500">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 11-12 0 6 6 0 0112 0zm0 0v8m0 4h8m-8-4h8M4 8h8" />
      </svg>
    </span>
    <InputField
      placeholder="Instagram"
      className="z-0 block w-full pl-10 appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1 mt-2 text-gray-700 dark:text-gray-300 focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0"
    />
  </div>

  {/* Input con icono de Twitter */}
  <div className="mb-5">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      {/* SVG de Twitter */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="z-10 mt-[768px] ml-[340px] w-5 h-5 text-gray-500">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h2v3h4v-3h2M10 10h4l1-1M12 5v4M5 15h2l3 4h4l3-4h2" />
      </svg>
    </span>
    <InputField
      placeholder="Twitter"
      className="z-0 block w-full pl-10 appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1 mt-2 text-gray-700 dark:text-gray-300 focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0"
    />
  </div>
</div>

      </form>
    </div>
  );
};
