import React from 'react'
import { CardPrincipal } from '../components/AdminComponents/CardPrincipal'
import { Footer } from './Footer'
import { NavbarAdmin } from '../components/AdminComponents/NavbarAdmin'


export const AdminPage = () => {
  return (
    <>
        <NavbarAdmin />
        <CardPrincipal />
        <Footer />
    </>
  )
}
