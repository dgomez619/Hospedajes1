import { useState } from "react";
import ImgModal from "./ImgModal";
import DatePicker from "./DatePicker";
import RatesTable from "./RatesTable";
import Image from "next/image";

type PropertyPageProps = {
  id: string;
  name: string;
  location: string;
  description: string;
  images: string[];
  pricePerNight: number;
  maxGuests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  amenities: string[];
  hostName: string;
  hostBio: string;
  rating: string;
  reviewsCount: number;
};

type GuestPricing = {
  guestPricing: {
    minGuests: number;
    maxGuests: number;
    pricePerNight: number;
  }[];
};

interface PropertyDetailProps {
  property: PropertyPageProps;
  guestPricing: GuestPricing;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property, guestPricing }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // track loading state for each image
  const [imageLoading, setImageLoading] = useState<boolean[]>(
    Array(property.images.length).fill(true)
  );

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-6xl">
      {/* Title and Location */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          {property.name}
        </h1>
        <p className="text-xl text-gray-600 mb-4">{property.location}</p>
        <div className="flex items-center text-lg text-gray-700">
          <span className="text-yellow-500 mr-1">
            &#9733; &#9733; &#9733; &#9733; &#9733;
          </span>
        </div>
      </div>

      <br />

      {/* Image Carousel Section */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 rounded-xl overflow-hidden shadow-lg">
        {/* Main large image */}
        <div
          className="md:col-span-2 lg:col-span-2 h-96 md:h-auto cursor-pointer relative"
          onClick={() => openModal(0)}
        >
          {imageLoading[0] && (
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse rounded-tl-xl md:rounded-bl-xl" />
          )}
          <Image
            src={property.images[0]}
            alt="Main property view"
            className={`w-full h-full object-cover rounded-tl-xl md:rounded-bl-xl hover:opacity-90 transition-opacity duration-200 ${
              imageLoading[0] ? "opacity-0" : "opacity-100"
            }`}
            width={1200}
            height={800}
            onLoadingComplete={() => {
              setTimeout(() => {
                setImageLoading((prev) => {
                  const newState = [...prev];
                  newState[0] = false; // or newState[imgIndex] for other images
                  return newState;
                });
              }, 1200); // 1200ms minimum skeleton duration
            }}
          />
        </div>

        {/* Smaller images grid */}
        <div className="grid grid-cols-2 gap-2 md:gap-4 md:col-span-2 lg:col-span-2">
          {property.images.slice(1, 5).map((image, index) => {
            const imgIndex = index + 1; // offset for slice
            return (
              <div
                key={imgIndex}
                className="relative h-48 md:h-auto cursor-pointer"
                onClick={() => openModal(imgIndex)}
              >
                {imageLoading[imgIndex] && (
                  <div className="absolute inset-0 bg-gray-300 animate-pulse" />
                )}
                <Image
                  width={600}
                  height={400}
                  src={image}
                  alt={`Property view ${imgIndex + 1}`}
                  className={`w-full h-full object-cover hover:opacity-90 transition-opacity duration-200 ${
                    imgIndex === 2 ? "rounded-tr-xl" : ""
                  } ${imgIndex === 4 ? "rounded-br-xl" : ""} ${
                    imageLoading[imgIndex] ? "opacity-0" : "opacity-100"
                  }`}
                  onLoadingComplete={() =>
                    setImageLoading((prev) => {
                      const newState = [...prev];
                      newState[imgIndex] = false;
                      return newState;
                    })
                  }
                />

                {/* "Show all photos" button for last image */}
                {index === 3 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(0);
                    }}
                    className="absolute bottom-4 right-4 bg-white text-gray-900 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 flex items-center text-sm font-medium"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                    Más fotos
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <ImgModal
          images={property.images}
          currentIndex={currentImageIndex}
          onClose={closeModal}
        />
      )}

      <br />

      {/* Property Information Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4">Detalles</h2>
            <p className="text-gray-700 leading-relaxed">
              {property.description}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 text-center">
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="font-semibold text-blue-700">Huéspedes</p>
                <p className="text-lg">{property.maxGuests}</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="font-semibold text-green-700">Habitaciones</p>
                <p className="text-lg">{property.bedrooms}</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <p className="font-semibold text-purple-700">Camas</p>
                <p className="text-lg">{property.beds}</p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <p className="font-semibold text-red-700">Baños</p>
                <p className="text-lg">{property.bathrooms}</p>
              </div>
            </div>
          </div>

          {/* Rates Table */}
          <RatesTable guestPricing={guestPricing.guestPricing} />

          {/* Amenities */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4">Servicios</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
              {property.amenities.map((amenity, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-green-500 mr-2">&#10003;</span>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          {/* Host */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4">Conoce a tu Anfitrión</h2>
            <div className="flex items-center mb-4">
              <img
                width={80}
                height={80}
                src="https://placehold.co/80x80/F0F4F8/607D8B?text=Host"
                alt={property.hostName}
                className="w-20 h-20 rounded-full object-cover mr-4 border-2 border-gray-200"
              />
              <div>
                <h3 className="text-xl font-semibold" translate="no">
                  {property.hostName}
                </h3>
                <p className="text-gray-600">Host</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{property.hostBio}</p>
          </div>
        </div>

        {/* Sidebar - Date Picker */}
        <DatePicker
          property={{
            name: property.name,
            maxGuests: property.maxGuests,
            guestPricing: guestPricing.guestPricing,
          }}
        />
      </div>
    </div>
  );
};

export default PropertyDetail;
