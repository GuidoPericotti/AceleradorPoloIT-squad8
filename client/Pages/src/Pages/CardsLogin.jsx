import React from 'react'
import { CardsLogHome } from '../components/CardsComponentsHome/CardsLogHome'

export const CardsLogin = () => {
  return (
    <>
    <section className='flex gap-4 mt-44 mb-9'>
        <CardsLogHome description="ONGS" />
        <CardsLogHome description="Empresas" />
    </section>
    
    </>
  )
}
