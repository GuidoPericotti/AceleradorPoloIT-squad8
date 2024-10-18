
// import React from 'react';
// import { useForm, FormProvider } from 'react-hook-form';

// export const FormButton = ({ text, isSubmitting }) => {
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
//       <div className="text-center" onSubmit={methods.handleSubmit(onSubmit)}>
//         <button
//           type="submit"
//           className="inline-block w-full px-16 py-3.5 mt-6 mb-2 font-bold text-center text-white align-middle transition-all ease-in bg-150 bg-x-25 border-0 rounded-lg cursor-pointer text-sm leading-normal tracking-tight-soft shadow-soft-md bg-gradient-to-tl from-gray-900 to-slate-800 hover:scale-102 hover:shadow-soft-xs active:opacity-85"
//           disabled={isSubmitting}
//           text="Enviar" 
//           isSubmitting={methods.formState.isSubmitting} 
//         >
//           {isSubmitting ? "Enviando..." : text}
          
//         </button>
//       </div>  
//     </FormProvider>
//   );
// };


// FormButton.jsx
// import React from 'react';

// export const FormButton = ({ text, isSubmitting }) => {
//   return (
//     <button
//       type="submit"  // Asegúrate de que sea type="submit"
//       disabled={isSubmitting}  // Deshabilita el botón si está enviando
//       className={`btn ${isSubmitting ? 'btn-disabled' : 'btn-primary'}`}
//     >
//       {isSubmitting ? 'Enviando...' : text}  {/* Cambia el texto si está enviando */}
//     </button>
//   );
// };


// ./src/components/Login/LoginComponents/FormButton.jsx

// import React from 'react';

// export const FormButton = ({ text, isSubmitting, isDisabled }) => {
//   return (
//     <button
//       type="submit"
//       disabled={isDisabled || isSubmitting}
//       className={`btn ${isSubmitting ? 'btn-disabled' : 'btn-primary'}`}
//     >
//       {isSubmitting ? 'Enviando...' : text}
//     </button>
//   );
// };

// ./src/components/Login/LoginComponents/FormButton.jsx

import React from 'react';

 export const FormButton = ({ text, isSubmitting, isDisabled }) => {
  return (
    <button
    
      type="submit"
      disabled={isDisabled || isSubmitting}
      className={`btn inline-block w-full px-16 py-3.5 mt-6 mb-2 font-bold text-center text-white align-middle transition-all ease-in bg-150 bg-x-25 border-0 rounded-lg cursor-pointer text-sm leading-normal tracking-tight-soft shadow-soft-md bg-gradient-to-tl from-gray-900 to-slate-800 hover:scale-102 hover:shadow-soft-xs active:opacity-85 ${isSubmitting ? 'btn-disabled' : 'btn-primary'}`}
    >
      {isSubmitting ? 'Enviando...' : text}
    </button>
  );
};

// export default FormButton;

