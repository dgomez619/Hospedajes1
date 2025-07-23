import Hero from "./components/Hero";
import PropertyCard from "./components/PropertyCard";

const demoProperties = [
  {
    id: 1,
    title: "Cozy Cottage",
    description: "A cozy cottage in the countryside.",
    imageUrl: "https://source.unsplash.com/random/300x200?house",
    price: 120,
  },
  {
    id: 2,
    title: "Modern Apartment",
    description: "A modern apartment in the city.",
    imageUrl: "https://source.unsplash.com/random/300x200?apartment",
    price: 150,
  },
  {
    id: 3,
    title: "Beach House",
    description: "A beautiful beach house.",
    imageUrl: "https://source.unsplash.com/random/300x200?beach",
    price: 200,
  },
  {
    id: 4,
    title: "Mountain Retreat",
    description: "A serene mountain retreat.",
    imageUrl: "https://source.unsplash.com/random/300x200?mountain",
    price: 180,
  },
  {
    id: 5,
    title: "Urban Loft",
    description: "An urban loft with a city view.",
    imageUrl: "https://source.unsplash.com/random/300x200?loft",
    price: 220,
  },
  {
    id: 6,
    title: "Rustic Cabin",
    description: "A rustic cabin in the woods.",
    imageUrl: "https://source.unsplash.com/random/300x200?cabin",
    price: 100,
  },
  {    id: 7,
    title: "Luxury Villa",
    description: "A luxury villa with a pool.",
    imageUrl: "https://source.unsplash.com/random/300x200?villa",
    price: 350,
  },
];

const Home = () => {
  return (
  <main className="bg-gray-100">
    <Hero />
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {demoProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  </main>
  );
};

export default Home;