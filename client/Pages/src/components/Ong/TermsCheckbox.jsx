import React from 'react';

const TermsCheckbox = () => {
  return (
    <div className="min-h-6 pl-6.92 mb-0.5 flex items-center">
      <input id="terms" type="checkbox" className="w-4.92 h-5.28 ease-soft text-center rounded-1.4 bg-gradient-to-tl from-gray-900 to-slate-800 bg-none bg-contain border border-solid border-gray-200 cursor-pointer appearance-none transition-all align-top outline-none" />
      <label className="ml-2 font-normal cursor-pointer select-none text-sm leading-normal text-slate-700" htmlFor="terms">
        I agree the  
        <a href="#!" className="font-bold text-slate-700"> Terms and Conditions</a>
      </label>
    </div>
  );
};

export default TermsCheckbox;
