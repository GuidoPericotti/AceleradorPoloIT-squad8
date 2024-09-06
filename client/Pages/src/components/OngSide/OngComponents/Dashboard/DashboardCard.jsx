import React from 'react';

const DashboardCard = ({ title, bgColor, onClick }) => {
  return (
    <div
      className={`${bgColor} p-5 text-white rounded-lg cursor-pointer`}
      onClick={onClick}
    >
      <h3>{title}</h3>
    </div>
  );
};

export default DashboardCard;
