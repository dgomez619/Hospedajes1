import React from "react";

type GuestPricing = {
  minGuests: number;
  maxGuests: number;
  pricePerNight: number;
};

interface RatesTableProps {
  guestPricing: GuestPricing[];
}

const RatesTable: React.FC<RatesTableProps> = ({ guestPricing }) => (
  <div className="bg-white p-4 rounded-xl shadow mb-6">
    <h3 className="text-xl font-bold mb-2">Tarifas por número de huéspedes</h3>
    <table className="w-full text-left border-collapse">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b font-semibold">Huéspedes</th>
          <th className="py-2 px-4 border-b font-semibold">Precio por noche</th>
        </tr>
      </thead>
      <tbody>
        {guestPricing.map((rate, idx) => (
          <tr key={idx}>
            <td className="py-2 px-4 border-b">
              {rate.minGuests === rate.maxGuests
                ? rate.minGuests
                : `${rate.minGuests} - ${rate.maxGuests}`}
            </td>
            <td className="py-2 px-4 border-b">${rate.pricePerNight}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default RatesTable;