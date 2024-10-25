import React, { useState, useEffect } from 'react';
import InputField from '../CrearCurso/InputField';
import axios from 'axios';

const PerfilOng = ({ darkMode }) => {
  const [ongData, setOngData] = useState({
    nombre_ong: '',
    pais_ong: '',
    web_empresa: '',
    descripcion: '',
  });

  // Función para obtener los datos de la ONG desde la API
  useEffect(() => {
    const fetchOngData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/ong'); // Reemplaza con la URL de tu API
        setOngData(response.data); // Asigna la respuesta al estado
      } catch (error) {
        console.error('Error fetching ONG data:', error);
      }
    };

    fetchOngData();
  }, []);

  // Función para manejar los cambios en los inputs
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setOngData((prevData) => ({
      ...prevData,
      [id]: value, // Actualiza el valor correspondiente en el estado
    }));
  };

  // Función para manejar el submit del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Realiza la llamada para guardar la información
      await axios.post('http://0.0.0.0/api/ong/update', ongData); // Reemplaza con tu endpoint para guardar la ONG
      alert('Datos guardados con éxito');
    } catch (error) {
      console.error('Error al guardar los datos:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className={`w-full max-w-lg rounded-lg shadow-lg p-6 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
        <h2 className={`text-lg font-semibold text-center uppercase mb-4 ${darkMode ? ' text-gray-100' : ' text-gray-800'}`}>
          Información Personal
        </h2>
        <hr className={`pb-[0.5px] ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`} />
        <form onSubmit={handleSubmit}>
          {/* Input para Nombre de la ONG */}
          <div className="mb-4 mt-1">
            <p className={`${darkMode ? 'text-gray-200' : 'text-gray-800'} mt-2`}>
              Nombre de la ONG
            </p>
            <InputField
              id='nombre_ong'
              value={ongData.nombre_ong} // Valor recuperado de la API
              onChange={handleInputChange} // Manejador de cambios
              className={`mb-5 block w-full appearance-none rounded-lg border ${darkMode ? 'border-gray-600 bg-gray-800 text-gray-200 focus:border-sky-500' : 'border-gray-300 bg-white text-gray-700 focus:border-sky-500'} focus:outline-none focus:ring-0`}
            />
          </div>

          {/* Input para País */}
          <div className="mb-4">
            <p className={`${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>País</p>
            <InputField
              id='pais_ong'
              value={ongData.pais_ong} // Valor recuperado de la API
              onChange={handleInputChange} // Manejador de cambios
              className={`mb-5 block w-full appearance-none rounded-lg border ${darkMode ? 'border-gray-600 bg-gray-800 text-gray-200 focus:border-sky-500' : 'border-gray-300 bg-white text-gray-700 focus:border-sky-500'} focus:outline-none focus:ring-0`}
            />
          </div>

          {/* Input para Descripción */}
          <div className="mb-4">
            <p className={`${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Descripción</p>
            <InputField
              id='descripcion'
              value={ongData.descripcion} // Valor recuperado de la API
              onChange={handleInputChange} // Manejador de cambios
              className={`block w-full appearance-none rounded-lg border ${darkMode ? 'border-gray-600 bg-gray-800 text-gray-200 focus:border-sky-500' : 'border-gray-300 bg-white text-gray-700 focus:border-sky-500'} focus:outline-none focus:ring-0`}
            />
          </div>

          {/* Input para Sitio Web */}
          <div className="mb-4">
            <p className={`${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Sitio Web</p>
            <InputField
              id='web_empresa'
              value={ongData.web_empresa} // Valor recuperado de la API
              onChange={handleInputChange} // Manejador de cambios
              placeholder="Sitio Web"
              className={`block w-full pl-10 appearance-none rounded-lg border ${darkMode ? 'border-gray-600 bg-gray-800 text-gray-200 focus:border-sky-500' : 'border-gray-300 bg-white text-gray-700 focus:border-sky-500'} focus:outline-none focus:ring-0`}
            />
          </div>

          {/* Botones de Guardar y Cancelar */}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={() => alert('Cancelado')}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PerfilOng;