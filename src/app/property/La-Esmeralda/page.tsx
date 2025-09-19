"use client";
import PropertyDetail from "@/components/PropertyDetail";
import React, { useState } from 'react';


// Sample property data (replace with actual data fetched from an API)
const propertyData = {
  id: '4',
  name: 'Vista al mar - La Esmeralda',
  location: 'Lecherias, Anzoategui',
  description: 'Apartamento con vista al mar, ideal para disfrutar de la brisa marina y el sonido de las olas.',
  images: [
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754594799/la-esmeralda/balcon_zvhjbu.png',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754594792/la-esmeralda/balcon2_wnyrjf.png',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754594789/la-esmeralda/sala-comedor_su1r2y.png',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754594789/la-esmeralda/cuarto_rvalv8.png',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754594791/la-esmeralda/bano_cr0gmr.png',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754594789/la-esmeralda/cocina_d8idv1.png',
  ],
  pricePerNight: 250,
  maxGuests: 4,
  bedrooms: 2,
  beds: 3, // e.g., 1 king, 1 queen, 1 sofa bed
  bathrooms: 2,
  amenities: [
    'AA central',
    'Piscina',
    'TV en cuartos y sala',
    'Wi-Fi',
    'Estacionamiento gratuito',
    'Sofa cama matrimonial en la sala',
    'Cocina equipada',
  ],
  hostName: 'Hospedaje por Dias',
  hostBio: 'Anfitrión experimentado con pasión por la hospitalidad y el confort de sus huéspedes.',
  rating: '4.8',
  reviewsCount: 75,
};

const guestPricing = {
  guestPricing: [
    { minGuests: 1, maxGuests: 2, pricePerNight: 90 },
    { minGuests: 3, maxGuests: 4, pricePerNight: 100 },
    { minGuests: 5, maxGuests: 8, pricePerNight: 110 }
  ]
};

export default function LaEsmeralda() {
  return (
      <div className="min-h-screen bg-gray-50 font-sans text-gray-800 antialiased">
      {/* Property Detail Container */}
      <PropertyDetail property={propertyData} guestPricing={guestPricing} />

    </div>
  );
}