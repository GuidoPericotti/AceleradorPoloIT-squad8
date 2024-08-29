import React from 'react';

export const LogoCompanySupport = ({ Company, darkMode }) => {
  return (
    <div
      className={`flex flex-col items-center p-4 pt-32 pb-10 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
    >
      <h3 className="text-lg font-bold text-center mb-10">{Company}</h3>
      <div className="flex flex-wrap justify-center gap-8">
        {[
          { href: 'https://www.figma.com', src: 'https://cdn.simpleicons.org/figma/black', alt: 'Figma Logo' },
          { href: 'https://twitter.com', src: 'https://logo.clearbit.com/twitter.com', alt: 'Twitter Logo' },
          { href: 'https://instagram.com', src: 'https://logo.clearbit.com/instagram.com', alt: 'Instagram Logo' },
          { href: 'https://youtube.com', src: 'https://logo.clearbit.com/youtube.com', alt: 'Youtube Logo' },
          { href: 'https://linkedin.com', src: 'https://logo.clearbit.com/linkedin.com', alt: 'LinkedIn Logo' },
          { href: 'https://globant.com', src: 'https://logo.clearbit.com/globant.com', alt: 'Globant Logo' },
          { href: 'https://disney.com', src: 'https://logo.clearbit.com/disney.com', alt: 'Disney Logo' },
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
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg"
            />
          </a>
        ))}
      </div>
    </div>
  );
};
