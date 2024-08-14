import React from 'react'
import { CardsLogHome } from '../components/CardsComponentsHome/CardsLogHome'

export const CardsLogin = () => {
  return (
    <>
    <section className='flex gap-4 mt-5 mb-5'>
        <CardsLogHome description="ONGS" />
        <CardsLogHome description="Empresas" />
    </section>
    
    </>
  )
}
