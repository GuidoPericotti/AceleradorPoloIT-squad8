import React from 'react'

export const OngClientTestimony2 = ({ darkMode }) => {
  return (
    <div className={darkMode ? 'bg-gray-900 text-gray-300' : 'bg-[#82C7A5] text-black'}>    
        <div className="relative flex">
        <div className=''>    
            <div className="sticky top-1 left-0 h-screen flex items-center pl-5 pt-16">
            <img 
                src="https://wkncdn.com/p/uils/_next/static/media/hero-image-work-devs.7f40b256.webp" 
                alt="Imagen fija" 
                className="w-96 h-auto object-cover pb-60 pt-10"
            />
            </div>
        </div>

        <div className="ml-auto w-full max-w-3xl mt-10">
        <div className="space-y-32">
            <div className={`box w-full h-64 flex flex-col items-center justify-center p-4 rounded-lg shadow-lg transition-colors duration-300 ${
              darkMode ? 'bg-gray-800 text-gray-300' : 'bg-[#C6E5D6] text-black'}`}>
                <h2 className="text-4xl font-bold mb-4 text-center">¿Por qué unirtenos?</h2>
                <p className="text-lg text-center">
                  Únete al Polo IT y accede a una red exclusiva de mentores de grandes empresas tecnológicas, que te guiarán a mejorar el impacto social de tu ONG.
                </p>
            </div>

            <div className={`box w-full h-64 flex flex-col items-center justify-center p-4 rounded-lg shadow-lg transition-colors duration-300 ${
              darkMode ? 'bg-gray-800 text-gray-300' : 'bg-[#C6E5D6] text-black'}`}>
                <h2 className="text-4xl font-bold mb-4 text-center">Impulsate</h2>
                <p className="text-lg text-center">
                  Conectar con expertos del sector tecnológico a través del Polo IT impulsará la innovación en tu ONG, mejorando procesos y maximizando tu alcance.
                </p>
            </div>

            <div className={`box w-full h-64 flex flex-col items-center justify-center p-4 rounded-lg shadow-lg transition-colors duration-300 ${
              darkMode ? 'bg-gray-800 text-gray-300' : 'bg-[#C6E5D6] text-black'}`}>
                <h2 className="text-4xl font-bold mb-4 text-center">Gran Comunidad</h2>
                <p className="text-lg text-center">
                  Sumarte al Polo IT significa obtener el respaldo de mentores de empresas líderes en tecnología, quienes te ayudarán a desarrollar soluciones digitales para tu ONG.
                </p>
            </div>

            <div className={`box w-full h-64 flex flex-col items-center justify-center p-4 rounded-lg shadow-lg transition-colors duration-300 ${
              darkMode ? 'bg-gray-800 text-gray-300' : 'bg-[#C6E5D6] text-black'}`}>
                <h2 className="text-4xl font-bold mb-4 text-center">Conocimiento</h2>
                <p className="text-lg text-center">
                  El Polo IT te conecta con mentores de empresas tecnológicas, brindando herramientas y conocimientos para transformar digitalmente los proyectos de tu ONG.
                </p>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}
