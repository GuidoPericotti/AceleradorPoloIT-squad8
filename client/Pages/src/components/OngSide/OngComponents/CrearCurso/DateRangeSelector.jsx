import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangeSelector = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div className="">
      <label className="block text-gray-700">Fechas del curso</label>
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        isClearable={true}
        className="mt-1 p-2 w-full border rounded-lg mr-8 px-10"
        placeholderText="Selecciona el rango de fechas"
      />
    </div>
  );
};

export default DateRangeSelector;