import React from 'react';
import forge from '../../assets/forge.png'
export const LogoCompanySupport = ({ Company, darkMode }) => {
  return (
    <div
      className={`flex flex-col items-center p-4 pt-32 pb-10  dark:text-white ${darkMode ? 'bg-gray-900 text-white' : 'bg-[#F3F9F6] text-black'}`}
    >
      <h3 className="text-lg font-bold text-center mb-10">{Company}</h3>
      <div className="flex flex-wrap justify-center gap-12">
        {[
          { href: 'http://www.fgd.org.ar/', src: 'https://lh5.googleusercontent.com/proxy/s-tyCWceFn1ZdTZPqgdAIcaTIYTKyDn5xnHw7WRXFqa9mZMRU74UuqyfKj67eTn1a5E0yb5OZndmx23oIXSONLd2hzb3GFx4EGLJ1RnOL2g01yhiH7en0w', alt: 'Fundacion gestion y desarrollo Logo' },
          { href: 'https://www.soysilvertech.org/', src: 'https://citlafalda.gob.ar/wp-content/uploads/2024/06/logo-silvertech-1.png', alt: 'SilverTech Logo' },
          { href: 'https://fondationforge.org/', src:forge, alt: 'Fundacion Forge Logo' },
          { href: 'https://fpintegrar.org/', src: 'https://ampliandovoces.consejo.org.ar/wp-content/uploads/freshizer/c3f8cdcc071f62e40160a519c0403ad4_Logo-integrar-Naranja-nuevo-1381-c-90.png', alt: 'Fundacion integrar Logo' },
          { href: 'https://fundacionempujar.org/', src: 'https://fundacionempujar.org/wp-content/uploads/2022/07/Logo-fundacion-EMPUJAR.png', alt: 'Fundacion Empujar Logo' },

        ].map((logo, index) => (
          <a
            key={index}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 ease-in-out hover:scale-95 hover:opacity-75"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-36 h-36 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
            />
          </a>
        ))}
      </div>
    </div>
  );
};