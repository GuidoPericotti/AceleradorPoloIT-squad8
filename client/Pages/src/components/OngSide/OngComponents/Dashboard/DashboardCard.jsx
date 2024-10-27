import React from 'react';

const DashboardCard = ({ title, bgColor, onClick }) => {
  return (
    <div
      className={`${bgColor} p-5 text-white rounded-lg cursor-pointer flex items-center justify-center`}
      onClick={onClick}
    >
      <h3 className='text-xl font-semibold'>{title}</h3>
    </div>
  );
};

export default DashboardCard;
