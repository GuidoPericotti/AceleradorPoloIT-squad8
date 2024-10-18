 import React from 'react';
 import { OngClientTestimony } from './OngClientTestimony';
 import { OngClientTestimony2 } from './OngClientTestimony2';
 import { OngClientTestimony3 } from './OngClientTestimony3';

export const OngClientSide = ({ darkMode }) => {
  return (
    <>
      <section>
        <div className='pt-10'>
          <OngClientTestimony darkMode={darkMode} />
        </div>
      </section>

      <section>
        <div className=''>
          <OngClientTestimony2 darkMode={darkMode} />
        </div>
      </section>

      <section>
        <div className=''>
          <OngClientTestimony3 darkMode={darkMode} />
        </div>
      </section>
    </>
  );
}