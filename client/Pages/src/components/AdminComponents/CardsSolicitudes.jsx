// import React, { useState } from 'react';
// import { ButtonCardAdmin } from './ButtonCardAdmin';
// import { ModalLogin } from '../Login/LoginComponents/ModalLogin';

// export const CardsSolicitudes = ({ tipo }) => {
//   const [showModalAdmin, setShowModalAdmin] = useState(false);

//   const handleOpenModal = () => {
//     setShowModalAdmin(true);
//   };

//   const handleModalClose = () => {
//     setShowModalAdmin(false);
//   };

//   return (
//     <div className="bg-base-100 w-96 border-2 rounded-2xl">
//       <div className="mb-5 px-4 flex flex-col pt-2">
//         {/* Botón de cruz en la esquina superior derecha */}
//         <div className="flex justify-end mb-2">
//           <button
//             className="border-slate-900 p-2 rounded-lg"
//             onClick={handleOpenModal}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Contenedor para la imagen y el texto */}
//         <div className="flex items-start space-x-4">
//           <figure>
//             <img
//               src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
//               alt="Movie"
//               className="w-20 h-20 rounded-lg"
//             />
//           </figure>
//           <div>
//             <strong className="flex-1">Nombre {tipo}</strong>
//             <p className="flex-1 text-gray-300">Recibido hace 3hs</p>
//           </div>
//         </div>

//         {/* Botones separados y centrados */}
//         <div className="mt-4">
//           <ButtonCardAdmin nombre="Ver más"/>
//           {/* <ButtonCardAdmin nombre="Aceptar" /> */}
//         </div>
//       </div>

//       {/* Mostrar el ModalLogin si showModalAdmin es true */}
//       {showModalAdmin && (
//         <ModalLogin
//           onClose={handleModalClose}
//         //   title="Acción requerida"
//           message="¿Deseas rechazar la solicitud?"
//           buttonText="Cancelar"
//           extraButtonText="Rechazar"
//           onExtraButtonClick={() => alert('Rechazado')} // Puedes cambiar esta acción según sea necesario
//         />
//       )}
//     </div>
//   );
// };

// import React, { useState } from 'react';
// import { ButtonCardAdmin } from './ButtonCardAdmin';
// import { ModalLogin } from '../Login/LoginComponents/ModalLogin';

// export const CardsSolicitudes = ({ tipo }) => {
//   const [showModalAdmin, setShowModalAdmin] = useState(false);

//   const handleOpenModal = () => {
//     setShowModalAdmin(true);
//   };

//   const handleModalClose = () => {
//     setShowModalAdmin(false);
//   };

//   return (
//     <div className="bg-base-100 w-full md:w-24 border-2 rounded-2xl mb-4 p-4 lg:w-80">
//       <div className="flex flex-col">
//         {/* Botón de cruz en la esquina superior derecha */}
//         <div className="flex justify-end mb-1">
//           <button
//             className="border-slate-900 p-2 rounded-lg"
//             onClick={handleOpenModal}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Contenedor para la imagen y el texto */}
//         <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-4">
//           <figure>
//             <img
//               src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
//               alt="Movie"
//               className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg"
//             />
//           </figure>
//           <div className="mt-2 sm:mt-0">
//             <strong className="block text-base sm:text-lg">Nombre {tipo}</strong>
//             <p className="text-xs sm:text-sm text-gray-400">Recibido hace 3hs</p>
//           </div>
//         </div>

//         {/* Botones separados y centrados */}
//         <div className="mt-4">
//           <ButtonCardAdmin nombre="Ver más"/>
//         </div>
//       </div>

//       {/* Mostrar el ModalLogin si showModalAdmin es true */}
//       {showModalAdmin && (
//         <ModalLogin
//           onClose={handleModalClose}
//           message="¿Deseas rechazar la solicitud?"
//           buttonText="Cancelar"
//           extraButtonText="Rechazar"
//           onExtraButtonClick={() => alert('Rechazado')}
//         />
//       )}
//     </div>
//   );
// };

// import React, { useState } from 'react';
// import { ButtonCardAdmin } from './ButtonCardAdmin';
// import { ModalLogin } from '../Login/LoginComponents/ModalLogin';

