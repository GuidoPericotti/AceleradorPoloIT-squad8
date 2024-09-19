import React from 'react'
import { EmpresaBody } from '../components/EmpresasSide/EmpresaBody'
import { NavbarOng } from '../components/OngSide/OngComponents/Navbar/NavbarOng'

export const EmpresaSide = () => {
  return (
    <>
        <div>
            <NavbarOng/>
            <EmpresaBody/>
        </div>
    </>
  )
}
