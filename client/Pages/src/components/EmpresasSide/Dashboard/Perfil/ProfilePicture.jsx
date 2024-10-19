
import React from 'react';


const ProfilePicture = ({ darkMode }) => {
  return (
    <div className="absolute left-20 top-36 flex justify-end items-end">
      <figure className={`
        w-56 h-56 rounded-full relative
        ${darkMode ? 'bg-gray-700' : 'bg-[#ABD9C3]'}
        transition-colors duration-300
      `}>
        <img
          src="https://via.placeholder.com/188x188"
          alt="Profile"
          className="w-48 h-48 rounded-full absolute inset-4"
        />
      </figure>
    </div>
  );
};
export default ProfilePicture;

