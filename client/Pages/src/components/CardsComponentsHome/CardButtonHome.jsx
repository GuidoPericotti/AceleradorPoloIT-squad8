import React from 'react';

export const CardButtonHome = ({ description }) => {
  return (
    <>
      <button
        className="overflow-hidden relative w-32 p-2 h-12 bg-[#A5CCBA] text-black border-solid border-2 border-gray-200	 rounded-md text-xl font-bold cursor-pointer z-10 group"
      >{description}
        <span
          className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-300 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
        ></span>
        <span
          className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
        ></span>
        <span
          className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
        ></span>
        <span
          className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-0 z-10"
        >
          Descúbrenos
        </span>
      </button>
    </>
  );
};