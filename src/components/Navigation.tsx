"use client"; // This directive makes the component a client component

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  return (
    <nav className='bg-white shadow sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          {/* Mobile menu button (Hamburger icon) */}
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)} // Toggle menu open/close
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              {/* Icon when menu is closed */}
              {!isOpen ? (
                <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              ) : (
                // Icon when menu is open (X icon)
                <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                </svg>
              )}
            </button>
          </div>

          {/* Logo/Brand Name */}
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0'>
              <h1 className='text-2xl font-bold' translate="no">Hospedaje por Dias</h1>
            </div>

            {/* Desktop Navigation Links */}
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                <Link href='/' className='text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium'>Inicio</Link>
                <Link href='/contacto' className='text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium'>Contacto</Link>
                <Link href='/conocenos' className='text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium'>Conócenos</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isOpen && ( // Only show if isOpen is true
        <div className='sm:hidden' id='mobile-menu'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            <Link href='/' className='text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium'>Inicio</Link>
            <Link href='/contacto' className='text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium'>Contacto</Link>
            <Link href='/conocenos' className='text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium'>Conócenos</Link>
          </div>
        </div>
      )}
    </nav>
  );
}