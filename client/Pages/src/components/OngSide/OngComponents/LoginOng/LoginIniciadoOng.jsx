import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import SocialButton from '../../../Login/LoginComponents/SocialButton';
import EmailInput from '../../../Login/LoginComponents/EmailInput';
import PasswordInput from '../../../Login/LoginComponents/PasswordInput';
import { FormButton } from '../../../Login/LoginComponents/FormButton';
import { useAuth } from '../../../Context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { ModalLogin } from '../../../Login/LoginComponents/ModalLogin';
import LogoPolo from '../../../../assets/logo_polo_it.png';
import axios from 'axios';

const LoginIniciadoOng = () => {
  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: ''
    }
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setValue,
    trigger,
    watch
  } = methods;
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('')
  

const handleLogin = async (data) =>{
  
  const { email, password} = data

  try {
    const response = await axios.post('http://localhost:3000/api/login', {
      email,
      password,
    });
    console.log(response)
    if (response.data.success ) {
      setMessage('¡Inicio de sesión Exitoso!');
      navigate('/ong-client')
    } else {
      setMessage('¡Algo ha fallado!');          
    }
  } catch (error) {
    console.error();
    setMessage('¡Algo ha fallado!');          

  }
}
  const handleModalClose = () => {
    setShowModal(false);
    navigate('/');
  };

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
                  id="email_ong"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">El formato del email es incorrecto</p>
                )}
              </div>
              <div className="mb-4 relative">
                <PasswordInput 
                  id="password_ong"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">La contraseña no es correcta.</p>
                )}
              </div>
              <FormButton
                text={isSubmitting ? 'Iniciando sesión' : 'Iniciar sesión'}
                isSubmitting={isSubmitting}
                isDisabled={!isValid || isSubmitting || watch('password') !== watch('confirmPassword')}
                id='createOngUser'
              />
            </form>
          </div>
        </div>
      </main>
    </FormProvider>
  );
};

export default LoginIniciadoOng;