import React from 'react';

const InputField = ({ label, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}</label>
      <input
        type="text"
        className="mt-1 p-2 w-full border rounded-lg"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;