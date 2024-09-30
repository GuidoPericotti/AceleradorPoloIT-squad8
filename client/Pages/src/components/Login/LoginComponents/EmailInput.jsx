
// import React from 'react';
// import InputField from './InputField';

// const EmailInput = ({ value, onChange, register, trigger }) => {
//   return (
//     <>
//     <InputField
//       type="email"
//       placeholder="Email"
//       ariaLabel="Email"
//       value={value}
//       onChange={onChange}
//       {...register('email', {
//         required: 'El correo electrónico es obligatorio.',
//         pattern: {
//           value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
//           message: 'El formato del email es incorrecto'
//         }
//       })}
//       onBlur={() => trigger('email')}
//       className="peer block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-gray-700 dark:text-gray-300 placeholder-transparent focus:border-sky-500 dark:focus:border-sky-300 focus:outline-none focus:ring-0"
//     />
//     <label className="absolute top-1/4 left-3 text-gray-500 dark:text-gray-400 text-sm transition-transform duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-1/6 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:translate-y-1 peer-focus:scale-75 peer-focus:text-sky-500 after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium">
//       Email
//     </label>
//     </>
//   );
// };

// export default EmailInput;
// import React from 'react';
// import InputField from './InputField';

// const EmailInput = ({ value, onChange, register, trigger }) => {
//   return (
//     <div className="relative mb-4">
//       <p className="block font-medium text-gray-500 dark:text-gray-400 text-sm mb-1">
//         Email
//       </p>
      
//       <InputField
//         type="email"
//         ariaLabel="Email"
//         value={value}
//         onChange={onChange}
//         {...register('email', {
//           required: 'El correo electrónico es obligatorio.',
//           pattern: {
//             value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
//             message: 'El formato del email es incorrecto'
//           }
//         })}
//         id="Email"
//         onBlur={() => trigger('email')}
//         className="block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-gray-700 dark:text-gray-300 focus:border-sky-500 dark:focus:border-sky-300 focus:outline-none focus:ring-0"
//       />
//     </div>
//   );
// };

// export default EmailInput;
import React from 'react';
import InputField from './InputField';

const EmailInput = ({ value, onChange, register, trigger }) => {
  return (
    <div className="relative mb-4">
      <p className="block font-medium text-gray-500 dark:text-gray-400 text-sm mb-1">
        Email
      </p>
      
      <InputField
        type="email"
        ariaLabel="Email"
        value={value}
        onChange={onChange}
        // Solo aplicar register si está disponible
        {...(register ? register('email', {
          required: 'El correo electrónico es obligatorio.',
          pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: 'El formato del email es incorrecto'
          }
        }) : {})}
        id="Email"
        // Solo ejecutar trigger si está disponible
        onBlur={() => trigger && trigger('email')}
        className="block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-gray-700 dark:text-gray-300 focus:border-sky-500 dark:focus:border-sky-300 focus:outline-none focus:ring-0"
      />
    </div>
  );
};

export default EmailInput;

