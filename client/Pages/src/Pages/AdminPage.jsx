import React from 'react'
import { Navbar } from './Navbar'
import { CardPrincipal } from '../components/AdminComponents/CardPrincipal'
import { Footer } from './Footer'
export const AdminPage = () => {
  return (
    <>
        <Navbar />
        <CardPrincipal />
        <Footer />
    </>
  )
}
