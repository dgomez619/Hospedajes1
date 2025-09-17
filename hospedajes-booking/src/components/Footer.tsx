import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Hospedajes Booking. Todos los derechos reservados.</p>
      </div>
    </div>
  )
}

export default Footer