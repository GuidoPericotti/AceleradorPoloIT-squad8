import React, { useEffect, useState } from 'react';
import { testimonies } from './testimonies'; // Asegúrate de que la ruta sea correcta

export const TestimonyCard = ({ darkMode, index }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(testimonies[index]);
  }, [index]);

  if (!user) return <p>Loading...</p>;

  return (
    <article
      className={`border-2 gap-x-4 w-80 bg-transparent rounded-lg shadow-md overflow-hidden ${darkMode ? 'bg-gray-700 text-white' : 'bg-[#4C9A77]'} transition-transform duration-500`}
    >
      <figure>
        <img className="h-48 w-full object-cover rounded-t-lg" src={user.image} alt={`${user.name}`} />
      </figure>
      <section className="p-6 ">
        <header>
          <h3 className={`uppercase tracking-wide text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Testimony
          </h3>
          <h2 className={`block mt-1 text-lg leading-tight font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {user.name}
          </h2>
          <p className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {user.location.city}, {user.location.country}
          </p>
        </header>
        <p className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel arcu eget justo."
        </p>
      </section>
    </article>
  );
};
