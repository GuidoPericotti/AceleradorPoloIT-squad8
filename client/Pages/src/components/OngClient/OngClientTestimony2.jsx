import React from 'react'

export const OngClientTestimony2 = () => {
  return (
    <div className=''>    
        <div className="relative flex">
        <div className=''>    
            <div className="sticky top-1 left-0 h-screen flex items-center pl-5">
            <img 
                src="https://www.semana.com/resizer/v2/FGHWJH5FJJFJRNBPPBFR5ELQWU.jpg?auth=a6b02edbe2205cdbaf78310ec93f298966dc2689b12916c316c91f5a8d6925d5&smart=true&quality=75&width=1280&height=720" 
                alt="Imagen fija" 
                className="w-80 h-auto object-cover pb-60"
            />
            </div>
        {/* Imagen fija a la izquierda */}
        </div>

        {/* Contenido desplazable */}
        <div className="ml-auto w-full max-w-3xl mt-10"> {/* Aquí ajusté el margen superior */}
        <div className="space-y-32">
            <div className="box bg-purple-600 w-full h-64 flex items-center justify-center text-white">
            <h2>Div 1</h2>
            </div>
            <div className="box bg-blue-600 w-full h-64 flex items-center justify-center text-white">
            <h2>Div 2</h2>
            </div>
            <div className="box bg-green-600 w-full h-64 flex items-center justify-center text-white">
            <h2>Div 3</h2>
            </div>
            <div className="box bg-red-600 w-full h-64 flex items-center justify-center text-white">
            <h2>Div 4</h2>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}
