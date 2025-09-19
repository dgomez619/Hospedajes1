import DropdownCities from "@/components/DropdownCities";
import PropertyCard from "../components/PropertyCard";

// const demoProperties = [
//   {
//     id: 1,
//     title: "Valencia, Carabobo",
//     description: t('title'),
//     imageUrl: "https://res.cloudinary.com/dwrinmdz0/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1678223013/samples/landscapes/beach-boat.jpg",
//     price: 120,
//     linkUrl: "/property/apto-val-94",
//   },
  // {
  //   id: 2,
  //   title: "Valencia, Carabobo",
  //   description: "A modern apartment in the city.",
  //   imageUrl: "https://res.cloudinary.com/dwrinmdz0/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1678223013/samples/landscapes/beach-boat.jpg",
  //   price: 150,
  //   linkUrl: "/property/apto-val-95",
  // },
  // {
  //   id: 3,
  //   title: "Lecherias, Anzoategui",
  //   description: "A beautiful beach house.",
  //   imageUrl: "https://res.cloudinary.com/dwrinmdz0/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1678223013/samples/landscapes/beach-boat.jpg",
  //   price: 200,
  //   linkUrl: "/property/casa-lech-96",
  // },
  // {
  //   id: 4,
  //   title: "Chichiriviche, Falcón",
  //   description: "A serene mountain retreat.",
  //   imageUrl: "https://res.cloudinary.com/dwrinmdz0/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1678223013/samples/landscapes/beach-boat.jpg",
  //   price: 180,
  //   linkUrl: "/property/casa-chich-97",
  // },
  // {
  //   id: 5,
  //   title: "Puerto La Cruz, Anzoategui",
  //   description: "An urban loft with a city view.",
  //   imageUrl: "https://res.cloudinary.com/dwrinmdz0/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1678223013/samples/landscapes/beach-boat.jpg",
  //   price: 220,
  // },
  // {
  //   id: 6,
  //   title: "Valencia, Carabobo",
  //   description: "A rustic cabin in the woods.",
  //   imageUrl: "https://res.cloudinary.com/dwrinmdz0/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1678223013/samples/landscapes/beach-boat.jpg",
  //   price: 100,
  //   linkUrl: "/property/cabin-val-98",
  // },
// ];

export default function Home() {
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

  return (
    <main className="bg-gray-100 flex items-center justify-center">
  <section className="py-8 w-full">
    <DropdownCities />
    <div className="container mx-auto flex flex-col items-center">
      {/* <h2 className="text-2xl font-bold mb-4 text-center">Disponibles</h2> */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {demoProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div> */}
    </div>
  </section>
</main>
  );
};

