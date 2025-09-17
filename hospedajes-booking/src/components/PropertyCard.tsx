"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Property = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  linkUrl: string;
};

const PropertyCard = ({ property }: { property: Property }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setTimeout(() => setIsLoading(false), 700); // Show skeleton for at least 500ms
  };

  return (
    <div className="w-80 h-80 bg-white rounded-xl shadow-md flex flex-col overflow-hidden">
      <div className="relative w-full h-48">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse transition-opacity duration-500" />
        )}
        <Image
          src={property.imageUrl}
          alt={property.title}
          fill
          className={`object-cover transition-opacity duration-700 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoadingComplete={handleImageLoad}
          sizes="320px"
          priority
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold" translate="no">
          {property.title}
        </h3>
        <p className="text-gray-600">{property.description}</p>
        <p className="text-blue-600 font-bold">{property.price}</p>
        <p>
          <Link href={property.linkUrl} className="text-blue-600 hover:underline">
            Ver más detalles
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
