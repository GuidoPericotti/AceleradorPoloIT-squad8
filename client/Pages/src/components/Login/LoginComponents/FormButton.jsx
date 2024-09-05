
import React from 'react';

export const FormButton = ({ text, isSubmitting }) => {
  return (
    <div className="text-center">
      <button
        type="submit"
        className="inline-block w-full px-16 py-3.5 mt-6 mb-2 font-bold text-center text-white align-middle transition-all ease-in bg-150 bg-x-25 border-0 rounded-lg cursor-pointer text-sm leading-normal tracking-tight-soft shadow-soft-md bg-gradient-to-tl from-gray-900 to-slate-800 hover:scale-102 hover:shadow-soft-xs active:opacity-85"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : text}
      </button>
    </div>  
  );
};

