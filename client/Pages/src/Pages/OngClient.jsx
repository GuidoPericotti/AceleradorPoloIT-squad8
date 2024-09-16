import React from 'react'
import { Navbar } from './Navbar'
import { OngClientSide } from '../components/OngClient/OngClientSide'
import { Footer } from './Footer'


export const OngClient = () => {
  return (
    <>
        <main>
            <Navbar />
            <OngClientSide />
            <Footer />
        </main>
    
    </>
  )
}
