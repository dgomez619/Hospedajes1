"use client"; // This directive makes the component a client component

import PropertyDetail from '@/components/PropertyDetail';
import React, { useState } from 'react';

// Sample property data (replace with actual data fetched from an API)
const propertyData = {
  id: '1',
  name: 'Comodo Apto en Naguanagua',
  location: 'Valencia, Carabobo',
  description: 'Espacioso apartamento con todas las comodidades, ideal para familias o grupos pequeños. Ubicado en una zona tranquila y segura, cerca de tiendas y restaurantes.                        **PRECIO**: 3 huspedes: $40, 4 - 5: huéspedes $45, 6 huéspedes: $60.',
  images: [
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1753808209/val-94/entrada-sala_r4hsun.jpg',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1753808210/val-94/room1_jokwa3.jpg',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1753808210/val-94/cuarto-principal1_mx3x5s.jpg',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1753808209/val-94/cuarto-principal_g4nzib.jpg',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1753808210/val-94/room3_gwmvvf.jpg',

  ],
  pricePerNight: 40,
  maxGuests: 6,
  bedrooms: 3,
  beds: 4, // e.g., 1 king, 1 queen, 1 sofa bed
  bathrooms: 2,
  amenities: [
    'Seguridad 24/7',
    'Aire acondicionado',
    'Cocina completa',
    'Wi-Fi',
    'Smart TV',
    'Piscina',
    'Estacionamiento gratuito',
    'Lavadora y secadora',
  ],
  hostName: 'Hospedaje por Dia',
  hostBio: 'Anfitrión experimentado con pasión por la hospitalidad y el confort de sus huéspedes.',
  rating: '4.83 Airbnb',
  reviewsCount: 106,
};

const guestPricing = {
 guestPricing: [
  { minGuests: 1, maxGuests: 3, pricePerNight: 40 },
  { minGuests: 4, maxGuests: 5, pricePerNight: 45 },
  { minGuests: 6, maxGuests: 6, pricePerNight: 50 }
]
};

export default function AptoVal94() {
 
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 antialiased">
      {/* Property Detail Container */}
      <PropertyDetail property={propertyData} guestPricing={guestPricing} />

    </div>
  );
}