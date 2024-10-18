import React from 'react';
import InputField from './InputField';

const PhoneInput = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      {/* <p className="block font-medium text-black dark:text-gray-400 text-sm mb-1">
        Teléfono de contacto
      </p> */}

      <InputField
        className="text-[#82C7A5] block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 dark:text-gray-300 focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0"
        type="tel"
        ariaLabel="Número de teléfono"
        placeholder="Ingresar teléfono"
        value={value}
        onChange={onChange}
        pattern="[0-9]{10}"
        maxLength="10"
        id="telefono_org"
      />
    </div>
  );
};

export default PhoneInput;
