// import React, { forwardRef } from 'react';

// const InputField = forwardRef(({ type, placeholder, ariaLabel, value, onChange, className, ...rest }, ref) => (
//   <input
//     type={type}
//     placeholder={placeholder}
//     aria-label={ariaLabel}
//     value={value}
//     onChange={onChange}
//     ref={ref}
//     className={className}
//     {...rest}
//   />
// ));

// export default InputField;
import React, { forwardRef } from 'react';

const InputField = forwardRef(({ type, ariaLabel, value, onChange, className, label, ...rest }, ref) => (
  <div className="relative">
    <input
      type={type}
      aria-label={ariaLabel}
      value={value}
      onChange={onChange}
      ref={ref}
      className={`${className} peer`} // Agrega `peer` aquí para habilitar la relación con el label
      {...rest}
    />
    <label
      className={`absolute left-3 text-gray-500 text-sm transition-transform duration-200 transform scale-75 origin-top-left
        ${!value ? 'top-3.5' : '-top-3'} 
        peer-focus:-top-3 peer-focus:scale-75 peer-focus:text-sky-500`}
    >
      {label}
    </label>
  </div>
));

export default InputField;
