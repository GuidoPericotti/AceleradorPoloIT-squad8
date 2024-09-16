// import React from 'react';
// import { useForm, FormProvider } from 'react-hook-form';
// import ConfirmPasswordInput from "./ConfirmPasswordInput";
// import PasswordInput from "./PasswordInput";

// const PasswordForm = () => {
//   const methods = useForm();

//   return (
//     <FormProvider {...methods}>
//       <div onSubmit={methods.handleSubmit((data) => console.log(data))}>
//         <PasswordInput />
//         <ConfirmPasswordInput />
//       </div>
//     </FormProvider>
//   );
// };

// export default PasswordForm;
// import React from 'react';
// import { useForm, FormProvider } from 'react-hook-form';
// import ConfirmPasswordInput from "./ConfirmPasswordInput";
// import PasswordInput from "./PasswordInput";
// import { FormButton } from "./FormButton";

// const PasswordForm = () => {
//   const methods = useForm();

//   const onSubmit = async (data) => {
//     if (data.password === data.confirmPassword) {
//       console.log("Formulario enviado:", data);
//       // Aquí puedes agregar la lógica para enviar los datos al servidor
//       // Por ejemplo, una llamada API que podría tomar tiempo
//       await new Promise(resolve => setTimeout(resolve, 2000)); // Simulación de envío
//     } else {
//       console.log("Las contraseñas no coinciden");
//       methods.setError('confirmPassword', {
//         type: 'manual',
//         message: 'Las contraseñas no coinciden'
//       });
//     }
//   };

//   return (
//     <FormProvider {...methods}>
//       <form onSubmit={methods.handleSubmit(onSubmit)}>
//         <PasswordInput />
//         <ConfirmPasswordInput />
//         <FormButton 
//           text="Enviar" 
//           isSubmitting={methods.formState.isSubmitting} 
//         />
//       </form>
//     </FormProvider>
//   );
// };

// export default PasswordForm;
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
      <ConfirmPasswordInput />
      {/* {!passwordsMatch && password && confirmPassword && (
        <p className="text-red-500 text-xs mt-1">Las contraseñas no coinciden.</p>
      )} */}
    </div>
  );
};

export default PasswordForm;