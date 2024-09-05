import React, { forwardRef } from 'react';

const TermsCheckbox = forwardRef(({ ...rest }, ref) => (
  <div>
    <input
      type="checkbox"
      ref={ref} // Aplica el ref aquí
      {...rest}
    />
    <label className='text-sm'>Acepto los<a className='font-bold'> Términos y Condiciones</a></label>
  </div>
));

export { TermsCheckbox };


