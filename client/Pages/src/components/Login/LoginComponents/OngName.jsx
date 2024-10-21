const OngName = ({ register, value }) => {
  return (
    <div>
      <label 
        htmlFor="nombre_org" 
        className="block text-black dark:text-gray-300"
        id="nombre_org"
        // Solo aplicamos register si está disponible
        {...(register ? register('name') : {})}
      >
        Nombre de la {value || ''}
      </label>
      <input
        id="nombre_org"
        type="text"
        aria-label="nombre_org"
        className="w-full px-3 py-2 mt-1 border rounded-lg dark:bg-gray-700 dark:border-gray-700"
      />
    </div>
  );
};

export default OngName;