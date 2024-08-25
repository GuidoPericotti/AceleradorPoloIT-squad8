import React from 'react';
import SocialButton from './SocialButton';
import InputField from './InputField';
import FormButton from './FormButton';
import TermsCheckbox from './TermsCheckBox';
import { InputDialogField } from './InputDialogField';
import LocationSelector from './LocationSelector';

export const LogOng = ({ showNameField = true }) => {
  return (
    <main className="w-full max-w-md px-3 mx-auto pt-18 pb-6 dark:bg-gray-900">
      <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-lg rounded-2xl bg-clip-border">
        <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl text-lg">
          <h5>¡Bienvenidos!</h5>
        </div>
        <div className="flex flex-row flex-wrap px-3 -mx-3 sm:px-6 xl:px-12 justify-center">
          <SocialButton icon="https://media.licdn.com/dms/image/v2/C4E0BAQF7uvigqKkweg/company-logo_200_200/company-logo_200_200/0/1630570162567/polo_it_de_buenos_aires_logo?e=2147483647&v=beta&t=s4wtzh9g-uMs5Lv1h-dmdvXytqhqCMkh1L314tzUc4Q" alt="Poloit icon" />
        </div>

        <div className="flex-auto p-6">
          <form role="form text-left">
            {showNameField && (
              <>
                <InputField type="text" placeholder="Nombre" ariaLabel="Nombre" />
                <InputField type="text" placeholder="Apellido" ariaLabel="Apellido" />
              </>
            )}

            {showNameField && (
              <>
                <div className="mb-4">
                  <LocationSelector className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 placeholder-transparent focus:border-fuchsia-500 focus:outline-none focus:ring-0" />
                </div>
              </>
            )}

            <InputField type="email" placeholder="Email" ariaLabel="Email" />
            <InputField type="password" placeholder="Password" ariaLabel="Password" />
            
            {showNameField && 
            <InputDialogField type="text" placeholder="Name" ariaLabel="Name" />
            }
            
            <TermsCheckbox />
            <FormButton text="Sign up" />
          </form>
        </div>
      </div>
    </main>
  );
};
