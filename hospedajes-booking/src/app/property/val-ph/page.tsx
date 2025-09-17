"use client"; // This directive makes the component a client component

import PropertyDetail from '@/components/PropertyDetail';
import React, { useState } from 'react';

// Sample property data (replace with actual data fetched from an API)
const propertyData = {
  id: '3',
  name: 'Pent House Valencia',
  location: 'Naguanagua, Carabobo',
  description: 'Espacio acogedor pent house con amplia terraza y parrillera exterior con vista a la montaña, equipado con todas las comodidades para una estancia placentera.',
  images: [
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754162971/val-PH/sala-ph_w2nsfp.jpg',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754162971/val-PH/sala-amplia_djprwy.jpg',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754162966/val-PH/cuarto_kx4i5i.jpg',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754162968/val-PH/cuarto3_v1r0ec.jpg',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754162964/val-PH/cocina1_z0eokf.jpg',
  ],
  pricePerNight: 50,
  maxGuests: 8,
  bedrooms: 4,
  beds: 6, // e.g., 1 king, 1 queen, 1 sofa bed
  bathrooms: 4,
  amenities: [
    'Internet',
    'Gas directo',
    'Agua caliente',
    'Poso de agua',
    'Parrillera',
    'Aire acondicionado',
    'TV',
    'Varios electrodomésticos',
  ],
  hostName: 'Hospedaje por Dias',
  hostBio: 'Anfitrión experimentado con pasión por la hospitalidad y el confort de sus huéspedes.',
  rating: "4.8 AirBnb",
  reviewsCount: 75,
};

export default function ValPh() {
  // Sample guestPricing data (replace with actual logic or API data as needed)
  const guestPricing = {
    guestPricing: [
  { minGuests: 1, maxGuests: 4, pricePerNight: 50 },
  { minGuests: 5, maxGuests: 6, pricePerNight: 60 },
  { minGuests: 7, maxGuests: 8, pricePerNight: 70 }
]
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 antialiased">
      {/* Property Detail Container */}
      <PropertyDetail property={propertyData} guestPricing={guestPricing} />
      
    </div>
  );
}