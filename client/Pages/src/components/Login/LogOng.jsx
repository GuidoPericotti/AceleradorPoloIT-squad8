import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import EmailInput from './LoginComponents/EmailInput';
import PasswordInput from './LoginComponents/PasswordInput';
import { FormButton } from './LoginComponents/FormButton';
import LocationSelector from './LoginComponents/LocationSelector';
import { ModalLogin } from './LoginComponents/ModalLogin';
import InputField from './LoginComponents/InputField';
import { TermsCheckbox } from './LoginComponents/TermsCheckbox';
import { CanalesOficialesInput } from './LoginComponents/CanalesOficialesInput';
import PhoneInput from './LoginComponents/PhoneInput';
import OngName from './LoginComponents/OngName';


// Este es el registro completo con todos los elementos juntos
const LogOng = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    trigger
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      includePhone: false,
      name: ''
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify(data));

    // Show modal after simulated submission
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate('/home');
  };

  const email = watch('email');
  const password = watch('password');

  return (
    <main >
      
        <div className="p-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Existing form fields */}
            <div className="mb-4">
              <LocationSelector />
            </div>
            <div className="mb-4 relative">
                <OngName  register={register}/>
            </div>
            <div className="mb-4 relative">
              <PhoneInput />
            </div> 
            <div className="mb-4 relative">
              <EmailInput
                value={email}
                onChange={(value) => setValue('email', value)}
                register={register}
                trigger={trigger}
                className="peer block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-700 dark:text-gray-300 placeholder-transparent focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0"
                id="Email"
              />
              
              {errors.email && <p className="text-red-500 text-xs mt-1">El formato del email es incorrecto</p>}
            </div>
            <div className="mb-4">
              <CanalesOficialesInput />
            </div>

            <div className="mb-4 relative">
              <PasswordInput
                value={password}
                onChange={(value) => setValue('password', value)}
                register={register}
                trigger={trigger}
                className="peer block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-700 dark:text-gray-300 placeholder-transparent focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0"
                id="Password"
               />
              {errors.password && <p className="text-red-500 text-xs mt-1">La contraseña no cumple con los requisitos.</p>}
            </div>
            <div className="mb-4">
              <TermsCheckbox {...register('terms', { required: true })} />
              {errors.terms && <p className="text-red-500 text-xs mt-1">Debes aceptar los términos y condiciones.</p>}
            </div>
            <FormButton type="submit" text={isSubmitting ? 'Enviando...' : 'Enviar'} />
          </form>
      {showModal && (
        <ModalLogin
          onClose={handleModalClose}
          title="¡Felcitaciones!"
          message="¡Tu solicitud de registro se ha enviado con éxito!"
          buttonText="Volver al inicio"
        />
      )}
        </div>
    </main>
  );
};

export default LogOng;
