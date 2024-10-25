import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import SocialButton from '../../../Login/LoginComponents/SocialButton';
import EmailInput from '../../../Login/LoginComponents/EmailInput';
import PasswordInput from '../../../Login/LoginComponents/PasswordInput';
import { FormButton } from '../../../Login/LoginComponents/FormButton';

import {  useNavigate } from 'react-router-dom';

import LogoPolo from '../../../../assets/logo_polo_it.png';
import axios from 'axios';


const LoginIniciadoOng = () => {
  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
      tipoOrg_id: '6'
    }
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setValue,
    trigger } = methods;

  
  const navigate = useNavigate();
 
  
  

const handleLogin = async (data) =>{
  
  const { email, password, } = data

  try {
    const response = await axios.post('http://localhost:3000/api/ong/login', {
      email,
      password,
    });
    console.log(response.data);

    if (response.data.success) {
      console.log('Login exitoso', response.data.organizacion_id);
      localStorage.setItem('organizacion_id', response.data.organizacion_id);
      navigate('/ong-client')
    } else {
      console.log('¡Algo ha fallado!:',response.data.message);          
    }
  } catch (error) {
    console.error();         
  }
}



  return (
    <FormProvider {...methods}>
      <main className="w-full max-w-md px-3 mx-auto pt-20 pb-6 dark:bg-gray-900 dark:text-white">
        <div className="relative z-0 flex flex-col min-w-0 break-words bg-[#C6E5D6] dark:bg-gray-800 border-0 shadow-lg rounded-2xl bg-clip-border">
          <div className="p-6 mb-0 text-center bg-[#C6E5D6] dark:bg-gray-800 border-b-0 rounded-t-2xl text-lg">
            <h5 className="text-gray-900 dark:text-white">Inicio de sesión</h5>
          </div>
          <div className="flex justify-center mb-4">
            <SocialButton 
              icon={LogoPolo} 
              alt="Polo-it icon" 
              className="object-contain"
            />
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="mb-4 relative">
                <p>Email</p>
                <EmailInput
                  onChange={(value) => setValue('email', value)}
                  register={methods.register}
                  trigger={trigger}
                  className="peer block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-700 dark:text-gray-300 placeholder-transparent focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0"
                  id="email_org"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">El formato del email es incorrecto</p>
                )}
              </div>
              <div className="mb-4 relative">
                <PasswordInput 
                  id="password_org"
                  onChange={(value) => methods.setValue('password', value)}

                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">La contraseña no es correcta.</p>
                )}
              </div>
              <FormButton
                text={isSubmitting ? 'Iniciando sesión' : 'Iniciar sesión'}
                isSubmitting={isSubmitting}
                isDisabled={!isValid || isSubmitting}
                onClick={handleLogin}
              />
            </form>
          </div>
        </div>
      </main>
    </FormProvider>
  );
};

export default LoginIniciadoOng;