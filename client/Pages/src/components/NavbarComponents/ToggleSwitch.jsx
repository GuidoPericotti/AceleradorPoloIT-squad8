import React from 'react'

export const ToggleSwitch = ({ isChecked, onChange }) => {
  return (
    <>
      <label className="inline-flex items-center cursor-pointer ">
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={onChange} 
          className="sr-only peer"
          
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:bg-dark-primary rounded-full peer dark:bg-dark-primary peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#C6E5D6] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-dark-primary peer-checked:bg-blue-600"></div>
      </label>
    </>
  )
}
