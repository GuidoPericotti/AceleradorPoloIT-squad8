import React from 'react';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import DateRangeSelector from './DateRangeSelector';
import ButtonGroup from './ButtonGroup';

const CourseForm = ({ onSubmit, onCancel, courseTitle, setCourseTitle, description, setDescription }) => {
  return (
    <form onSubmit={onSubmit}>
      <InputField
        label="Título del Curso"
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
      />
      <TextAreaField
        label="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <DateRangeSelector />
      <div className='flex justify-center pt-3'>
        <ButtonGroup onCancel={onCancel} />
      </div>
    </form>
  );
};

export default CourseForm;