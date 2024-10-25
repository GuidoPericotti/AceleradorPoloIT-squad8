
import React from 'react';
import { AvatarIconTestimony } from './AvatarIconTestimony';

export const OngClientTestimony3 = ({ darkMode }) => {
  return (
    <>
      <main className={`flex justify-center items-center min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-[#82C7A5]'}`}>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-blue-900'} rounded-3xl p-10 pb-24 w-11/12 transition-colors duration-300`}>
          <section className={`text-center mb-8 ${darkMode ? 'text-gray-300' : 'text-white'}`}>
            <h2 className="text-4xl font-bold mb-4">
              Desarrolla tu negocio con el mejor talento de América Latina
            </h2>
            <p className="text-xl">
              Llevamos más de 10 años conectando empresas con talentos altamente certificados
            </p>
          </section>

          <section className="flex justify-around mt-4">
            <table className="table-auto w-full text-left adms:-ml-10">
              <thead>
                <tr className="flex justify-around mb-8">
                  <th className="px-4 py-2 uppercase flex flex-col items-center">
                    <AvatarIconTestimony />
                    <p className={`mt-8 ${darkMode ? 'text-gray-300' : 'text-white'}`}>Accede al mejor talento</p>
                  </th>
                  <th className="px-4 py-2 uppercase flex flex-col items-center">
                    <AvatarIconTestimony />
                    <p className={`mt-8 ${darkMode ? 'text-gray-300' : 'text-white'}`}>Nuestros expertos te conectan</p>
                  </th>
                  <th className="px-4 py-2 uppercase flex flex-col items-center">
                    <AvatarIconTestimony />
                    <p className={`mt-8 ${darkMode ? 'text-gray-300' : 'text-white'}`}>Contrata fácilmente</p>
                  </th>
                </tr>
              </thead>

              <tbody className="flex justify-around">
                <tr className="flex justify-around">
                  <td className={`px-4 py-2 flex-1 ${darkMode ? 'text-gray-300' : 'text-white'}`}>
                    Nuestra plataforma lleva más de 10 años atrayendo al talento más calificado de la región. Nuestros programas de entrenamiento, mentorías y certificaciones te aseguran trabajar con los mejores talentos del mercado.
                  </td>
                  <td className={`px-4 py-2 flex-1 ${darkMode ? 'text-gray-300' : 'text-white'}`}>
                    El equipo de Talent Matchers encuentra perfiles que se ajustan a tus necesidades. Obtienes un listado de Desarrolladores seleccionados manualmente.
                  </td>
                  <td className={`px-4 py-2 flex-1 ${darkMode ? 'text-gray-300' : 'text-white'}`}>
                    Presentarte candidatos es sólo una parte. Workana te asegura incorporaciones ágiles y un seguimiento recurrente.
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </main>
    </>
  );
}
