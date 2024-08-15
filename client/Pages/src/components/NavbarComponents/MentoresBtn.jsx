import React from 'react'
import { Navbar } from '../../Pages/Navbar'
import { Login } from './Login'

export const MentoresBtn = () => {
  return (
    <>
      <Navbar />
      <section className='relative mt-64'>
        <Login /> {/* Puse este boton para poder ver si funciona la rutas */}
      </section>
    </>
  )
}
