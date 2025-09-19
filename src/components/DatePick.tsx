import React, { useState } from 'react';

interface GuestPricing {
  minGuests: number;
  maxGuests: number;
  pricePerNight: number;
}

interface Property {
  maxGuests: number;
  guestPricing: GuestPricing[];
}

interface DatePickProps {
  property: Property;
}

function calculatePrice(guestPricing: GuestPricing[], guests: number): number {
  const range = guestPricing.find(
    p => guests >= p.minGuests && guests <= p.maxGuests
  );
  return range ? range.pricePerNight : 0; // 0 if not found (could throw error instead)
}

const DatePick: React.FC<DatePickProps> = ({ property }) => {
  const [guests, setGuests] = useState(1);

  const price = calculatePrice(property.guestPricing, guests);

  return (
    <div className="lg:col-span-1">
      <div className="sticky top-28 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          ${price} <span className="text-xl text-gray-600 font-normal">/ por noche</span>
        </h2>

        <div className="mb-6">
          <label htmlFor="checkin" className="block text-gray-700 text-sm font-bold mb-2">
            Fecha de Check-in
          </label>
          <input
            type="date"
            id="checkin"
            lang='es'
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="checkout" className="block text-gray-700 text-sm font-bold mb-2">
            Fecha de Check-out
          </label>
          <input
            type="date"
            id="checkout"
            lang='es'
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="guests" className="block text-gray-700 text-sm font-bold mb-2">
            Número de Huéspedes
          </label>
          <input
            type="number"
            id="guests"
            min="1"
            max={property.maxGuests}
            value={guests}
            onChange={e => setGuests(Number(e.target.value))}
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:border-blue-500"
          />
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-200">
          Enviar Solicitud
        </button>
      </div>
    </div>
  );
};

export default DatePick;
