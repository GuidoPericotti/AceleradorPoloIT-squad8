import { useState } from 'react';
//import { Collapse, initTWE } from 'tw-elements';
import { StudentsTable } from '../Students/StudentsTable';
//import DashboardCard from '../Dashboard/DashboardCard';

const AcordionCourse = ({ nroItem, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    setIsOpen(!isOpen);
  };
  // useEffect(() => {
  //   initTWE({ Collapse });
  // }, []);
  

  return (
    <div className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
  <div className="w-screen overflow-x-hidden">
  {/* El acordeón */}
  <div id="accordionExample" className="dark:bg-gray-700 w-full">
    <div className="dark:bg-gray-700 rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark w-full">
      <h2 className="dark:bg-gray-700 mb-0" id="headingOne">
        <button
          className={`group relative flex w-full items-center rounded-t-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white ${
            isOpen
              ? 'bg-gray-700 text-primary shadow-border-b dark:bg-gray-700 dark:text-white '
              : 'dark:bg-gray-700 dark:text-white'
          }`}
          type="button"
          onClick={handleCardClick}
          aria-expanded={isOpen}
          aria-controls="collapseOne"
        >
          {nroItem}
          <span
            className={`ml-auto h-5 w-5 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </button>
      </h2>
      <div
        id="collapseOne"
        className={`${isOpen ? 'block' : 'hidden'} `}
        aria-labelledby="headingOne"
      >
        <div className="px-5 py-4 w-full dark:bg-gray-700">
          {/* Aquí puedes colocar la tabla */}
          <StudentsTable />
        </div>
      </div>
    </div>
  </div>
</div>
</div>

  

  );
};

export default AcordionCourse;
