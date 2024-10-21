import React, { useState } from 'react';
  import { useForm, FormProvider } from 'react-hook-form';
  import { useNavigate } from 'react-router-dom';
  import OngName from './LoginComponents/OngName';
  import EmailInput from './LoginComponents/EmailInput';
  import PhoneInput from './LoginComponents/PhoneInput';
  import LocationSelector from './LoginComponents/LocationSelector';
  import { TermsCheckbox } from './LoginComponents/TermsCheckbox';
 import {FormButton} from './LoginComponents/FormButton'; // Importación por defecto
  import { ModalLogin } from './LoginComponents/ModalLogin';
  import { CanalesOficialesInput } from './LoginComponents/CanalesOficialesInput';
  import PasswordForm from './LoginComponents/PasswordForm';
 import { useAuth } from '../Context/AuthContext'; // Ajusta la ruta si es necesario

  const LogOng = ({ organizacion }) => {
    const methods = useForm({
      defaultValues: {
        email: '',
        password: '',
        confirmPassword: '',
       name: organizacion // Pasamos el valor de la organización seleccionada
      }
    });
    const organizationData = {
      name: organizacion || 'Nombre de la ONG',
      location: 'Ciudad, País',
      phone: '123456789',
     role: 'ONG' // O 'Empresa'
    };

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
    const { login } = useAuth();

    const password = watch('password');
    const confirmPassword = watch('confirmPassword');

    const onSubmit = async (data) => {
//     // Validar que las contraseñas coincidan
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

     // Autenticar al usuario en el contexto
      login({
        email: data.email,
        password: data.password,
        name: data.name,
       role: 'ONG' // Asignar el rol correspondiente
      });

     // Mostrar el modal después del envío simulado
      setShowModal(true);
      setIsSubmitting(false);
    };

    const handleModalClose = () => {
     setShowModal(false);
     navigate('/ong-client'); // Redirigir a la página protegida
    };

    return (
      <FormProvider {...methods}>
        <main className='bg-[#82C7A5]'>
          <div className="p-2">
            <form onSubmit={handleSubmit(onSubmit)}>
             {/* Nombre de la Organización */}
              <div className="mb-4 relative">
                <OngName register={methods.register} value={organizacion} />
              </div>

             {/* Selector de ubicación */}
              <div className="mb-4">
                <p>País de origen</p>
                <LocationSelector />
              </div>

             {/* Teléfono */}
              <div className="mb-4 relative">
              <p>Teléfono de contacto</p>
                <PhoneInput />
              </div>

             {/* Email */}
              <div className="mb-4 relative">
              <p>Correo electrónico oficial</p>
                <EmailInput
                  onChange={(value) => setValue('email', value)}
                  register={methods.register}
                  trigger={trigger}
                  className="peer block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-700 dark:text-gray-300 placeholder-transparent focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0"
                  id="Email"
                />
                <label className="absolute top-1/4 left-3 text-gray-500 dark:text-gray-400 text-sm transition-transform duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-1/6 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:translate-y-1 peer-focus:scale-75 peer-focus:text-sky-500 after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium">
                  Email
                </label>
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
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
                )}
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
                text={isSubmitting ? 'Enviando...' : 'Enviar'}
                isSubmitting={isSubmitting}
                isDisabled={!isValid || isSubmitting || password !== confirmPassword}
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
