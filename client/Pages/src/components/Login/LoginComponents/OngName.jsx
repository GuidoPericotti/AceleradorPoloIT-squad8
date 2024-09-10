
const OngName = ({ register, value }) => {
  return (
    <div>
      <label htmlFor="name" className="block text-gray-700 dark:text-gray-300" id="name"
        {...register('name')}>
        Nombre de la {value || ''}
      </label>
      <input
         id="Nombre"
         type="text"
         ariaLabel="Nombre"
        className="w-full px-3 py-2 mt-1 border rounded-lg"
      />
    </div>
  );
};

export default OngName;
