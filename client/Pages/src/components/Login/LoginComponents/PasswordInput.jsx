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
        id='Contrasena'

      />
    </div>
  );
};

export default PasswordInput;
