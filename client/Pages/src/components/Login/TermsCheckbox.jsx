import React, { forwardRef } from 'react';

const TermsCheckbox = forwardRef(({ ...rest }, ref) => (
  <div>
    <input
      type="checkbox"
      ref={ref} // Aplica el ref aquí
      {...rest}
    />
    <label>Acepto los términos y condiciones</label>
  </div>
));

export { TermsCheckbox };


