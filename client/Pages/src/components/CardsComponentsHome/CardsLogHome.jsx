import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { CardButtonHome } from './CardButtonHome';

export const CardsLogHome = ({ src, description, darkMode, className }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const card = cardRef.current;
      if (!card) return;

      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (cardPosition < screenPosition) {
        card.classList.add('opacity-100', 'translate-y-0');
        card.classList.remove('opacity-0', 'translate-y-10');
      } else {
        card.classList.remove('opacity-100', 'translate-y-0');
        card.classList.add('opacity-0', 'translate-y-10');
      }
    };

    handleScroll(); // Ejecuta el scroll al montar para activar la animación

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [darkMode]);

  return (
    <article
      ref={cardRef}
      className={`w-full max-w-sm mx-auto rounded-xl shadow-md overflow-hidden transform transition-all duration-700 ease-in-out opacity-0 translate-y-10 ${className} ${darkMode ? 'bg-gray-700' : 'bg-[#C6E5D6]'} mb-6`} // Añadido mb-6 para margen inferior
    >
      <figure>
        <img className="h-48 w-full object-cover" src={src} alt="Ong Img for Button" />
      </figure>
      <section className="p-8 bg-transparent">
        <header className='bg-transparent'>
          <h3 className="uppercase tracking-wide text-sm font-semibold">
            Company retreats
          </h3>
          <h2 className="block mt-1 text-lg leading-tight font-medium">
            <a href="#">Incredible accommodation for your team</a>
          </h2>
        </header>
        <NavLink to='/login'>
          <CardButtonHome description={description} />
        </NavLink>
      </section>
    </article>
  );
};
