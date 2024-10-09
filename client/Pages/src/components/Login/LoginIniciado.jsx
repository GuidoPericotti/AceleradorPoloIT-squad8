// import React from 'react';
// import { useForm } from 'react-hook-form';
// import SocialButton from './LoginComponents/SocialButton';
// import EmailInput from './LoginComponents/EmailInput';
// import InputField from './LoginComponents/InputField';
// import PasswordInput from './LoginComponents/PasswordInput';
// import { FormButton } from './LoginComponents/FormButton';

// export const LoginIniciado = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setValue,
//     trigger
//   } = useForm({
//     defaultValues: {
//       email: '',
//       password: '',
//       name: ''
//     }
//   });

//   const onSubmit = (data) => {
//     const storedUser = JSON.parse(localStorage.getItem('user'));

//     if (storedUser && storedUser.email === data.email && storedUser.password === data.password) {
//       // User is authenticated
//       alert('Inicio de sesión exitoso');
//       // Redirect or perform additional actions
//     } else {
//       alert('Credenciales incorrectas');
//     }
//   };

//   return (
//     <>
//       <main className="w-full max-w-md px-3 mx-auto pt-20 pb-6 dark:bg-gray-900 dark:text-white">
//         <div className="relative z-0 flex flex-col min-w-0 break-words bg-white dark:bg-gray-800 border-0 shadow-lg rounded-2xl bg-clip-border">
//           <div className="p-6 mb-0 text-center bg-white dark:bg-gray-800 border-b-0 rounded-t-2xl text-lg">
//             <h5 className="text-gray-900 dark:text-white">¡Bienvenidos!</h5>
//           </div>
//           <div className="flex justify-center mb-4">
//             <SocialButton 
//               icon="https://media.licdn.com/dms/image/v2/C4E0BAQF7uvigqKkweg/company-logo_200_200/company-logo_200_200/0/1630570162567/polo_it_de_buenos_aires_logo?e=2147483647&v=beta&t=s4wtzh9g-uMs5Lv1h-dmdvXytqhqCMkh1L314tzUc4Q" 
//               alt="Poloit icon" 
//               className="w-20 h-20 object-contain" // Adjust size as needed
//             />
//           </div>
//           <div className="p-6">
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <div className="mb-4 relative">
//                 <InputField
//                   type="text"
//                   placeholder="Nombre"
//                   ariaLabel="Nombre"
//                   {...register('name', { required: true })}
//                   className="peer block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-700 dark:text-gray-300 placeholder-transparent focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0"
//                   id="Nombre"
//                 />
//                 <label className="absolute top-1/4 left-3 text-gray-500 dark:text-gray-400 text-sm transition-transform duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-1/6 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:translate-y-1 peer-focus:scale-75 peer-focus:text-sky-500 after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium">
//                   Nombre
//                 </label>
//               </div>
//               <div className="mb-4 relative">
//                 <EmailInput
//                   value=""
//                   onChange={(value) => setValue('email', value)}
//                   register={register}
//                   trigger={trigger}
//                   className="peer block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-700 dark:text-gray-300 placeholder-transparent focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0"
//                   id="Email"
//                 />
//                 <label className="absolute top-1/4 left-3 text-gray-500 dark:text-gray-400 text-sm transition-transform duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-1/6 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:translate-y-1 peer-focus:scale-75 peer-focus:text-sky-500 after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium">
//                   Email
//                 </label>
//                 {errors.email && <p className="text-red-500 text-xs mt-1">El formato del email es incorrecto</p>}
//               </div>
//               <div className="mb-4 relative">
//                 <PasswordInput
//                   value=""
//                   onChange={(value) => setValue('password', value)}
//                   register={register}
//                   trigger={trigger}
//                   className="peer block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-700 dark:text-gray-300 placeholder-transparent focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0"
//                   id="Password"
//                 />
//                 <label className="absolute top-1/4 left-3 text-gray-500 dark:text-gray-400 text-sm transition-transform duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-1/6 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:translate-y-1 peer-focus:scale-75 peer-focus:text-sky-500 after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium">
//                   Contraseña
//                 </label>
//                 {errors.password && <p className="text-red-500 text-xs mt-1">La contraseña no cumple con los requisitos.</p>}
//               </div>
//               <FormButton text="Iniciar sesión" onClick={handleSubmit(onSubmit)} />
//             </form>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// import React from 'react';
// import { useForm, FormProvider } from 'react-hook-form';  // Importar FormProvider
// import SocialButton from './LoginComponents/SocialButton';
// import EmailInput from './LoginComponents/EmailInput';
// import InputField from './LoginComponents/InputField';
// import PasswordInput from './LoginComponents/PasswordInput';
// import { FormButton } from './LoginComponents/FormButton';

