import React from 'react';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import DateRangeSelector from './DateRangeSelector';
import ButtonGroup from './ButtonGroup';
import DateInputField from './DateInputField';
import AcordionCourse from '../Course/AcordionCourse';

const PersonalCourses = ({ nombre_curso }) => {
  return (
    <div>
      <h2 className="text-xl font-bold">Cursos Personales</h2>
      {nombre_curso && <AcordionCourse nroItem={nombre_curso} />}
    </div>
  );
};

// CourseForm.jsx
const CourseForm = ({ 
  onSubmit, 
  onCancel, 
  nombre_curso, 
  setNombre_curso, 
  descripcion_curso, 
  setDescripcion_curso, 
  docente_curso, 
  setDocente_curso,
  fechaInicio_curso,
  setFechaInicio_curso,
  fechaCierre_curso,
  setFechaCierre_curso,
  curso_id,
  setCurso_id,
  organizacion_id,
  setOrganizacion_id 
}) => {
  return (
    <form onSubmit={onSubmit}>
      <InputField
        label="Título del Curso"
        value={nombre_curso}
        onChange={(e) => setNombre_curso(e.target.value)}
        id='nombre_curso'
      />
      <InputField
        label="Docente"
        value={docente_curso}
        onChange={(e) => setDocente_curso(e.target.value)}
        id='docente_curso'
      />
      <TextAreaField
        label="Descripción"
        value={descripcion_curso}
        onChange={(e) => setDescripcion_curso(e.target.value)}
        id='descripcion_curso'
      />
      <div className="flex items-center space-x-2 ml-5">
        <DateInputField 
          id="fechaInicio_curso" 
          value={fechaInicio_curso}
          onChange={(e) => setFechaInicio_curso(e.target.value)}
        />
        
        <span className="text-lg">-</span> {/* Línea de separación */}

        <DateInputField 
          id="fechaCierre_curso" 
          value={fechaCierre_curso}
          onChange={(e) => setFechaCierre_curso(e.target.value)}
        />
      </div>
      <div className='flex justify-center pt-3'>
        <ButtonGroup 
        onCancel={onCancel}/>
      </div>
    </form>
  );
};

export default CourseForm;