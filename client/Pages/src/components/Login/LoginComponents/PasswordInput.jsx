// import React from 'react';
// import InputField from './InputField';

// const PasswordInput = ({ value, onChange, register, trigger }) => {
//   return (
//     <>
//     <p className="absolute top-1/4 left-3 text-gray-500 dark:text-gray-400 text-sm transition-transform duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-1/6 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:translate-y-1 peer-focus:scale-75 peer-focus:text-sky-500 after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium">
//       Contraseña
//     </p>
//       <InputField
//         type="password"
//         ariaLabel="Contraseña"
//         value={value}
//         onChange={onChange}
//         {...register('password', {
//           validate: (value) => {
//             const validations = [
//               value.length >= 8,
//               /[A-Z]/.test(value),
//               /[a-z]/.test(value),
//               /\d/.test(value),
//             ];
//             return validations.every(Boolean) || 'La contraseña no cumple con los requisitos.';
//           }
//         })}
//         onBlur={() => trigger('password')}
//         className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-200 placeholder-transparent focus:border-sky-500 focus:outline-none focus:ring-0"
//       />
      
//     </>
//   );
// };

// export default PasswordInput;

import React from 'react';
import InputField from './InputField';

const PasswordInput = ({ value, onChange, register, trigger }) => {
  return (
    <div className="relative">
      <p className="block font-medium text-gray-500 dark:text-gray-400 text-sm mb-1">
        Contraseña
      </p>

      <InputField
        type="password"
        ariaLabel="Contraseña"
        value={value}
        onChange={onChange}
        {...register('password', {
          validate: (value) => {
            const validations = [
              value.length >= 8,
              /[A-Z]/.test(value),
              /[a-z]/.test(value),
              /\d/.test(value),
            ];
            return validations.every(Boolean) || 'La contraseña no cumple con los requisitos.';
          }
        })}
        onBlur={() => trigger('password')}
        className="block w-full appearance-none rounded-lg border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-200 focus:border-sky-500 focus:outline-none focus:ring-0"
      />
    </div>
  );
};

export default PasswordInput;