// export const LoginIniciado = () => {
//   const methods = useForm({
//     defaultValues: {
//       email: '',
//       password: '',
//       name: ''
//     }
//   });

//   const onSubmit = (data) => {
//     const storedUser = JSON.parse(localStorage.getItem('user'));

//     if (storedUser && storedUser.email === data.email && storedUser.password === data.password) {
//       alert('Inicio de sesión exitoso');
//       // Aquí puedes hacer la redirección o alguna otra acción
//     } else {
//       alert('Credenciales incorrectas');
//     }
//   };

//   return (
//     <FormProvider {...methods}>
//       <main className="w-full max-w-md px-3 mx-auto pt-20 pb-6 dark:bg-gray-900 dark:text-white">
//         <div className="relative z-0 flex flex-col min-w-0 break-words bg-white dark:bg-gray-800 border-0 shadow-lg rounded-2xl bg-clip-border">
//           <div className="p-6 mb-0 text-center bg-white dark:bg-gray-800 border-b-0 rounded-t-2xl text-lg">
//             <h5 className="text-gray-900 dark:text-white">¡Bienvenidos!</h5>
//           </div>
//           <div className="flex justify-center mb-4">
//             <SocialButton 
//               icon="https://media.licdn.com/dms/image/v2/C4E0BAQF7uvigqKkweg/company-logo_200_200/company-logo_200_200/0/1630570162567/polo_it_de_buenos_aires_logo?e=2147483647&v=beta&t=s4wtzh9g-uMs5Lv1h-dmdvXytqhqCMkh1L314tzUc4Q" 
//               alt="Poloit icon" 
//               className="w-20 h-20 object-contain"
//             />
//           </div>
//           <div className="p-6">
//             <form onSubmit={methods.handleSubmit(onSubmit)}>
//               <div className="mb-4 relative">
//                 <InputField
//                   type="text"
//                   placeholder="Nombre"
//                   ariaLabel="Nombre"
//                   {...methods.register('name', { required: true })}
//                   className="peer block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-700 dark:text-gray-300 placeholder-transparent focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0"
//                   id="Nombre"
//                 />
//                 <label className="absolute top-1/4 left-3 text-gray-500 dark:text-gray-400 text-sm transition-transform duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-1/6 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:translate-y-1 peer-focus:scale-75 peer-focus:text-sky-500 after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium">
//                   Nombre
//                 </label>
//               </div>
//               <div className="mb-4 relative">
//                 <EmailInput
//                   value=""
//                   onChange={(value) => methods.setValue('email', value)}
//                   register={methods.register}
//                   trigger={methods.trigger}
//                   className="peer block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-700 dark:text-gray-300 placeholder-transparent focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0"
//                   id="Email"
//                 />
//                 <label className="absolute top-1/4 left-3 text-gray-500 dark:text-gray-400 text-sm transition-transform duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-1/6 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:translate-y-1 peer-focus:scale-75 peer-focus:text-sky-500 after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium">
//                   Email
//                 </label>
//                 {methods.formState.errors.email && <p className="text-red-500 text-xs mt-1">El formato del email es incorrecto</p>}
//               </div>
//               <div className="mb-4 relative">
//                 <PasswordInput
//                   value=""
//                   onChange={(value) => methods.setValue('password', value)}
//                   register={methods.register}
//                   trigger={methods.trigger}
//                   className="peer block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-700 dark:text-gray-300 placeholder-transparent focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0"
//                   id="Password"
//                 />
//                 <label className="absolute top-1/4 left-3 text-gray-500 dark:text-gray-400 text-sm transition-transform duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-1/6 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:translate-y-1 peer-focus:scale-75 peer-focus:text-sky-500 after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium">
//                   Contraseña
//                 </label>
//                 {methods.formState.errors.password && <p className="text-red-500 text-xs mt-1">La contraseña no cumple con los requisitos.</p>}
//               </div>
//               <FormButton text="Iniciar sesión" onClick={methods.handleSubmit(onSubmit)} />
//             </form>
//           </div>
//         </div>
//       </main>
//     </FormProvider>
//   );
// };

// LoginIniciado.jsx
// import React from 'react';
// import { useForm, FormProvider } from 'react-hook-form';
// import SocialButton from './LoginComponents/SocialButton';
// import EmailInput from './LoginComponents/EmailInput';
// import InputField from './LoginComponents/InputField';
// import PasswordInput from './LoginComponents/PasswordInput';
// import {FormButton} from './LoginComponents/FormButton';
// import { useAuth } from '../Context/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import { TermsCheckbox } from './LoginComponents/TermsCheckbox';

