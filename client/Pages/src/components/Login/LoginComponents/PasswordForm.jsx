import React from 'react';
import { useFormContext } from 'react-hook-form';
import PasswordInput from './PasswordInput';
import ConfirmPasswordInput from './ConfirmPasswordInput';

const PasswordForm = () => {
  const { watch, formState: { errors } } = useFormContext();

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  const passwordsMatch = password === confirmPassword;

  return (
    <div>
      <PasswordInput />
      <p>La ontaseña debe tener ocho caracteres<br/> una mayuscula<br/> un simbolo<br/>un número </p>
      <ConfirmPasswordInput />
      {/* {!passwordsMatch && password && confirmPassword && (
        <p className="text-red-500 text-xs mt-1">Las contraseñas no coinciden.</p>
      )} */}
    </div>
  );
};

export default PasswordForm;