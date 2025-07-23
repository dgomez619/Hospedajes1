type Property = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
};


const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img src={property.imageUrl} alt={property.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <p className="text-gray-600">{property.description}</p>
        <p className="text-blue-600 font-bold">${property.price} / night</p>
      </div>
    </div>
  )
}

export default PropertyCard