// export const CardsSolicitudes = ({ tipo }) => {
//   const [showModalAdmin, setShowModalAdmin] = useState(false);

//   const handleOpenModal = () => {
//     setShowModalAdmin(true);
//   };

//   const handleModalClose = () => {
//     setShowModalAdmin(false);
//   };

//   return (
//     <div className="bg-base-100 w-full lg:w-64 border-2 rounded-2xl mb-2 p-2 sm:p-4 sm:w-full dark:text-white">
//   <div className="flex flex-col">
//     {/* Botón de cerrar */}
//     <div className="flex justify-end mb-1">
//       <button
//         className="border-slate-900 p-2 rounded-lg"
//         onClick={handleOpenModal}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M6 18L18 6M6 6l12 12"
//           />
//         </svg>
//       </button>
//     </div>

//     {/* Contenedor para la imagen y el texto */}
//     <div className="flex flex-col items-start sm:flex-row sm:items-center space-x-0 sm:space-x-4">
//       <figure>
//         <img
//           src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
//           alt="Movie"
//           className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg"
//         />
//       </figure>
//       <div className="mt-2 sm:mt-0">
//         <strong className="block text-sm sm:text-2xs">Nombre {tipo}</strong>
//         <p className="text-xs sm:text-sm text-gray-400 sm:text-2xs">Recibido hace 3hs</p>
//       </div>
//     </div>

//     {/* Botón Ver más */}
//     <div className="mt-4 -ml-7">
//       <ButtonCardAdmin nombre="Ver más" />
//     </div>
//   </div>

//   {/* Modal */}
//   {showModalAdmin && (
//     <ModalLogin
//       onClose={handleModalClose}
//       message="¿Deseas rechazar la solicitud?"
//       buttonText="Cancelar"
//       extraButtonText="Rechazar"
//       onExtraButtonClick={() => alert('Rechazado')}
//     />
//   )}
// </div>

//   );
// };

import React, { useState } from 'react';
import { ButtonCardAdmin } from './ButtonCardAdmin';
import { ModalLogin } from '../Login/LoginComponents/ModalLogin';

export const CardsSolicitudes = ({ tipo }) => {
  const [showModalAdmin, setShowModalAdmin] = useState(false);

  const handleOpenModal = () => {
    setShowModalAdmin(true);
  };

  const handleModalClose = () => {
    setShowModalAdmin(false);
  };

  return (
    <div className="admlg:ms-16 admlg:w-[280px] bg-base-100 w-full border-2 rounded-2xl mb-2 p-2 sm:p-4 adms:w-[200px] dark:text-white">
      <div className="flex flex-col">
        {/* Botón de cerrar */}
        <div className="flex justify-end mb-1">
          <button
            className="border-slate-900 p-2 rounded-lg"
            onClick={handleOpenModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 adms:h-5 adms:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Contenedor para la imagen y el texto */}
        <div className="flex flex-col items-start sm:flex-row sm:items-center space-x-0 sm:space-x-4 adms:space-x-2">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Movie"
              className="w-14 h-14 sm:w-16 sm:h-16 adms:w-12 adms:h-12 rounded-lg admlg:w-28 admlg:h-28"
            />
          </figure>
          <div className="">
            <strong className="text-sm adms:text-xs admlg:flex-1">Nombre {tipo}</strong>
            <p className="text-xs sm:text-sm adms:text-2xs text-gray-400 admlg:flex-1">Recibido hace 3hs</p>
          </div>
        </div>

        {/* Botón Ver más */}
        <div className="mt-4 -ml-7 adms:-ml-4 admlg:w-[240px] admlg:ml-0.5">
          <ButtonCardAdmin nombre="Ver más" />
        </div>
      </div>

      {/* Modal */}
      {showModalAdmin && (
        <ModalLogin
          onClose={handleModalClose}
          message="¿Deseas rechazar la solicitud?"
          buttonText="Cancelar"
          extraButtonText="Rechazar"
          onExtraButtonClick={() => alert('Rechazado')}
        />
      )}
    </div>
  );
};
