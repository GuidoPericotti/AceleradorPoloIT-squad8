import React from 'react';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import DateRangeSelector from './DateRangeSelector';
import ButtonGroup from './ButtonGroup';
import DateInputField from './DateInputField';
import AcordionCourse from '../Course/AcordionCourse';

const PersonalCourses = ({ courseTitle }) => {
  return (
    <div>
      <h2 className="text-xl font-bold">Cursos Personales</h2>
      {courseTitle && <AcordionCourse nroItem={courseTitle} />}
    </div>
  );
};

// CourseForm.jsx
const CourseForm = ({ 
  onSubmit, 
  onCancel, 
  courseTitle, 
  setCourseTitle, 
  description, 
  setDescription, 
  courseTeacher, 
  setCourseTeacher,
  startDate,
  setStartDate,
  endDate,
  setEndDate 
}) => {
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
      <div className="flex items-center space-x-2 ml-5">
        <DateInputField 
          id="fechaInicio_curso" 
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        
        <span className="text-lg">-</span> {/* Línea de separación */}

        <DateInputField 
          id="fechaCierre_curso" 
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div className='flex justify-center pt-3'>
        <ButtonGroup onCancel={onCancel} />
      </div>
    </form>
  );
};

export default CourseForm;