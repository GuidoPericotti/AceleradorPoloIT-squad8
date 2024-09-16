import React from 'react';
import { useFormContext } from 'react-hook-form';
import InputField from './InputField';

const PasswordInput = () => {
  const { register, trigger, formState: { errors } } = useFormContext();

  return (
    <div className="relative">
      <p className="block font-medium text-gray-500 dark:text-gray-400 text-sm mb-1">
        Contraseña
      </p>
      <InputField
        type="password"
        ariaLabel="Contraseña"
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
        className={`block w-full appearance-none rounded-lg border ${
          errors?.password ? 'border-red-500' : 'border-gray-300'
        } bg-white dark:bg-gray-800 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-200 focus:border-sky-500 focus:outline-none focus:ring-0`}
        id="Contrasena"
      />
      {errors?.password && (
        <p className="text-red-500 text-sm mt-1">
          {errors.password.message}
        </p>
      )}
    </div>
  );
};

export default PasswordInput;