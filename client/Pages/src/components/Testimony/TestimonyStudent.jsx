import React, { useEffect, useRef, useState } from 'react';
import { TestimonyCard } from './TestimonyCard';


export const TestimonyStudent = ({Title}) => {
  
    const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);
  const testimonies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; // Reemplaza con datos reales o genera dinámicamente

  // Duplica el array para crear el efecto de bucle infinito
  const duplicatedTestimonies = [...testimonies, ...testimonies];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Si llegamos al final del array original, volvemos al inicio del array duplicado
        const newIndex = prevIndex + 1;
        if (newIndex >= testimonies.length) {
          scrollRef.current.style.transition = 'none'; // Desactiva la transición para el reinicio
          setTimeout(() => {
            scrollRef.current.style.transition = 'transform 0.3s ease-in-out'; // Reactiva la transición
            setCurrentIndex(0);
          }, 200); // Tiempo que coincide con la duración de la transición
        } else {
          return newIndex;
        }
      });
    }, 2000); // Ajusta este valor para controlar la velocidad de transición

    return () => clearInterval(interval);
  }, [testimonies.length]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.style.transform = `translateX(-${currentIndex * (22 / 3)}%)`;
    }
  }, [currentIndex]);
  
    return (
    <>
    <section className="pt-20 overflow-hidden">
  <h3 className="text-lg font-bold text-center mb-10">
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
          <TestimonyCard />
        </div>
      ))}
    </div>
  </div>
</section>
    </>
  )
}
