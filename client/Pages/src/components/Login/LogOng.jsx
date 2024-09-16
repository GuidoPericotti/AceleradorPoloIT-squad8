import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import OngName from './LoginComponents/OngName';
import EmailInput from './LoginComponents/EmailInput';
import PhoneInput from './LoginComponents/PhoneInput';
import LocationSelector from './LoginComponents/LocationSelector';
import { TermsCheckbox } from './LoginComponents/TermsCheckbox';
import { FormButton } from './LoginComponents/FormButton';
import { ModalLogin } from './LoginComponents/ModalLogin';
import { CanalesOficialesInput } from './LoginComponents/CanalesOficialesInput';
import PasswordForm from './LoginComponents/PasswordForm';

const LogOng = ({ organizacion }) => {
  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: organizacion // Pasamos el valor de la organización seleccionada
    }
  });

  const {
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,
    trigger
  } = methods;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  const onSubmit = async (data) => {
    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      methods.setError('confirmPassword', {
        type: 'manual',
        message: 'Las contraseñas no coinciden'
      });
      return;
    }

    setIsSubmitting(true);

    // Simular el envío del formulario (reemplazar con la llamada real a la API)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Guardar los datos del usuario en el localStorage
    localStorage.setItem('user', JSON.stringify(data));

    // Mostrar el modal después del envío simulado
    setShowModal(true);
    setIsSubmitting(false);
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate('/home');
  };

  return (
    <FormProvider {...methods}>
      <main>
        <div className="p-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Nombre de la Organización */}
            <div className="mb-4 relative">
              <OngName register={methods.register} value={organizacion} />
            </div>

            {/* Selector de ubicación */}
            <div className="mb-4">
              <LocationSelector />
            </div>

            {/* Teléfono */}
            <div className="mb-4 relative">
              <PhoneInput />
            </div>

            {/* Email */}
            <div className="mb-4 relative">
              <EmailInput
                value={methods.watch('email')}
                onChange={(value) => setValue('email', value)}
                register={methods.register}
                trigger={trigger}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">El formato del email es incorrecto</p>
              )}
            </div>

            {/* Canales de Comunicación */}
            <div className="mb-4">
              <CanalesOficialesInput />
            </div>

            {/* Contraseña y Confirmar Contraseña */}
            <div className="mb-4 relative">
              <PasswordForm />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">La contraseña no cumple con los requisitos.</p>
              )}
              {/* {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
              )} */}
            </div>

            {/* Términos y condiciones */}
            <div className="mb-4">
              <TermsCheckbox {...methods.register('terms', { required: true })} />
              {errors.terms && (
                <p className="text-red-500 text-xs mt-1">Debes aceptar los términos y condiciones.</p>
              )}
            </div>

            {/* Botón de Envío */}
            <FormButton
              type="submit"
              text={isSubmitting ? 'Enviando...' : 'Enviar'}
              disabled={!isValid || isSubmitting || password !== confirmPassword}
            />
          </form>

          {/* Modal de Confirmación */}
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
    </FormProvider>
  );
};

export default LogOng;
