import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import { FormButton } from './FormButton';
import { InputDialogField } from './InputDialogField';
import LocationSelector from './LocationSelector';
import { ModalLogin } from './ModalLogin';
import InputField from './InputField';
import { TermsCheckbox } from './TermsCheckBox';



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
       <div>
        <div className="p-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 relative">
              <InputField
                type="text"
                placeholder="Nombre"
                ariaLabel="Nombre "
                {...register('name', { required: true })}
                className="peer block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-700 dark:text-gray-300 placeholder-transparent focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0"
                id="Nombre"
              />
              <label className="absolute top-1/4 left-3 text-gray-500 dark:text-gray-400 text-sm transition-transform duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-1/6 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:translate-y-1 peer-focus:scale-75 peer-focus:text-sky-500 after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium">
                Nombre
              </label>
            </div>
            {/* <div className="mb-4 relative">
              <InputField
                type="text"
                placeholder="Nombre de la ONG/Empresa"
                ariaLabel="Nombre de la ONG/Empresa"
                {...register('name', { required: true })}
                className="peer block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-700 dark:text-gray-300 placeholder-transparent focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0"
                id="Org"
              />
              <label className="absolute top-1/4 left-3 text-gray-500 dark:text-gray-400 text-sm transition-transform duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-1/6 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:translate-y-1 peer-focus:scale-75 peer-focus:text-sky-500 after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium">
                Nombre de la ONG/Empresa
              </label>
              {errors.name && <p className="text-red-500 text-xs mt-1">Este campo es obligatorio.</p>}
            </div> */}
            <div className="mb-4 relative">
              <EmailInput
                value={email}
                onChange={(value) => setValue('email', value)}
                register={register}
                trigger={trigger}
                className="peer block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-700 dark:text-gray-300 placeholder-transparent focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0"
                id="Email"

              />
              <label className="absolute top-1/4 left-3 text-gray-500 dark:text-gray-400 text-sm transition-transform duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-1/6 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:translate-y-1 peer-focus:scale-75 peer-focus:text-sky-500 after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium">
                Email
              </label>
              {errors.email && <p className="text-red-500 text-xs mt-1">El formato del email es incorrecto</p>}
            </div>
            <div className="mb-4 relative">
              <PasswordInput
                value={password}
                onChange={(value) => setValue('password', value)}
                register={register}
                trigger={trigger}
                className="peer block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-700 dark:text-gray-300 placeholder-transparent focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0"
                id="Pasword"

              />
              <label className="absolute top-1/4 left-3 text-gray-500 dark:text-gray-400 text-sm transition-transform duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-1/6 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:translate-y-1 peer-focus:scale-75 peer-focus:text-sky-500 after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium">
                Contraseña
              </label>
              {errors.password && <p className="text-red-500 text-xs mt-1">La contraseña no cumple con los requisitos.</p>}
            </div>
            <div className="mb-4">
              <LocationSelector />
            </div>
            <div className="mb-4">
              <InputDialogField  className="dark:text-white"/>
            </div>
            <div className="mb-4">
              <TermsCheckbox {...register('terms', { required: true })} />
              {errors.terms && <p className="text-red-500 text-xs mt-1">Debes aceptar los términos y condiciones.</p>}
            </div>
            <FormButton text={isSubmitting ? 'Enviando...' : 'Enviar'} />
          </form>
        </div>
      </div>
      {showModal && <ModalLogin onClose={handleModalClose} />}
    </main>
  );
};

export default LogOng;
