// import React from 'react'
// import  {MentoresTable}  from './MentoresTable'

// export const MentoresEmpresa = () => {
//   return (
//     <div className='mt-20'>
//       <MentoresTable />
//     </div>
//   )
// }

import React from 'react';
import { MentoresTable } from './MentoresTable';

export const MentoresEmpresa = () => {
  return (
    <div className="mt-20 flex justify-center">
      <div className="w-[980px] rounded-md shadow-lg overflow-hidden">
        {/* Contenedor del título con el fondo de gradiente y bordes superiores redondeados */}
        <div className="bg-gradient-to-r from-[#76B596] via-[#41849D] to-[#034AA6] p-4 rounded-t-md">
          <h2 className="text-center text-white text-xl font-semibold">Empresa</h2>
        </div>
        
        {/* Contenedor de la tabla */}
        <div className="bg-white p-4 rounded-b-md">
          <MentoresTable />
        </div>
      </div>
    </div>
  );
};
