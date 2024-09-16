import React from 'react';
import { OngClientTestimony } from './OngClientTestimony';
import { OngClientTestimony2 } from './OngClientTestimony2';
import { OngClientTestimony3 } from './OngClientTestimony3';

export const OngClientSide = () => {
  return (
    <>
      <section>
        <div className='pt-10'>
          <OngClientTestimony />
        </div>
      </section>

      {/* Espacio suficiente entre los componentes */}
      <div className=''></div> 

      <section>
        <div className=''>
          <OngClientTestimony2 />
        </div>
      </section>
      <section>
        <div className='pt-20'>
          <OngClientTestimony3 />
        </div>
      </section>
    </>
  );
}

