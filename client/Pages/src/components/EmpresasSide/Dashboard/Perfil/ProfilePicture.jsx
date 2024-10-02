import React from 'react';

const ProfilePicture = () => {
  return (
    <div className="absolute left-20 top-36 flex justify-end items-end">
      <div className="w-56 h-56 bg-[#abd9c3] rounded-full relative">
        <img
          src="https://via.placeholder.com/188x188"
          alt="Profile"
          className="w-48 h-48 rounded-full absolute inset-4"
        />
      </div>
    </div>
  );
};

export default ProfilePicture;
