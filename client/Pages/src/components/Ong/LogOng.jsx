import React from 'react';
import SocialButton from './SocialButton';
import InputField from './InputField';
import FormButton from './FormButton';
import TermsCheckbox from './TermsCheckBox';

export const LogOng = () => {
  return (
    <main className="w-full max-w-md px-3 mx-auto pt-24 pb-6 dark:bg-gray-900">
      <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-lg rounded-2xl bg-clip-border">
        <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl text-lg">
          <h5>Register with</h5>
        </div>
        <div className="flex flex-row flex-wrap px-3 -mx-3 sm:px-6 xl:px-12 justify-center">
        <SocialButton icon="https://logo.clearbit.com/facebook.com" alt="Facebook icon" />
        <SocialButton icon="https://logo.clearbit.com/apple.com" alt="Apple icon" />
        <SocialButton icon="https://logo.clearbit.com/google.com" alt="Google icon" />
        <SocialButton icon="https://logo.clearbit.com/linkedin.com" alt="LinkedIn icon" />
        </div>

        <div className="relative mt-0 mb-0 text-center">
          <p className="px-6 mb-0 text-sm font-semibold leading-normal bg-white text-slate-500">or</p>
        </div>
        <div className="flex-auto p-6">
          <form role="form text-left">
            <InputField type="text" placeholder="Name" ariaLabel="Name" />
            <InputField type="email" placeholder="Email" ariaLabel="Email" />
            <InputField type="password" placeholder="Password" ariaLabel="Password" />
            <TermsCheckbox />
            <FormButton text="Sign up" />
          </form>
        </div>
        <div className="border-black/12.5 rounded-b-2xl p-6 pb-0 text-center">
          <p className="mx-auto mb-6 text-sm leading-normal">Already have an account? <a href="../pages/sign-in.html" className="font-bold text-slate-700">Sign in</a></p>
        </div>
      </div>
    </main>
  );
};


