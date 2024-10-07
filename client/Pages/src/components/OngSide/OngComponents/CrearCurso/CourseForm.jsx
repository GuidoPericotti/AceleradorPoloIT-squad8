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
        id='nombre_curso'
      />
      <InputField
        label="Docente"
        value={courseTeacher}
        onChange={(e) => setCourseTeacher(e.target.value)}
        id='docente_curso'
      />
      <TextAreaField
        label="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        id='descripcion_curso'
      />
      <DateRangeSelector 
        id='fechaInicio_curso'
      />
      <div className='flex justify-center pt-3'>
        <ButtonGroup onCancel={onCancel} />
      </div>
    </form>
  );
};

export default CourseForm;