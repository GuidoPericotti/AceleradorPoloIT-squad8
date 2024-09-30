
import React, { useState } from 'react';

export const SubirFoto = () => {
  // Estado para almacenar la imagen seleccionada
  const [selectedImage, setSelectedImage] = useState(null);

  // Función para manejar la carga de imagen
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl); // Actualiza el estado con la URL de la imagen cargada
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      {/* Título */}
      <h2 className="text-xl font-semibold text-center mb-2">Subir una foto</h2>

      {/* Separador */}
      <hr className="mb-2" />

      {/* Contenedor de la imagen y nombre de la empresa */}
      <div className="flex items-center mb-4">
        {/* Imagen redondeada */}
        <div className="w-16 h-16 bg-gray-300 rounded-full mr-4">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Imagen de la Empresa"
              className="object-cover w-full h-full rounded-full"
            />
          ) : (
            <p className="text-gray-500 text-center">No imagen</p>
          )}
        </div>

        {/* Nombre de la empresa */}
        <div>
          <p className="font-medium">Nombre de la Empresa</p>

          {/* Botones de eliminar y actualizar */}
          <div className="flex space-x-4 mt-2">
            <button
              className="text-red-500 text-sm"
              onClick={() => setSelectedImage(null)}
            >
              Eliminar
            </button>
            <button className="text-blue-500 text-sm">Actualizar</button>
          </div>
        </div>
      </div>

      {/* Cuadro grande para subir la imagen */}
      <label
        htmlFor="image-upload"
        className="border-4 border-dashed border-gray-400 rounded-lg p-8 text-center w-full h-64 cursor-pointer flex flex-col items-center justify-center"
      >
        {/* Ícono SVG de subir imagen */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-14 h-14 text-gray-500 mb-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M16 7l-4-4m0 0L8 7m4-4v12"
          />
        </svg>

        {/* Texto en el cuadro */}
        <p className="font-bold uppercase mb-2">Haga click para subir un archivo</p>
        <p className="text-gray-600 mb-2">o arrástrelo y suéltelo aquí</p>
        <p className="text-gray-600 mb-2">SVG, PNG, JPG, o GIF</p>
        <p className="text-gray-500">(max 800 x 800px)</p>

        {/* Input para subir la imagen */}
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </label>

      {/* Botones de Cancelar y Guardar */}
      <div className="flex justify-between mt-6">
        {/* Botón Cancelar */}
        <button
          className="border border-gray-400 px-4 py-2 rounded-sm text-gray-700 hover:bg-gray-200"
          onClick={() => setSelectedImage(null)}
        >
          Cancelar
        </button>

        {/* Botón Guardar */}
        <button
          className="border border-gray-400 px-4 py-2 rounded-sm text-gray-700 hover:bg-gray-200"
          onClick={() => alert('Imagen guardada')}
        >
          Guardar
        </button>
      </div>
    </div>
  );
};