// const LoginIniciado = () => {
//   const methods = useForm({
//     defaultValues: {
//       email: '',
//       password: '',
//       name: ''
//     }
//   });

//   const {
//     handleSubmit,
//     formState: { errors, isSubmitting },
//     setValue,
//     trigger
//   } = methods;

//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     const storedUser = JSON.parse(localStorage.getItem('user'));

//     if (storedUser && storedUser.email === data.email && storedUser.password === data.password) {
//       // Autenticar al usuario en el contexto
//       login(storedUser);  // Asegúrate de que storedUser tiene la propiedad 'role'

//       alert('Inicio de sesión exitoso');
//       // Redirigir según el rol
//       if (storedUser.role === 'ONG') {
//         navigate('/ong-client');
//       } else if (storedUser.role === 'Admin') {
//         navigate('/admin');
//       } else if (storedUser.role === 'Empresa') {
//         navigate('/empresa-side');
//       } else {
//         navigate('/');
//       }
//     } else {
//       alert('Credenciales incorrectas');
//     }
//   };

//   return (
//     <FormProvider {...methods}>
//       <main className="w-full max-w-md px-3 mx-auto pt-20 pb-6 dark:bg-gray-900 dark:text-white">
//         <div className="relative z-0 flex flex-col min-w-0 break-words bg-white dark:bg-gray-800 border-0 shadow-lg rounded-2xl bg-clip-border">
//           <div className="p-6 mb-0 text-center bg-white dark:bg-gray-800 border-b-0 rounded-t-2xl text-lg">
//             <h5 className="text-gray-900 dark:text-white">¡Bienvenidos!</h5>
//           </div>
//           <div className="flex justify-center mb-4">
//             <SocialButton 
//               icon="https://media.licdn.com/dms/image/v2/C4E0BAQF7uvigqKkweg/company-logo_200_200/company-logo_200_200/0/1630570162567/polo_it_de_buenos_aires_logo?e=2147483647&v=beta&t=s4wtzh9g-uMs5Lv1h-dmdvXytqhqCMkh1L314tzUc4Q" 
//               alt="Poloit icon" 
//               className="w-20 h-20 object-contain"
//             />
//           </div>
//           <div className="p-6">
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <div className="mb-4 relative">
//                 <InputField
//                   type="text"
//                   placeholder="Nombre"
//                   ariaLabel="Nombre"
//                   {...methods.register('name', { required: true })}
//                   className="peer block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-700 dark:text-gray-300 placeholder-transparent focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0"
//                   id="Nombre"
//                 />
//                 <label className="absolute top-1/4 left-3 text-gray-500 dark:text-gray-400 text-sm transition-transform duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-1/6 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:translate-y-1 peer-focus:scale-75 peer-focus:text-sky-500 after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium">
//                   Nombre
//                 </label>
//               </div>
//               <div className="mb-4 relative">
//                 <EmailInput
//                   onChange={(value) => methods.setValue('email', value)}
//                   register={methods.register}
//                   trigger={trigger}
//                   className="peer block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-700 dark:text-gray-300 placeholder-transparent focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0"
//                   id="Email"
//                 />
//                 <label className="absolute top-1/4 left-3 text-gray-500 dark:text-gray-400 text-sm transition-transform duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-1/6 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:translate-y-1 peer-focus:scale-75 peer-focus:text-sky-500 after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium">
//                   Email
//                 </label>
//                 {errors.email && (
//                   <p className="text-red-500 text-xs mt-1">El formato del email es incorrecto</p>
//                 )}
//               </div>
//               <div className="mb-4 relative">
//                 <PasswordInput />
//                 {errors.password && (
//                   <p className="text-red-500 text-xs mt-1">La contraseña no cumple con los requisitos.</p>
//                 )}
//               </div>
//               <div className="mb-4 relative">
//                 <PasswordInput />
//                 {errors.confirmPassword && (
//                   <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
//                 )}
//               </div>
//               <div className="mb-4">
//                 <TermsCheckbox {...methods.register('terms', { required: true })} />
//                 {errors.terms && (
//                   <p className="text-red-500 text-xs mt-1">Debes aceptar los términos y condiciones.</p>
//                 )}
//               </div>

//               {/* Botón de Envío */}
//               <FormButton
//                 text={isSubmitting ? 'Enviando...' : 'Enviar'}
//                 isSubmitting={isSubmitting}
//                 isDisabled={!isValid || isSubmitting || password !== confirmPassword}
//               />
//             </form>

