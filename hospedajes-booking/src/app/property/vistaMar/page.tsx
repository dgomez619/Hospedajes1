"use client"; // This directive makes the component a client component  

import PropertyDetail from '@/components/PropertyDetail';
import React, { useState } from 'react';

// Sample property data (replace with actual data fetched from an API)
const propertyData = {
  id: '4',
  name: 'Medicos, trabajo y playas',
  location: 'Lecherias, Anzoategui',
  description: 'Un lugar ideal para profesionales y turistas que buscan un equilibrio entre trabajo y descanso, con acceso a playas cercanas.',
  images: [
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754434912/vistamar10c/sala_y4c2mq.jpg',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754434915/vistamar10c/cocina_wgwwrk.jpg',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754434861/vistamar10c/vmbarra_v5eswt.png',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754434863/vistamar10c/cuarto1_bpqihg.png',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754434860/vistamar10c/cuarto_qjgj96.png',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754434836/vistamar10c/cuarto2_r7sbgr.jpg',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754434851/vistamar10c/sala2_k9a33z.png',
  ],
  pricePerNight: 35,
  maxGuests: 5,
  bedrooms: 2,
  beds: 4, // e.g., 1 king, 1 queen, 1 sofa bed
  bathrooms: 1,
  amenities: [
    'Wi-Fi',
    'Aire acondicionado',
    'Cocina completa',
    'Estacionamiento gratuito',
    'Smart TV',
    'Lencería y toallas',
  ],
  hostName: 'Hospedaje por Dias',
  hostBio: 'Anfitrión experimentado con pasión por la hospitalidad y el confort de sus huéspedes.',
  rating: "4.8",
  reviewsCount: 75,
};

const guestPricing = {
  guestPricing: [
    { minGuests: 1, maxGuests: 2, pricePerNight: 35 },
    { minGuests: 3, maxGuests: 4, pricePerNight: 40 },
    { minGuests: 5, maxGuests: 5, pricePerNight: 45 }
  ]
};

export default function VistaMar() {
 

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 antialiased">
      {/* Property Detail Container */}
      <PropertyDetail property={propertyData} guestPricing={guestPricing} />

    </div>
  );
}