import React from 'react'
import Navbar from './Navigation'

const Hero = () => {
  return (
    <section className='relative h-[60vh] bg-cover bg-center' style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080?nature')" }}>
        <Navbar />
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative z-10 flex items-center justify-center h-full'>
        <h1 className='text-white text-4xl font-bold'>Bienvenidos a nuestro catálogo de propiedades</h1>
        <button className='mt-4 px-6 py-2 bg-blue-600 text-white rounded'>Ver Propiedades</button>
      </div>
    </section>
  )
}

export default Hero