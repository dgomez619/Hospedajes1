import React from 'react'
import Navbar from './Navigation'

const Hero = () => {
  return (
    <section className='relative h-[60vh] bg-cover bg-center'>
        <Navbar />
  <img src="https://images.unsplash.com/photo-1542291026-79eddc7569ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMDF8MHwxfHNlYXJjaHwxfHxuZW9uJTIwd2F2ZXxlbnwwfHx8fDE2NzcxMzIzNTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background" className="absolute inset-0 w-full h-full object-cover"/>

  <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-opacity-20 border-white rounded-xl p-8 shadow-lg text-white max-w-md mx-auto">
    <h1 className="text-4xl font-bold mb-4">Welcome to Our Site</h1>
    <p className="text-lg mb-6">Discover amazing things with our innovative solutions. This is a hero section with a beautiful glassmorphism effect.</p>
    <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out">Learn More</button>
  </div>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      
    </section>
  )
}

export default Hero