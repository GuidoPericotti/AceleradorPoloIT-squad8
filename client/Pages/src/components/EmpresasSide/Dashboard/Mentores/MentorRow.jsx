import React from 'react';

const MentorRow = ({ mentor, onEdit, onDelete, openDeleteModal }) => {
  const isEmpty =
    !mentor.name ||
    !mentor.mainTech ||
    !mentor.secondaryTech ||
    !mentor.email ||
    !mentor.dni ||
    !mentor.age ||
    !mentor.phone;

  return (
    <tr className="border-b dark:border-neutral-600  dark:hover:bg-neutral-600">
      <th scope="row" className="px-3 py-4">{mentor.name}</th>
      <td className="px-3 py-4">{mentor.mainTech}</td>
      <td className="px-3 py-4">{mentor.secondaryTech}</td>
      <td className="px-3 py-4">{mentor.email}</td>
      <td className="px-3 py-4">{mentor.dni}</td>
      <td className="px-3 py-4">{mentor.age}</td>
      <td className="px-3 py-4">{mentor.phone}</td>
      <td className="px-3 py-4">
        {!isEmpty && (
          <div className="flex space-x-2">
            <button
              type="button"
              className="inline-flex items-center border-2 border-top border-md border-[#8BACD6] text-[#8BACD6] rounded-md px-1 py-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-[#8BACD6] hover:text-white"
              onClick={() => onEdit(mentor)}
            >
              Editar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="ml-2 w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5h2M12 11v7m-7-5h14M5.5 12.5L7 7h10l1.5 5.5H5.5z"
                />
              </svg>
            </button>
            
            <button
              type="button"
              className="inline-flex items-center border border-md border-[#E17589] text-[#E17589] rounded-md px-1 py-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-[#E17589] hover:text-white"
              onClick={() => openDeleteModal(mentor)} // Abre el modal de confirmación
            >
              Eliminar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="ml-2 w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 19c0 1.1.9 2 2 2h8a2 2 0 002-2V7H6v12zM5 7h14M9 7V4h6v3"
                />
              </svg>
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default MentorRow;