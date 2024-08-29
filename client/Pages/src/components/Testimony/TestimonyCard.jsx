
 import React, { useEffect, useState } from 'react';
 import { testimonies } from './testimonies';  //Ajusta la ruta según la ubicación de tu archivo

 export const TestimonyCard = ({ darkMode, index }) => {
   const [user, setUser] = useState(null);

   useEffect(() => {
     setUser(testimonies[index]);
   }, [index]);

   if (!user) return <p>Loading...</p>;

   return (
     <article
       className={`w-full max-w-md mx-auto bg-transparent rounded shadow-md overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
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

// import React, { useEffect, useState } from 'react';
// import { testimonies } from './testimonies'; // Ajusta la ruta según la ubicación de tu archivo

// export const TestimonyCard = ({ darkMode, index }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     setUser(testimonies[index]);
//   }, [index]);

//   if (!user) return <p>Loading...</p>;

//   return (
//     <article
//       className={`relative w-full max-w-md mx-auto bg-transparent rounded shadow-md overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-white'} group`}
//     >
//       {/* Fondo desenfocado */}
//       <div className="absolute inset-0 bg-black/50 backdrop-blur-md transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
      
//       {/* Imagen */}
//       <figure className="relative overflow-hidden">
//         <img className="h-48 w-full object-cover" src={user.image} alt={`${user.name}`} />
//         <div className="absolute inset-0 flex items-center justify-center text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <p className="text-lg">
//           {/* Contenido adicional que aparece en el hover */}
//           <div className="p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <header>
//               <h3 className={`uppercase tracking-wide text-sm font-semibold ${darkMode ? 'text-gray-900' : 'text-white'}`}>
//                 Testimony
//               </h3>
//               <h2 className={`block mt-1 text-lg leading-tight font-medium ${darkMode ? 'text-gray-900' : 'text-white'}`}>
//                 {user.name}
//               </h2>
//               <p className={`${darkMode ? 'text-gray-900' : 'text-white'}`}>
//                 {user.location.city}, {user.location.country}
//               </p>
//             </header>
//             <p className={`${darkMode ? 'text-gray-900' : 'text-white'}`}>
//               "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel arcu eget justo."
//             </p>
//           </div>
//           </p>
//         </div>
//       </figure>

//     </article>
//   );
// };
