import React, { useEffect, useRef, useState } from 'react';
import { TestimonyCard } from './TestimonyCard';
import { testimonies } from './testimonies';

export const TestimonyOng = ({ Title, darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const duplicatedTestimonies = [...testimonies, ...testimonies];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex >= testimonies.length) {
          scrollRef.current.style.transition = 'none'; // Desactiva la transición temporalmente
          setTimeout(() => {
            scrollRef.current.style.transition = 'transform 0.4s ease-in-out'; // Reactiva la transición suave
            setCurrentIndex(0);
          }, 300);
        } else {
          return newIndex;
        }
      });
    }, 1000); // Velocidad más rápida (2 segundos)

    return () => clearInterval(interval);
  }, [testimonies.length]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.style.transform = `translateX(-${currentIndex * (22 / 3)}%)`;
    }
  }, [currentIndex]);

  return (
    <section className={`pt-20 overflow-hidden ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-black'}`}>
      <h3 className={`text-lg font-bold text-center mb-10 ${darkMode ? 'text-gray-300' : 'text-black'}`}>
        {Title}
      </h3>
      <div className="relative w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex w-full"
          style={{ width: `${duplicatedTestimonies.length * (22 / 3)}%` }}
        >
          {duplicatedTestimonies.map((_, index) => (
            <div key={index} className="w-96 px-1.5 flex-shrink-0">
              <TestimonyCard darkMode={darkMode} index={index % testimonies.length} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};