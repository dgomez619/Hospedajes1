import React, { useState } from "react";
import emailjs from "emailjs-com"; // npm install emailjs-com

interface GuestPricing {
  minGuests: number;
  maxGuests: number;
  pricePerNight: number;
}

interface Property {
  name: string;
  maxGuests: number;
  guestPricing: GuestPricing[];
}

interface DatePickProps {
  property: Property;
}

function calculatePrice(guestPricing: GuestPricing[], guests: number): number {
  const range = guestPricing.find(
    (p) => guests >= p.minGuests && guests <= p.maxGuests
  );
  return range ? range.pricePerNight : 0;
}

const DatePick: React.FC<DatePickProps> = ({ property }) => {
  const [guests, setGuests] = useState(1);
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [status, setStatus] = useState("");

  const pricePerNight = calculatePrice(property.guestPricing, guests);

  const calculateNights = (checkin: string, checkout: string) => {
    if (!checkin || !checkout) return 0;
    const start = new Date(checkin);
    const end = new Date(checkout);
    const diffTime = end.getTime() - start.getTime();
    return diffTime > 0 ? diffTime / (1000 * 60 * 60 * 24) : 0;
  };

  const nights = calculateNights(checkin, checkout);
  const total = nights * pricePerNight;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !checkin || !checkout) {
      setStatus("Por favor completa todos los campos requeridos ❗");
      return;
    }

    setStatus("Enviando...");

    const templateParams = {
      property: property.name,
      checkin,
      checkout,
      guests,
      pricePerNight,
      nights,
      total,
      name,
      email,
      whatsapp: whatsapp || "No proporcionado",
    };

    emailjs
    .send(
        "service_i3dif7a", // replace with your EmailJS service ID
        "template_atng73o", // replace with your EmailJS template ID
        templateParams,
        "51KQvIusq_7Qyr4Fz" // replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("Solicitud enviada con éxito ✅");
        },
        (error) => {
          console.error(error);
          setStatus("Error al enviar la solicitud ❌");
        }
      );
  };

  return (
    <div className="lg:col-span-1">
      <form
        onSubmit={handleSubmit}
        className="sticky top-28 bg-white p-6 rounded-xl shadow-lg border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          ${pricePerNight}{" "}
          <span className="text-xl text-gray-600 font-normal">/ por noche</span>
        </h2>

        {nights > 0 && (
          <p className="text-gray-700 mb-4">
            {nights} noches × ${pricePerNight} ={" "}
            <span className="font-bold">${total}</span>
          </p>
        )}


        {/* Check-in */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Fecha de Check-in *
          </label>
          <input
            type="date"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            required
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Check-out */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Fecha de Check-out *
          </label>
          <input
            type="date"
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            required
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Guests */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Número de Huéspedes *
          </label>
          <input
            type="number"
            min="1"
            max={property.maxGuests}
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            required
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Nombre */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nombre completo *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Correo electrónico *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* WhatsApp */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            WhatsApp (opcional)
          </label>
          <input
            type="tel"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="+58 412 1234567"
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-200"
        >
          Enviar Solicitud
        </button>

        {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
      </form>
    </div>
  );
};

export default DatePick;
