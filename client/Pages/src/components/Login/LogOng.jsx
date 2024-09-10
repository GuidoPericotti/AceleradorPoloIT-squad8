import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import OngName from './LoginComponents/OngName';
import EmailInput from './LoginComponents/EmailInput';
import PasswordInput from './LoginComponents/PasswordInput';
import PhoneInput from './LoginComponents/PhoneInput';
import LocationSelector from './LoginComponents/LocationSelector';
import { TermsCheckbox } from './LoginComponents/TermsCheckbox';
import { FormButton } from './LoginComponents/FormButton';
import { ModalLogin } from './LoginComponents/ModalLogin';
import { CanalesOficialesInput } from './LoginComponents/CanalesOficialesInput';

const LogOng = ({ organizacion }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      name: organizacion // Aquí pasamos el valor de la organización seleccionada
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
    <main>
      <div className="p-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <LocationSelector />
          </div>
          <div className="mb-4 relative">
            {/* Mostrar el nombre de la organización seleccionada */}
            <OngName register={register} value={organizacion} />
          </div>
          {/* Telefono organizacion */}
          <div className="mb-4 relative">
            <PhoneInput />
          </div>
          {/* Email oficial */}
          <div className="mb-4 relative">
            <EmailInput
              value={email}
              onChange={(value) => setValue('email', value)}
              register={register}
              trigger={trigger}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">El formato del email es incorrecto</p>
            )}
          </div>
            {/* Canales de Comunicacion */}
          <div className="mb-4">
            <CanalesOficialesInput />
          </div>
          {/* Contraseña */}
          <div className="mb-4 relative">
            <PasswordInput
              value={password}
              onChange={(value) => setValue('password', value)}
              register={register}
              trigger={trigger}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">La contraseña no cumple con los requisitos.</p>
            )}
          </div>
          {/* Terminos y condiciones */}
          <div className="mb-4">
            <TermsCheckbox {...register('terms', { required: true })} />
            {errors.terms && (
              <p className="text-red-500 text-xs mt-1">
                Debes aceptar los términos y condiciones.
              </p>
            )}
          </div>
          <FormButton type="submit" text={isSubmitting ? 'Enviando...' : 'Enviar'} />
        </form>
        {showModal && (
          <ModalLogin
            onClose={handleModalClose}
            title="¡Felicitaciones!"
            message="¡Tu solicitud de registro se ha enviado con éxito!"
            buttonText="Volver al inicio"
          />
        )}
      </div>
    </main>
  );
};

export default LogOng;
