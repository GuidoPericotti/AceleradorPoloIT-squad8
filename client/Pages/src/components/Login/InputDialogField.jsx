import React from 'react'

export const InputDialogField = () => {
  return (
    <>
    <label htmlFor="courses">Cursos a brindar:
        <select id="courses">
            <option value="Web">seleccione uno</option>
            <option value="Web">Programación en desarrollo WEB</option>
            <option value="Full">Full Stack</option>
            <option value="UX">UX</option>
            <option value="Marketing">Marketing digital</option>
        </select>
    </label>
    </>
  )
}
