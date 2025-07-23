import React from 'react'

const Navigation = () => {
  return (
    <nav className='bg-white shadow sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* Mobile menu button*/}
          </div>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0'>
              <h1 className='text-2xl font-bold'>Logo</h1>
            </div>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                <a href='#' className='text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium'>Inicio</a>
                <a href='#' className='text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium'>Propiedades</a>
                <a href='#' className='text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium'>Contacto</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation