"use client"; // This directive makes the component a client component

import PropertyDetail from '@/components/PropertyDetail';

// Sample property data (replace with actual data fetched from an API)
const propertyData = {
  id: '2',
  name: 'Residencias Guaicamar',
  location: 'Lecherias, Anzoategui',
  description: 'Acogedor apartamento cerca de la playa, ideal para disfrutar de unas vacaciones relajantes.',
  images: [
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754595141/res-GuicaMar/sala_uhkraz.png',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754595142/res-GuicaMar/sala2_j4ne4m.png',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754595133/res-GuicaMar/cuarto1_ticiio.png',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754595133/res-GuicaMar/cuarto2_y9viqa.png',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754595139/res-GuicaMar/cuarto3_km89va.png',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754595130/res-GuicaMar/comedor_oyfdtx.png',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754595129/res-GuicaMar/cocina_tfclib.png',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754595121/res-GuicaMar/barra_dbsqlv.png',
    'https://res.cloudinary.com/dwrinmdz0/image/upload/v1754595124/res-GuicaMar/casibo_xd7npl.png'
  ],
  pricePerNight: 90,
  maxGuests: 8,
  bedrooms: 3,
  beds: 3, // e.g., 1 king, 1 queen, 1 sofa bed
  bathrooms: 2,
  amenities: [
    'Vigilancia las 24 horas',
    'Internet fibra óptica',
    'Piscina',
    'Parque infantil',
    '2 Puestos de estacionamiento',
    'AA Central',
    'Lavadora/secadora',
    'TV',
    'Agua caliente',
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

export default function GuaicamarLecheria() {

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 antialiased">
      {/* Property Detail Container */}
      <PropertyDetail property={propertyData} guestPricing={guestPricing} />

    </div>
  );
}