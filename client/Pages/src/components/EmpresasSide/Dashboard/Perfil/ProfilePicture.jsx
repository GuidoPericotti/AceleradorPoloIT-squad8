
// import React from 'react';


// const ProfilePicture = ({ darkMode }) => {
//   return (
//     <div className="absolute left-20 top-36 flex justify-end items-end adms:left-3">
//       <figure className={` 
//         w-56 h-56 rounded-full relative
//         ${darkMode ? 'bg-gray-700' : 'bg-[#ABD9C3]'}
//         transition-colors duration-300
//       `}>
//         <img
//           src="https://via.placeholder.com/188x188"
//           alt="Profile"
//           className="w-48 h-48 rounded-full absolute inset-4 "
//         />
//       </figure>
//     </div>
//   );
// };
// export default ProfilePicture;


import React from 'react';

const ProfilePicture = ({ darkMode }) => {
  return (
    <div className="absolute admlg:left-20 admlg:top-36 flex justify-end items-end adms:left-3 adms:top-44">
      <figure className={` 
        admlg:w-56 admlg:h-56 rounded-full relative adms:w-36 adms:h-36
        ${darkMode ? 'bg-gray-700' : 'bg-[#ABD9C3]'}
        transition-colors duration-300
      `}>
        <img
          src="https://via.placeholder.com/188x188"
          alt="Profile"
          className="admlg:w-48 admlg:h-48 rounded-full absolute inset-4 adms:w-28 adms:h-28"
        />
      </figure>
    </div>
  );
};

export default ProfilePicture;
