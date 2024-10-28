import React from 'react';

const DateInputField = ({ label, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}</label>
      <input
        type="text"
        className="mt-1 p-2 w-28 border rounded-lg"
        value={value}
        onChange={onChange}
        placeholder="aaaa/mm/dd"
        pattern="\d{4}/\d{2}/\d{2}" // validación de formato
        maxLength="10" // limita la longitud de la cadena a 10 caracteres
      />
    </div>
  );
};

export default DateInputField;
