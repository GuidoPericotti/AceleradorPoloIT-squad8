import React, { useState } from 'react';

export const CardTestimony = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Empresa A",
      description: `Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. 
        Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
        Maecenas eget condimentum velit, sit amet feugiat lectus...`,
      imgUrl: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
    },
    {
      id: 2,
      title: "Empresa B",
      description: "Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus...",
      imgUrl: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
    },
    {
      id: 3,
      title: "Empresa C",
      description: "Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora...",
      imgUrl: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
    },
    {
      id: 4,
      title: "Empresa D",
      description: "Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem...",
      imgUrl: "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
    }
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full relative overflow-hidden dark:bg-dark-primary dark:text-white"> {/* Contenedor de overflow y padding ajustado */}
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="max-w-full flex-shrink-0 flex justify-left items-center p-8 border-2 border-gray-300 rounded-lg h-96"> {/* Card más alta */}
            <div className="text-left w-1/2 ml-12"> {/* Ancho del texto ajustado */}
              <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
              <p className="text-sm text-gray-600 max-h-24 overflow-y-auto dark:text-white">{slide.description}</p> {/* Descripción más compacta */}
            </div>
            <img
              src={slide.imgUrl}
              className="w-2/5 h-full object-cover rounded-lg" 
              alt={slide.title}
            />
          </div>
        ))}
      </div>
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button
          onClick={handlePrev}
          className="p-4 rounded-full bg-gray-800 text-white text-2xl transition-transform duration-300 ease-in-out transform hover:scale-110"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="p-4 rounded-full bg-gray-800 text-white text-2xl transition-transform duration-300 ease-in-out transform hover:scale-110"
        >
          ❯
        </button>
      </div>
    </div>
  );
};
