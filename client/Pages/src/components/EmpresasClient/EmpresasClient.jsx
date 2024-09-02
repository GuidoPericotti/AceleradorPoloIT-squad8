import React from 'react'
import { FormButton } from '../Login/FormButton'
import { IconOngTestimony } from '../OngClient/IconOngTestimony'

export const EmpresasClient = () => {
  return (
    <main className="flex justify-between px-4 py-60">
      <div className="max-w-xl">
        <div className="pb-4 fade-in-left-1">
          <h2 className="text-4xl font-bold text-left text-gray-800 dark:text-white animate-zoom">
            Impulsar tu negocio con <br />
            talento de calidad ahora es simple
          </h2>
        </div>
        <div className="pb-4 fade-in-left-2">
          <p className="text-sm text-left text-gray-600 dark:text-gray-300">
            Polo IT te ayuda a encontrar, contratar y gestionar los mejores talentos de la región.
          </p>
        </div>
        <a className="fade-in-left-3">
          <FormButton 
            text="Empezá tu camino"
            className="bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          />
        </a>
      </div>
      <div className="flex items-start pr-20 animate-zoom2">
        <IconOngTestimony />
      </div>
    </main>
  )
}
