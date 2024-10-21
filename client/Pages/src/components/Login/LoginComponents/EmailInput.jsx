import React from 'react';
import { useFormContext } from 'react-hook-form';
import InputField from './InputField';

const EmailInput = ({ className, id }) => {
  const { register, trigger, formState: { errors } } = useFormContext();

  return (
    <div className="relative">
      <InputField
        type="email"
        // ariaLabel="Email"
        placeholder="Ingresar correo"
        {...register('email', {
          required: 'El email es requerido',
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: 'El formato del email es incorrecto'
          }
        })}
        onBlur={() => trigger('email')}
        className={className}
        id={id}
      />
      {errors.email && (
        <p className="text-red-500 text-sm mt-1">
          {errors.email.message}
        </p>
      )}
    </div>
  );
};

export default EmailInput;