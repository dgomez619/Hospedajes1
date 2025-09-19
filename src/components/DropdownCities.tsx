"use client";

import React, { useState } from "react";
import PropertyCard from "../components/PropertyCard";

const cities = [
  { label: "Valencia, Carabobo", value: "Valencia, Carabobo" },
  { label: "Lecheria, Anzoategui", value: "Lecherias, Anzoategui" },
  { label: "Porlamar, Margarita", value: "Porlamar, Margarita" },
];

const DropdownCities = () => {
  const [selectedCity, setSelectedCity] = useState<string>("");

  const demoProperties = [
    {
      id: 1,
      title: "Valencia, Carabobo",
      description: "Un moderno apartamento en la ciudad.",
      imageUrl: "https://res.cloudinary.com/dwrinmdz0/image/upload/v1753808209/val-94/entrada-sala_r4hsun.jpg",
      price: '$40',
      linkUrl: "/property/apto-val-94",
    },
    {
      id: 2,
      title: "Valencia, Carabobo",
      description: "Penthouse con vista a la montaña.",
      imageUrl: "https://res.cloudinary.com/dwrinmdz0/image/upload/v1754162971/val-PH/sala-ph_w2nsfp.jpg",
      price: '$60',
      linkUrl: "/property/val-ph",
    },
    {
      id: 3,
      title: "Lecherias, Anzoategui",
      description: "Medico, trabajo y playas",
      imageUrl: "https://res.cloudinary.com/dwrinmdz0/image/upload/v1754434861/vistamar10c/vmbarra_v5eswt.png",
      price: '$35',
      linkUrl: "/property/vistaMar",
    },
    {
      id: 4,
      title: "Lecherias, Anzoategui",
      description: "Residencias Guaicamar",
      imageUrl: "https://res.cloudinary.com/dwrinmdz0/image/upload/v1754595141/res-GuicaMar/sala_uhkraz.png",
      price: 'contactar para precio*',
      linkUrl: "/property/Guaicamar-Lecheria",
    },
    {
      id: 5,
      title: "Lecherias, Anzoategui",
      description: "Vista al mar - La Esmeralda",
      imageUrl: "https://res.cloudinary.com/dwrinmdz0/image/upload/v1754594792/la-esmeralda/balcon2_wnyrjf.png",
      price: 'contactar para precio*',
      linkUrl: "/property/La-Esmeralda",
    },
    // Example for Porlamar, Margarita
    {
      id: 6,
      title: "Porlamar, Margarita",
      description: "Apartamento frente al mar.",
      imageUrl: "https://res.cloudinary.com/dwrinmdz0/image/upload/v1758133344/porlamar-margarita/sala-star_ujpb8l.png",
      price: '$50',
      linkUrl: "/property/porlamar-margarita",
    },
  ];

  const filteredProperties = selectedCity
    ? demoProperties.filter((property) => property.title === selectedCity)
    : demoProperties;

  return (
    <main className="bg-gray-100 flex items-center justify-center min-h-screen">
      <section className="py-8 w-full">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 text-center">Disponibles</h2>
          <div className="mb-8 w-full max-w-xs">
            <label htmlFor="city-select" className="block text-gray-700 font-semibold mb-2">
              Ciudades Disponibles
            </label>
            <select
              id="city-select"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
            >
              <option value="">Todas las ciudades</option>
              {cities.map((city) => (
                <option key={city.value} value={city.value}>
                  {city.label}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default DropdownCities