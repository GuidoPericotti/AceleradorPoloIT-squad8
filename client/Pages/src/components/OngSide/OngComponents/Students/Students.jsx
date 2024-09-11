
import  {StudentsTable} from './StudentsTable';

 const Students = ({ darkMode }) => {
  return (
    <>
      {/* <section>
        <h2 className={`text-xl font-bold text-center dark:bg-gray-700 ${darkMode ? 'text-black' : 'text-black'}`}>Estudiantes</h2>
      </section> */}
      <section className='dark:bg-gray-700'>
        <StudentsTable />
      </section>
    </>
  );
};
export default Students;
