
import React, { useEffect, useState } from 'react';

export const TestimonyCard = ({ darkMode }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        const { name, picture, location } = data.results[0];
        setUser({ 
          name: `${name.first} ${name.last}`, 
          image: picture.large, 
          location: `${location.city}, ${location.country}`
        });
      })
      .catch(error => console.error('Error fetching user:', error));
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <article
      className={`w-full max-w-md mx-auto bg-zinc-50 rounded shadow-md overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
    >
      <figure>
        <img className="h-48 w-full object-cover" src={user.image} alt={`${user.name}`} />
      </figure>
      <section className="p-8">
        <header>
          <h3 className={`uppercase tracking-wide text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Testimony
          </h3>
          <h2 className={`block mt-1 text-lg leading-tight font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {user.name}
          </h2>
          <p className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {user.location}
          </p>
        </header>
        <p className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel arcu eget justo."
        </p>
      </section>
    </article>
  );
};
