import React from 'react'
import { FormButton } from '../Login/LoginComponents/FormButton'
import { IconOngTestimony } from '../OngClient/IconOngTestimony'

export const EmpresasClient = () => {
  return (
    <main className="flex justify-between px-4 py-60 dark:bg-dark-primary bg-[#D8EEE3]">
    <div className="max-w-xl pl-10">
      <div className="pb-4 fade-in-left-1">
        <h2 className="text-6xl font-bold text-left text-gray-800 dark:text-white animate-zoom">
           Empresas
        </h2>
      </div>
    <div className="pb-4 fade-in-left-2 text-center">
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Lorem ipsum dolor sit amet, <br /> 
        consectetur adipisicing elit
      </p>
    </div>
    <a className="fade-in-left-3">
      <FormButton 
        text="¡QUIERO SER PARTE!"
        className="uppercase bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
      />
    </a>
    </div>

    <div className="flex items-start pr-20 animate-zoom2">
      <IconOngTestimony />
    </div>
    </main>
  )
}
