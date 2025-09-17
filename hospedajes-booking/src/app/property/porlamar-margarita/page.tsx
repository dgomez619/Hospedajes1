"use client";

import PropertyDetail from "@/components/PropertyDetail";

// Sample property data (replace with actual data fetched from an API)
const propertyData = {
  id: '3',
  name: 'Porlamar, Margarita',
  location: 'Porlamar, Margarita',
  description: 'Descripción del alojamiento en Porlamar, Margarita.',
  images: [
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1758133340/porlamar-margarita/edif-piscina_g2ubli.png',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1758133344/porlamar-margarita/sala-star_ujpb8l.png',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1758133343/porlamar-margarita/sala_y8mgeg.png',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1758133341/porlamar-margarita/sala-pasillo_awreai.png',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1758133339/porlamar-margarita/cuarto1_xjfuin.png',
    // Add more image URLs
  ],
  pricePerNight: 150,
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
  rating: '4.7',
  reviewsCount: 60,
};

const guestPricing = {
  guestPricing: [
    { minGuests: 1, maxGuests: 2, pricePerNight: 80 },
    { minGuests: 3, maxGuests: 4, pricePerNight: 90 },
    { minGuests: 5, maxGuests: 8, pricePerNight: 100 }
  ]
};   

export default function Porlamar() {
  return (
      <div className="min-h-screen bg-gray-50 font-sans text-gray-800 antialiased">
      {/* Property Detail Container */}
      <PropertyDetail property={propertyData} guestPricing={guestPricing} />

    </div>
  );
}