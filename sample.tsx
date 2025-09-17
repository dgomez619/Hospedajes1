 {/* Image Carousel Section */}
         <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 rounded-xl overflow-hidden shadow-lg">
          {/* Main large image (first image) */}
          <div className="md:col-span-2 lg:col-span-2 h-96 md:h-auto">
            <img
              src={property.images[0]}
              alt="Main property view"
              className="w-full h-full object-cover rounded-tl-xl md:rounded-bl-xl"
            />
          </div>

          {/* Smaller images grid */}
          <div className="grid grid-cols-2 gap-2 md:gap-4 md:col-span-2 lg:col-span-2">
            {property.images.slice(1, 5).map((image, index) => (
              <div key={index} className="relative h-48 md:h-auto">
                <img
                  src={image}
                  alt={`Property view ${index + 2}`}
                  className={`w-full h-full object-cover ${
                    index === 1 ? 'rounded-tr-xl' : ''
                  } ${
                    index === 3 ? 'rounded-br-xl' : ''
                  }`}
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/D0D0D0/333333?text=Image+Not+Found'; }}
                />
                {/* "Show all photos" button for the last image */}
                {index === 3 && (
                  <button className="absolute bottom-4 right-4 bg-white text-gray-900 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 flex items-center text-sm font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    Show all photos
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>


// DatePicker component

 .send(
        "service_i3dif7a", // replace with your EmailJS service ID
        "template_atng73o", // replace with your EmailJS template ID
        templateParams,
        "51KQvIusq_7Qyr4Fz" // replace with your EmailJS public key
      )