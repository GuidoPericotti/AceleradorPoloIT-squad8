import React from 'react';
import InputField from './InputField';
import { useFormContext } from 'react-hook-form';

const ConfirmPasswordInput = ({ value, onChange }) => {
  const { register, trigger, formState: { errors }, getValues } = useFormContext();

  return (
    <div className="relative mt-4">
      <p className="block font-medium text-black dark:text-gray-400 text-sm mb-1">
        Confirmar Contraseña
      </p>
      <InputField
        type="password"
        ariaLabel="Confirmar Contraseña"
        value={value}
        onChange={onChange}
        placeholder="Confirmar contraseña"
        {...register('confirmPassword', {
          validate: (value) => {
            const password = getValues('password');
            return value === password || 'Las contraseñas no coinciden.';
          }
        })}
        onBlur={() => trigger('confirmPassword')}
        className={`block w-full appearance-none rounded-lg border ${
          errors?.confirmPassword ? 'border-red-500' : 'border-gray-300'
        } bg-white dark:bg-gray-800 dark:border-gray-600 px-3 py-2 text-gray-700 dark:text-gray-200 focus:border-sky-500 focus:outline-none focus:ring-0`}
        id="ConfirmarContrasena"
      />
      {errors?.confirmPassword && (
        <p className="text-red-500 text-sm mt-1">
          {errors.confirmPassword.message}
        </p>
      )}
    </div>
  );
};

export default ConfirmPasswordInput;