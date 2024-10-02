// import React from 'react';

// const EditButton = () => {
//   return (
//     <div className="absolute right-5 top-40 p-3 bg-[#034aa6] rounded-lg border border-[#356eb8]">
//       <button className="text-white font-normal text-base">Editar</button>
//     </div>
//   );
// };

// export default EditButton;
import React from 'react';

const EditButton = () => {
  return (
    <div className="relative">
      {/* Capa de fondo detrás del botón */}
      <div className="absolute w-[1000px] h-60 bg-black rounded-lg p-3 z-0" />

      {/* Botón de editar con ícono de cámara */}
      <div className=" absolute right-5 top-40 p-3 bg-[#034aa6] rounded-lg border border-[#356eb8] flex items-center z-10">
        {/* Ícono de cámara en SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white mr-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3.17a2 2 0 0 0 1.41-.59l1.83-1.83A2 2 0 0 1 10.83 2h2.34a2 2 0 0 1 1.42.59l1.83 1.83a2 2 0 0 0 1.41.59H21a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
        <button className="text-white font-normal text-base">Editar</button>
      </div>
    </div>
  );
};

export default EditButton;
