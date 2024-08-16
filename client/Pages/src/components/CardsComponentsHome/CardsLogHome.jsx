import React from 'react'
import { CardButtonHome } from './CardButtonHome'

export const CardsLogHome = ({ description }) => {
  return (
    <>
    <article className="max-w-md mx-auto bg-zinc-50	 rounded-xl shadow-md overflow-hidden">
        <figure>
            <img className="h-48 w-full object-cover" src="#" alt="Ong Img for Button" />
        </figure>
        <section className="p-8">
            <header>
                <h3 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</h3>
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                    <a href="#">Incredible accommodation for your team</a>
                </h2>
            </header>
            <CardButtonHome description={description}/>
        </section>
    </article>
    </>
  )
}