//             {/* Modal de Confirmación */}
//             {showModal && (
//               <ModalLogin
//                 onClose={handleModalClose}
//                 title="¡Felicitaciones!"
//                 message="¡Tu solicitud de registro se ha enviado con éxito!"
//                 buttonText="Volver al inicio"
//               />
//             )}
//           </div>
//         </div>
//       </main>
//     </FormProvider>
//   );
// };

// export default LoginIniciado;

// ./src/components/Login/LoginIniciado.jsx

import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import SocialButton from './LoginComponents/SocialButton';
import EmailInput from './LoginComponents/EmailInput';
import InputField from './LoginComponents/InputField';
import PasswordInput from './LoginComponents/PasswordInput';
import ConfirmPasswordInput from './LoginComponents/ConfirmPasswordInput'; // Nuevo componente
import {FormButton} from './LoginComponents/FormButton'; // Importación por defecto
import { useAuth } from '../Context/AuthContext'; // Asegúrate de que la ruta es correcta
import { useNavigate } from 'react-router-dom';
import { TermsCheckbox } from './LoginComponents/TermsCheckbox';
import {ModalLogin} from './LoginComponents/ModalLogin'; // Asegúrate de importar ModalLogin correctamente

const LoginIniciado = () => {
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
    formState: { errors, isSubmitting, isValid }, // Desestructurar isValid
    setValue,
    trigger
  } = methods;

  const { login } = useAuth();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const onSubmit = (data) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === data.email && storedUser.password === data.password) {
      // Autenticar al usuario en el contexto
      login(storedUser);  // Asegúrate de que storedUser tiene la propiedad 'role'

      alert('Inicio de sesión exitoso');
      // Redirigir según el rol
      if (storedUser.role === 'ONG') {
        navigate('/ong-client');
      } else if (storedUser.role === 'Admin') {
        navigate('/admin');
      } else if (storedUser.role === 'Empresa') {
        navigate('/empresa-side');
      } else {
        navigate('/');
      }
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate('/'); // Redirigir a la página principal
  };

  return (
    <FormProvider {...methods}>
      <main className="w-full max-w-md px-3 mx-auto pt-20 pb-6 dark:bg-gray-900 dark:text-white">
        <div className="relative z-0 flex flex-col min-w-0 break-words bg-white dark:bg-gray-800 border-0 shadow-lg rounded-2xl bg-clip-border">
          <div className="p-6 mb-0 text-center bg-white dark:bg-gray-800 border-b-0 rounded-t-2xl text-lg">
            <h5 className="text-gray-900 dark:text-white">¡Bienvenidos!</h5>
          </div>
          <div className="flex justify-center mb-4">
            <SocialButton 
              icon="https://media.licdn.com/dms/image/v2/C4E0BAQF7uvigqKkweg/company-logo_200_200/company-logo_200_200/0/1630570162567/polo_it_de_buenos_aires_logo?e=2147483647&v=beta&t=s4wtzh9g-uMs5Lv1h-dmdvXytqhqCMkh1L314tzUc4Q" 
              alt="Poloit icon" 
              className="w-20 h-20 object-contain"
            />
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 relative">
                <InputField
                  type="text"
                  placeholder="Nombre"
                  ariaLabel="Nombre"
                  {...methods.register('name', { required: 'El nombre es requerido' })}
                  className="peer block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-700 dark:text-gray-300 placeholder-transparent focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0"
                  id="Nombre"
                />
                <label className="absolute top-1/4 left-3 text-gray-500 dark:text-gray-400 text-sm transition-transform duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-1/6 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:translate-y-1 peer-focus:scale-75 peer-focus:text-sky-500 after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium">
                  Nombre
                </label>
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>
              <div className="mb-4 relative">
                <EmailInput
                  onChange={(value) => methods.setValue('email', value)}
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
              <div className="mb-4 relative">
                <PasswordInput />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">La contraseña no cumple con los requisitos.</p>
                )}
              </div>
              <div className="mb-4 relative">
                <ConfirmPasswordInput />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
                )}
              </div>
              <div className="mb-4">
                <TermsCheckbox {...methods.register('terms', { required: 'Debes aceptar los términos y condiciones' })} />
                {errors.terms && (
                  <p className="text-red-500 text-xs mt-1">{errors.terms.message}</p>
                )}
              </div>

              {/* Botón de Envío */}
              <FormButton
                text={isSubmitting ? 'Enviando...' : 'Enviar'}
                isSubmitting={isSubmitting}
                isDisabled={!isValid || isSubmitting || methods.watch('password') !== methods.watch('confirmPassword')}
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
        </div>
      </main>
    </FormProvider>
  );
};

export default LoginIniciado;
