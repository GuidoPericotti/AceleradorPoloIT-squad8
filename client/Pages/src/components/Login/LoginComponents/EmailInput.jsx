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
        id="email_org"
        // Solo ejecutar trigger si está disponible
        onBlur={() => trigger && trigger('email')}
        className="block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-gray-700 dark:text-gray-300 focus:border-sky-500 dark:focus:border-sky-300 focus:outline-none focus:ring-0"
      />
    </div>
  );
};

export default EmailInput;

