import React from 'react'

export const EmpresaCard = () => {
  return (
    <div>
        <div class="grid grid-cols-4 grid-rows-3 gap-0 parent">
            <div class="col-span-4 row-start-1 row-end-2 bg-gray-300 div1">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">Perfil de Usuario</h2>
                    <p>Aquí puedes ver y editar la información del perfil.</p>
                </div>
            </div>
            
            <div class="col-span-2 row-start-2 row-end-4 bg-gray-400 div2">
                Div 2
            </div>
            <div class="col-span-2 row-start-2 row-end-4 bg-gray-500 div3">
                Div 3
            </div>
        </div>
    </div>
  )
}
