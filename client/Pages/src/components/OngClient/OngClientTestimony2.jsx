import React from 'react';

export const OngClientTestimony2 = ({ darkMode }) => {
  return (
    <div className={`${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-[#82C7A5] text-black'} py-8 px-4`}>
      <div className="relative flex flex-col admlg:flex-row">
        
        {/* Imagen fija en pantallas grandes */}
        <div className="hidden admlg:block sticky top-1 left-0 h-screen flex items-center pl-5 pt-16">
          <img
            src="https://wkncdn.com/p/uils/_next/static/media/hero-image-work-devs.7f40b256.webp"
            alt="Imagen fija"
            className="w-96 h-auto object-cover pb-60 pt-10"
          />
        </div>

        {/* Contenido principal */}
        <div className="w-full admlg:ml-auto max-w-3xl mt-10">
          <div className="space-y-16 admlg:space-y-32">
            
            {/* Secciones de contenido */}
            {[
              {
                title: "¿Por qué unirte?",
                text: "Únete al Polo IT y accede a una red exclusiva de mentores de grandes empresas tecnológicas, que te guiarán a mejorar el impacto social de tu ONG."
              },
              {
                title: "Impúlsate",
                text: "Conectar con expertos del sector tecnológico a través del Polo IT impulsará la innovación en tu ONG, mejorando procesos y maximizando tu alcance."
              },
              {
                title: "Gran Comunidad",
                text: "Sumarte al Polo IT significa obtener el respaldo de mentores de empresas líderes en tecnología, quienes te ayudarán a desarrollar soluciones digitales para tu ONG."
              },
              {
                title: "Conocimiento",
                text: "El Polo IT te conecta con mentores de empresas tecnológicas, brindando herramientas y conocimientos para transformar digitalmente los proyectos de tu ONG."
              }
            ].map((section, index) => (
              <div
                key={index}
                className={`box w-full h-64 flex flex-col items-center justify-center p-4 rounded-lg shadow-lg transition-colors duration-300 ${
                  darkMode ? 'bg-gray-800 text-gray-300' : 'bg-[#C6E5D6] text-black'
                }`}
              >
                <h2 className="text-2xl admlg:text-4xl font-bold mb-4 text-center">{section.title}</h2>
                <p className="text-base admlg:text-lg text-center">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
