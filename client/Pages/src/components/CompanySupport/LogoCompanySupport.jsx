import React from 'react';

export const LogoCompanySupport = ({ Company, darkMode }) => {
  return (
    <div
      className={`flex flex-col items-center p-4 pt-32 pb-10 dark:bg-dark-primary dark:text-white ${darkMode ? 'bg-gray-800 text-white' : 'bg-[#F3F9F6] text-black'}`}
    >
      <h3 className="text-lg font-bold text-center mb-10">{Company}</h3>
      <div className="flex flex-wrap justify-center gap-12">
        {[
          { href: 'http://www.fgd.org.ar/', src: 'http://www.fgd.org.ar/wp-content/uploads/2019/03/logo-fgd.png', alt: 'Fundacion gestion y desarrollo Logo' },
          { href: 'https://www.soysilvertech.org/', src: 'https://static.wixstatic.com/media/625bcd_c63599412e24454591eb9a4b3a862121~mv2.png/v1/crop/x_121,y_880,w_7758,h_2741/fill/w_171,h_45,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/STECH-LOGOBLACK%20(1).png', alt: 'SilverTech Logo' },
          { href: 'https://fondationforge.org/', src: 'https://fondationforge.org/assets/img/Fundacion-Forge-Logo.svg', alt: 'Fundacion Forge Logo' },
          { href: 'https://fpintegrar.org/', src: 'https://fpintegrar.org/wp-content/uploads/2022/07/cropped-Logo-integrar-01-e1658586043646.png', alt: 'Fundacion integrar Logo' },
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
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
            />
          </a>
        ))}
      </div>
    </div>
  );
};
