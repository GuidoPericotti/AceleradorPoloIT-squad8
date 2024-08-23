import React from 'react';

const InputField = ({ type, placeholder, ariaLabel }) => {
  return (
    <div className="relative mb-4">
      <input
        type={type}
        className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 placeholder-transparent focus:border-fuchsia-500 focus:outline-none focus:ring-0"
        placeholder=" "
        aria-label={ariaLabel}
      />
      <label
        className="absolute top-1/4 left-3 text-gray-500 text-sm transition-transform duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-1/6 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:translate-y-1 peer-focus:scale-75 peer-focus:text-fuchsia-500"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default InputField;

